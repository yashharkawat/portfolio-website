import { llmConfigured, streamReply, type ChatMessage } from "@/lib/chat/llm";
import { clientKey, rateLimit } from "@/lib/chat/ratelimit";

export const runtime = "nodejs";
export const maxDuration = 60;

const MAX_CHARS = 500;
const MAX_TURNS = 8;
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
    out.push({ role, content: text.slice(0, 2000) });
  }
  if (out[out.length - 1].role !== "user") return null;
  return out.slice(-MAX_TURNS);
}

export async function POST(req: Request) {
  if (!llmConfigured()) return json(503, "The assistant is switched off right now. Please use the form below.");

  let body: unknown;
  try {
    body = await req.json();
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
    return json(429, "That is a lot of questions. Give it a few minutes, or use the form below.", { "Retry-After": String(wait) });
  }
  if (!rateLimit("global", DAILY_BUDGET, 24 * 3_600_000).ok) {
    return json(429, "The assistant has reached its limit for today. Please use the form below or email Yash.");
  }

  try {
    const stream = await streamReply(messages);
    return new Response(stream, {
      headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" },
    });
  } catch {
    return json(503, "The assistant is busy right now. Try again in a minute, or use the form below.");
  }
}
