"use client";

import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, MapPin, Send, Github, Linkedin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-end gap-4 mb-12 sm:mb-16">
            <span className="section-number">05</span>
            <div className="mb-3">
              <span className="section-label block mb-1">Say hello</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0a0a0a] dark:text-[#f0f0ee]">Get in Touch</h2>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <AnimatedSection delay={0.1}>
            <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
              Open to new roles, interesting projects, or just a good tech conversation.
              My inbox is always open.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { href: "mailto:yashharkawat2000@gmail.com", icon: Mail, label: "Email", value: "yashharkawat2000@gmail.com" },
                { href: "tel:+918824874733", icon: Phone, label: "Phone", value: "+91 8824874733" },
                { href: undefined, icon: MapPin, label: "Location", value: "Bengaluru, India" },
              ].map((item) => {
                const Tag = item.href ? "a" : "div";
                return (
                  <Tag
                    key={item.label}
                    {...(item.href ? { href: item.href } : {})}
                    className="card flex items-center gap-4 p-4 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#f0efe9] dark:bg-[#1a1a1a] flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9f04a] transition-colors">
                      <item.icon size={16} className="text-gray-500 dark:text-gray-400 group-hover:text-[#0a0a0a] transition-colors" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="section-label">{item.label}</p>
                      <p className="text-sm font-medium text-[#0a0a0a] dark:text-[#f0f0ee] truncate mt-0.5">{item.value}</p>
                    </div>
                    {item.href && <ArrowUpRight size={14} className="text-gray-300 dark:text-gray-600 flex-shrink-0" />}
                  </Tag>
                );
              })}
            </div>

            <div className="flex gap-3">
              {[
                { href: "https://github.com/yashharkawat", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/yash-harkawat", icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <Icon size={15} /> {label}
                </a>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const el = e.currentTarget.elements;
                const subject = (el.namedItem("subject") as HTMLInputElement)?.value || "Hello from Portfolio";
                const message = (el.namedItem("message") as HTMLTextAreaElement)?.value || "";
                window.location.href = `mailto:yashharkawat2000@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
              }}
              className="card p-6 sm:p-8 space-y-5"
            >
              <h3 className="font-bold text-[#0a0a0a] dark:text-[#f0f0ee] text-lg mb-2">Send a message</h3>
              {[
                { id: "name", label: "Name", placeholder: "Your name", type: "input" },
                { id: "subject", label: "Subject", placeholder: "What's this about?", type: "input" },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="section-label block mb-2">{f.label}</label>
                  <input
                    type="text" id={f.id} name={f.id} placeholder={f.placeholder}
                    className="w-full px-4 py-3 rounded-xl bg-[#f5f4f0] dark:bg-[#161616] border border-[#e0dfd9] dark:border-[#2a2a2a] text-[#0a0a0a] dark:text-[#f0f0ee] placeholder:text-gray-300 dark:placeholder:text-gray-700 focus:outline-none focus:border-[#c9f04a] transition-colors text-sm"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="section-label block mb-2">Message</label>
                <textarea
                  id="message" name="message" rows={4} placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-xl bg-[#f5f4f0] dark:bg-[#161616] border border-[#e0dfd9] dark:border-[#2a2a2a] text-[#0a0a0a] dark:text-[#f0f0ee] placeholder:text-gray-300 dark:placeholder:text-gray-700 focus:outline-none focus:border-[#c9f04a] transition-colors resize-none text-sm"
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                <Send size={14} /> Send Message
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
