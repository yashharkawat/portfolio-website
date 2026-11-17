"use client";

import { useState } from "react";
import { Send, Clock, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const topics = ["A role on your team", "A project or contract", "AI agents and MCP", "Zojo and side products", "Just saying hi"];
const durations = [15, 30] as const;

const chip = (active: boolean) =>
  `px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
    active
      ? "bg-[#c9f04a] border-[#c9f04a] text-[#0a0a0a]"
      : "bg-transparent border-[#e0dfd9] dark:border-[#2a2a2a] text-gray-600 dark:text-gray-400 hover:border-[#c9f04a]"
  }`;

const field =
  "w-full px-4 py-3 rounded-xl bg-[#f5f4f0] dark:bg-[#161616] border border-[#e0dfd9] dark:border-[#2a2a2a] text-[#0a0a0a] dark:text-[#f0f0ee] placeholder:text-gray-300 dark:placeholder:text-gray-700 focus:outline-none focus:border-[#c9f04a] transition-colors text-sm";

/** With a Cal.com link the calendar shows inline; without one the same choices go out as an email. */
export default function ConnectPanel({ calLink }: { calLink: string }) {
  const [topic, setTopic] = useState(topics[0]);
  const [minutes, setMinutes] = useState<(typeof durations)[number]>(30);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(`${minutes} min call: ${topic}`)}&body=${encodeURIComponent(
    `Hi Yash,\n\nI would like a ${minutes} minute call about: ${topic}.\n\n${note ? note + "\n\n" : ""}A few times that work for me (with time zone):\n\n\n${name}`
  )}`;

  return (
    <div className="space-y-8">
      <div>
        <p className="section-label mb-3">What is it about?</p>
        <div className="flex flex-wrap gap-2">
          {topics.map((t) => (
            <button key={t} type="button" onClick={() => setTopic(t)} aria-pressed={topic === t} className={chip(topic === t)}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="section-label mb-3">How long?</p>
        <div className="flex gap-2">
          {durations.map((d) => (
            <button key={d} type="button" onClick={() => setMinutes(d)} aria-pressed={minutes === d} className={chip(minutes === d)}>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} /> {d} min
              </span>
            </button>
          ))}
        </div>
      </div>

      {calLink ? (
        <div className="card p-0 overflow-hidden">
          <iframe
            key={minutes}
            title={`Book a ${minutes} minute call with Yash`}
            src={`https://cal.com/${calLink}/${minutes}min?embed=true&layout=month_view&notes=${encodeURIComponent(topic)}`}
            className="w-full h-[680px] bg-white"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="card p-6 sm:p-8 space-y-5">
          <div>
            <label htmlFor="c-name" className="section-label block mb-2">Your name</label>
            <input id="c-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className={field} />
          </div>
          <div>
            <label htmlFor="c-note" className="section-label block mb-2">Anything I should know first? (optional)</label>
            <textarea id="c-note" rows={3} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Company, role, link, context..." className={`${field} resize-none`} />
          </div>
          <a href={mailto} className="btn-primary w-full justify-center">
            <Send size={14} /> Request a {minutes} min call
          </a>
          <p className="text-xs text-gray-400 dark:text-gray-600">
            This opens your mail app with the details filled in. Add a few times that suit you and I will confirm one.
          </p>
        </div>
      )}

      <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center gap-2">
        <Mail size={14} /> Prefer to write?{" "}
        <a href={`mailto:${profile.email}`} className="underline hover:text-[#0a0a0a] dark:hover:text-[#f0f0ee]">
          {profile.email}
        </a>
      </p>
    </div>
  );
}
