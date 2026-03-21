"use client";

import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, MapPin, Send, Github, Linkedin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4 sm:mb-6" />
          <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg max-w-xl mb-8 sm:mb-12">
            Open to new opportunities, interesting projects, or just a good tech conversation.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <AnimatedSection delay={0.1}>
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {[
                {
                  href: "mailto:yashharkawat2000@gmail.com",
                  icon: Mail,
                  label: "Email",
                  value: "yashharkawat2000@gmail.com",
                  color: "indigo",
                },
                {
                  href: "tel:+918824874733",
                  icon: Phone,
                  label: "Phone",
                  value: "+91 8824874733",
                  color: "purple",
                },
                {
                  href: undefined,
                  icon: MapPin,
                  label: "Location",
                  value: "Bengaluru, India",
                  color: "pink",
                },
              ].map((item) => {
                const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
                  indigo: { bg: "bg-indigo-50 dark:bg-indigo-500/10", icon: "text-indigo-500 dark:text-indigo-400", border: "hover:border-indigo-200 dark:hover:border-indigo-500/30" },
                  purple: { bg: "bg-purple-50 dark:bg-purple-500/10", icon: "text-purple-500 dark:text-purple-400", border: "hover:border-purple-200 dark:hover:border-purple-500/30" },
                  pink:   { bg: "bg-pink-50 dark:bg-pink-500/10",     icon: "text-pink-500 dark:text-pink-400",     border: "hover:border-pink-200 dark:hover:border-pink-500/30" },
                };
                const c = colorMap[item.color];
                const Tag = item.href ? "a" : "div";
                return (
                  <Tag
                    key={item.label}
                    {...(item.href ? { href: item.href } : {})}
                    className={`flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 ${c.border} transition-all card-hover`}
                  >
                    <div className={`p-2.5 rounded-xl ${c.bg} flex-shrink-0`}>
                      <item.icon size={18} className={c.icon} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-gray-400 dark:text-gray-500 mb-0.5">{item.label}</p>
                      <p className="text-gray-900 dark:text-white text-sm font-medium truncate">{item.value}</p>
                    </div>
                    {item.href && <ArrowUpRight size={14} className="text-gray-300 dark:text-gray-600 ml-auto flex-shrink-0" />}
                  </Tag>
                );
              })}
            </div>

            <div className="flex gap-3">
              {[
                { href: "https://github.com/yashharkawat", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/yash-harkawat", icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-white/[0.04] border border-gray-100 dark:border-white/8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-200 dark:hover:border-white/15 transition-all text-sm font-medium"
                >
                  <Icon size={16} />
                  {label}
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
              className="space-y-4 p-5 sm:p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/5"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-5">Send a message</h3>
              {[
                { id: "name", label: "Name", type: "input", placeholder: "Your name" },
                { id: "subject", label: "Subject", type: "input", placeholder: "What's this about?" },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-xs text-gray-500 dark:text-gray-400 mb-1.5 font-medium">
                    {field.label}
                  </label>
                  <input
                    type="text"
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/8 text-gray-900 dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500/50 transition-colors text-sm"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-xs text-gray-500 dark:text-gray-400 mb-1.5 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/8 text-gray-900 dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500/50 transition-colors resize-none text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20 text-sm"
              >
                <Send size={14} />
                Send Message
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
