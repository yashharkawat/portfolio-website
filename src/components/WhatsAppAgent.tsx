"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Check,
  Plus,
  ArrowUpRight,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const EMAIL_HREF =
  "mailto:yashharkawat2000@gmail.com?subject=WhatsApp%20agent";
const WA_HREF = "https://wa.me/918824874733";

const includes = [
  "WhatsApp Cloud API or Twilio setup, on your own number",
  "n8n + OpenAI/Claude agent that answers FAQs, captures leads and books slots",
  "Handover to a human when the agent is unsure or the customer asks",
  "One week of fixes after handover",
];

const upsells = [
  { name: "Voice agent", price: "USD 1,200", note: "Same brain, on phone calls" },
  { name: "CRM / Sheets / HubSpot sync", price: "USD 300", note: "Leads land where your team already works" },
  { name: "Monthly care", price: "USD 150 / mo", note: "Monitoring, prompt tweaks, API changes" },
];

const days = [
  { day: "Day 1", title: "Scope call", text: "30 minutes. We go through what customers ask you most, what a good lead looks like, and how booking works today." },
  { day: "Day 2-3", title: "Build", text: "I set up the WhatsApp API, write the agent flows in n8n, and connect the model. You get a test link on day 3." },
  { day: "Day 4", title: "Test on your number", text: "The agent runs on your real number with you watching. We fix wording, edge cases and the handover rule." },
  { day: "Day 5", title: "Handover", text: "You get the n8n workflows, credentials, a short doc, and a walkthrough. The fix window starts here." },
];

const proof = [
  { title: "Production LLM features with guardrails", text: "Shipped at Pulse Energy: user-facing AI features with validation, fallbacks and monitoring, not demos." },
  { title: "n8n AI automations", text: "Built agent workflows in n8n that call OpenAI/Claude, hit external APIs and hand off cleanly when they should." },
  { title: "50k+ user pipelines", text: "Backend systems serving tens of thousands of users, so the agent will not fall over on a busy day." },
];

const faqs = [
  { q: "Which WhatsApp API do you use?", a: "Meta's WhatsApp Cloud API by default, it is the cheapest and the official one. If you already use Twilio, I build on that instead. Either way the number stays yours." },
  { q: "What if I need changes after the 5 days?", a: "The first week of fixes is included. After that, small changes are billed hourly or covered by the monthly care plan." },
  { q: "Do you host it?", a: "I set it up on your accounts (n8n cloud or a small server you own, your OpenAI/Anthropic key). You pay the providers directly and keep full control. I can host it for you under the monthly care plan if you prefer." },
];

function CTAButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center">
        <MessageCircle size={15} /> Message on WhatsApp
      </a>
      <a href={EMAIL_HREF} className="btn-outline justify-center">
        <Mail size={15} /> Email me
      </a>
    </div>
  );
}

function SectionHeader({ number, label, title }: { number: string; label: string; title: string }) {
  return (
    <AnimatedSection>
      <div className="flex items-end gap-4 mb-10 sm:mb-14">
        <span className="section-number">{number}</span>
        <div className="mb-3">
          <span className="section-label block mb-1">{label}</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0a0a0a] dark:text-[#f0f0ee]">{title}</h2>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function WhatsAppAgent() {
  return (
    <>
      {/* Hero */}
      <section className="grid-bg pt-32 sm:pt-40 pb-16 sm:pb-24 px-5 sm:px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label block mb-4">Fixed scope, fixed price</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] text-[#0a0a0a] dark:text-[#f0f0ee] max-w-4xl">
              WhatsApp AI agent for your business in{" "}
              <span className="gradient-text">5 days</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
              An agent on your WhatsApp number that answers customer questions,
              captures leads and books appointments, and hands over to a person
              when it should. Built by one engineer, delivered in a week.
            </p>
            <div className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] dark:text-[#f0f0ee]">USD 800</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">fixed. No hourly billing, no surprises.</span>
            </div>
            <CTAButtons className="mt-8" />
          </motion.div>
        </div>
      </section>

      <div className="divider" />

      {/* What you get */}
      <section id="what-you-get" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="01" label="Included" title="What you get" />
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            <AnimatedSection delay={0.1} className="lg:col-span-3">
              <ul className="space-y-3">
                {includes.map((item) => (
                  <li key={item} className="card flex items-start gap-4 p-4 sm:p-5">
                    <div className="w-8 h-8 rounded-xl bg-[#c9f04a] flex items-center justify-center flex-shrink-0">
                      <Check size={15} className="text-[#0a0a0a]" />
                    </div>
                    <p className="text-sm sm:text-base text-[#0a0a0a] dark:text-[#f0f0ee] leading-relaxed pt-1">{item}</p>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="lg:col-span-2">
              <p className="section-label mb-4">Add-ons, if you need them</p>
              <div className="space-y-3">
                {upsells.map((u) => (
                  <div key={u.name} className="card p-4 sm:p-5 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-xl bg-[#f0efe9] dark:bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                      <Plus size={15} className="text-gray-500 dark:text-gray-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="text-sm font-semibold text-[#0a0a0a] dark:text-[#f0f0ee]">{u.name}</p>
                        <p className="text-sm font-mono text-gray-500 dark:text-gray-400 whitespace-nowrap">{u.price}</p>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{u.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Timeline */}
      <section id="timeline" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="02" label="Timeline" title="How the 5 days go" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {days.map((d, i) => (
              <AnimatedSection key={d.day} delay={0.08 * i}>
                <div className="card p-5 sm:p-6 h-full flex flex-col">
                  <span className="pill mb-4 self-start">{d.day}</span>
                  <h3 className="font-bold text-[#0a0a0a] dark:text-[#f0f0ee] mb-2">{d.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{d.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Proof */}
      <section id="proof" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="03" label="Why me" title="Things I have already shipped" />
          <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
            {proof.map((p, i) => (
              <AnimatedSection key={p.title} delay={0.08 * i}>
                <div className="card p-5 sm:p-6 h-full">
                  <h3 className="font-bold text-[#0a0a0a] dark:text-[#f0f0ee] mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{p.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3}>
            <Link href="/" className="inline-flex items-center gap-1 mt-8 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-[#0a0a0a] dark:hover:text-[#f0f0ee] transition-colors">
              Full portfolio <ArrowUpRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <div className="divider" />

      {/* FAQ */}
      <section id="faq" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="04" label="Questions" title="FAQ" />
          <div className="max-w-3xl space-y-3">
            {faqs.map((f, i) => (
              <AnimatedSection key={f.q} delay={0.06 * i}>
                <div className="card p-5 sm:p-6">
                  <h3 className="font-bold text-[#0a0a0a] dark:text-[#f0f0ee] mb-2">{f.q}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Footer CTA */}
      <section id="contact" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="card p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div>
                <span className="section-label block mb-2">Start this week</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0a0a0a] dark:text-[#f0f0ee]">
                  Tell me what your customers ask on WhatsApp.
                </h2>
                <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl">
                  Send a message with your business and the questions you get most. I reply within a day with whether the 5-day build fits and when we can start.
                </p>
              </div>
              <CTAButtons className="flex-shrink-0" />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
