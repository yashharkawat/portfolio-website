"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp, Sparkles } from "lucide-react";

interface Msg { role: "user" | "assistant"; content: string }

const suggestions = [
  "What has Yash built with AI agents?",
  "What did he do at Pulse Energy?",
  "Which project should I look at first?",
  "What is his tech stack?",
];

const MAX_CHARS = 500;

/** Turns bare URLs and emails into links; everything else stays plain text. */
function Linked({ text }: { text: string }) {
  // Free models sometimes add markdown bold; the bubble is plain text, so drop the asterisks.
  const parts = text.replace(/\*\*/g, "").split(/(https?:\/\/[^\s)]+[^\s).,]|[\w.+-]+@[\w-]+\.[\w.]+\w)/g);
  return (
    <>
      {parts.map((part, i) =>
        /^https?:\/\//.test(part) ? (
          <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="underline decoration-[#c9f04a] underline-offset-2 break-all">
            {part.replace(/^https?:\/\/(www\.)?/, "")}
          </a>
        ) : /^[\w.+-]+@/.test(part) ? (
          <a key={i} href={`mailto:${part}`} className="underline decoration-[#c9f04a] underline-offset-2">
            {part}
          </a>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

/** `fill` makes the chat take the full height of its container (used by the side panel). */
export default function AskYash({ fill = false, autoFocus = false }: { fill?: boolean; autoFocus?: boolean }) {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight });
  }, [messages]);

  async function send(question: string) {
    const text = question.trim().slice(0, MAX_CHARS);
    if (!text || busy) return;
    setError("");
    setInput("");
    const history: Msg[] = [...messages, { role: "user", content: text }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      if (!res.ok || !res.body) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let reply = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        reply += decoder.decode(value, { stream: true });
        setMessages([...history, { role: "assistant", content: reply }]);
      }
      if (!reply.trim()) throw new Error("No answer came back. Please try again.");
    } catch (e) {
      setMessages(history.slice(0, -1));
      setInput(text);
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className={fill ? "flex flex-col h-full min-h-0" : "card p-0 overflow-hidden"}>
      <div className="flex items-center gap-2 px-5 sm:px-6 py-4 border-b border-[#e0dfd9] dark:border-[#1c1c1c]">
        <span className="w-7 h-7 rounded-full bg-[#c9f04a] flex items-center justify-center">
          <Sparkles size={14} className="text-[#0a0a0a]" />
        </span>
        <div>
          <p className="text-sm font-semibold text-[#0a0a0a] dark:text-[#f0f0ee] leading-tight">Ask about Yash</p>
          <p className="text-[11px] text-gray-400 dark:text-gray-600 leading-tight">AI assistant. It answers from this site, and it is not Yash.</p>
        </div>
      </div>

      <div ref={scroller} className={`px-5 sm:px-6 py-5 space-y-4 overflow-y-auto ${fill ? "flex-1 min-h-0" : "max-h-[420px]"}`} aria-live="polite">
        {messages.length === 0 ? (
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Ask anything about his work, projects or background. A few to start:
            </p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  className="px-3.5 py-2 rounded-full text-xs sm:text-sm border border-[#e0dfd9] dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400 hover:border-[#c9f04a] transition-colors text-left"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((m, i) => (
            <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
              <div
                className={`max-w-[88%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                  m.role === "user"
                    ? "bg-[#0a0a0a] text-white dark:bg-[#f0f0ee] dark:text-[#0a0a0a] rounded-br-md"
                    : "bg-[#f0efe9] dark:bg-[#161616] text-[#0a0a0a] dark:text-[#f0f0ee] rounded-bl-md"
                }`}
              >
                {m.content ? <Linked text={m.content} /> : <span className="inline-block animate-pulse text-gray-400">Thinking…</span>}
              </div>
            </div>
          ))
        )}
        {error && <p role="alert" className="text-sm text-red-500">{error}</p>}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="flex items-center gap-2 px-4 sm:px-5 py-3 border-t border-[#e0dfd9] dark:border-[#1c1c1c]"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={MAX_CHARS}
          autoFocus={autoFocus}
          placeholder="Ask a question about Yash"
          aria-label="Ask a question about Yash"
          className="flex-1 min-w-0 px-4 py-2.5 rounded-full bg-[#f5f4f0] dark:bg-[#161616] border border-[#e0dfd9] dark:border-[#2a2a2a] text-[#0a0a0a] dark:text-[#f0f0ee] placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:border-[#c9f04a] text-sm"
        />
        <button
          type="submit"
          disabled={busy || !input.trim()}
          aria-label="Send"
          className="w-10 h-10 shrink-0 rounded-full bg-[#0a0a0a] dark:bg-[#f0f0ee] text-white dark:text-[#0a0a0a] flex items-center justify-center disabled:opacity-30 transition-opacity"
        >
          <ArrowUp size={16} />
        </button>
      </form>
    </div>
  );
}
