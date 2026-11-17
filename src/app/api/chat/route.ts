import { llmConfigured, streamReply, type ChatMessage } from "@/lib/chat/llm";
import { clientKey, rateLimit } from "@/lib/chat/ratelimit";

export const runtime = "nodejs";
export const maxDuration = 60;

const MAX_CHARS = 500;
const MAX_TURNS = 8;
/** The whole request, and the history we forward, are capped so the endpoint cannot be used as a free general-purpose model. */
const MAX_BODY_BYTES = 12_000;
const MAX_HISTORY_CHARS = 5_000;

/** A browser on another website must not be able to spend this endpoint. Same-site and non-browser calls pass. */
function originAllowed(req: Request): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return true;
  try {
    return new URL(origin).host === req.headers.get("host");
  } catch {
    return false;
  }
}
const DAILY_BUDGET = Number(process.env.CHAT_DAILY_BUDGET || 25);

const json = (status: number, error: string, headers: Record<string, string> = {}) =>
  Response.json({ error }, { status, headers });

function parse(body: unknown): ChatMessage[] | null {
  const raw = (body as { messages?: unknown })?.messages;
  if (!Array.isArray(raw) || raw.length === 0 || raw.length > 40) return null;
  const out: ChatMessage[] = [];
  for (const m of raw) {
    const role = (m as ChatMessage)?.role;
    const content = (m as ChatMessage)?.content;
    if ((role !== "user" && role !== "assistant") || typeof content !== "string") return null;
    const text = content.trim();
    if (!text) return null;
    if (role === "user" && text.length > MAX_CHARS) return null;
    out.push({ role, content: text.slice(0, 1500) });
  }
  if (out[out.length - 1].role !== "user") return null;
  // Keep the newest turns that fit the budget; the latest question is always kept.
  const kept: ChatMessage[] = [];
  let used = 0;
  for (const m of out.slice(-MAX_TURNS).reverse()) {
    if (kept.length && used + m.content.length > MAX_HISTORY_CHARS) break;
    kept.unshift(m);
    used += m.content.length;
  }
  while (kept[0]?.role === "assistant") kept.shift();
  return kept;
}

export async function POST(req: Request) {
  if (!llmConfigured()) return json(503, "The assistant is switched off right now. Please book a call below.");

  if (!originAllowed(req)) return json(403, "This endpoint only serves its own page.");

  let body: unknown;
  try {
    const raw = await req.text();
    if (raw.length > MAX_BODY_BYTES) return json(413, "That message is too long.");
    body = JSON.parse(raw);
  } catch {
    return json(400, "Bad request.");
  }
  const messages = parse(body);
  if (!messages) return json(400, `Send one question of up to ${MAX_CHARS} characters.`);

  const ip = clientKey(req);
  const burst = rateLimit(`b:${ip}`, 6, 5 * 60_000);
  const day = rateLimit(`d:${ip}`, 20, 24 * 3_600_000);
  if (!burst.ok || !day.ok) {
    const wait = Math.max(burst.retryAfterSec, day.retryAfterSec);
    return json(429, "That is a lot of questions. Give it a few minutes, or book a call below.", { "Retry-After": String(wait) });
  }
  if (!rateLimit("global", DAILY_BUDGET, 24 * 3_600_000).ok) {
    return json(429, "The assistant has reached its limit for today. Please book a call below or email Yash.");
  }

  try {
    const stream = await streamReply(messages);
    return new Response(stream, {
      headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" },
    });
  } catch {
    return json(503, "The assistant is busy right now. Try again in a minute, or book a call below.");
  }
}
