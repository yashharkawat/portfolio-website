"use client";

import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4 sm:mb-6" />
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mb-8 sm:mb-12">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a tech conversation. Feel free to reach
            out!
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <AnimatedSection delay={0.1}>
            <div className="space-y-4 sm:space-y-6">
              <a
                href="mailto:yashharkawat2000@gmail.com"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 hover:border-blue-300 dark:hover:border-blue-500/30 transition-all group shadow-sm dark:shadow-none"
              >
                <div className="p-2.5 sm:p-3 rounded-lg bg-blue-50 dark:bg-blue-500/10 group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                  <Mail size={18} className="text-blue-500 dark:text-blue-400 sm:hidden" />
                  <Mail size={20} className="text-blue-500 dark:text-blue-400 hidden sm:block" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-gray-500">Email</p>
                  <p className="text-gray-900 dark:text-white text-sm sm:text-base truncate">yashharkawat2000@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+918824874733"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 hover:border-purple-300 dark:hover:border-purple-500/30 transition-all group shadow-sm dark:shadow-none"
              >
                <div className="p-2.5 sm:p-3 rounded-lg bg-purple-50 dark:bg-purple-500/10 group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20 transition-colors flex-shrink-0">
                  <Phone size={18} className="text-purple-500 dark:text-purple-400 sm:hidden" />
                  <Phone size={20} className="text-purple-500 dark:text-purple-400 hidden sm:block" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Phone</p>
                  <p className="text-gray-900 dark:text-white text-sm sm:text-base">+91 8824874733</p>
                </div>
              </a>

              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
                <div className="p-2.5 sm:p-3 rounded-lg bg-pink-50 dark:bg-pink-500/10 flex-shrink-0">
                  <MapPin size={18} className="text-pink-500 dark:text-pink-400 sm:hidden" />
                  <MapPin size={20} className="text-pink-500 dark:text-pink-400 hidden sm:block" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Location</p>
                  <p className="text-gray-900 dark:text-white text-sm sm:text-base">Bengaluru, India</p>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 pt-2 sm:pt-4">
                <a
                  href="https://github.com/yashharkawat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-all"
                >
                  <Github size={16} className="sm:hidden" />
                  <Github size={18} className="hidden sm:block" />
                  <span className="text-xs sm:text-sm">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/yash-harkawat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-all"
                >
                  <Linkedin size={16} className="sm:hidden" />
                  <Linkedin size={18} className="hidden sm:block" />
                  <span className="text-xs sm:text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `mailto:yashharkawat2000@gmail.com?subject=${encodeURIComponent(
                  (e.currentTarget.elements.namedItem("subject") as HTMLInputElement)?.value || "Hello from Portfolio"
                )}&body=${encodeURIComponent(
                  (e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement)?.value || ""
                )}`;
              }}
              className="space-y-3 sm:space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1.5 sm:mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:border-blue-400 dark:focus:border-blue-500/50 transition-colors shadow-sm dark:shadow-none text-sm sm:text-base"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1.5 sm:mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:border-blue-400 dark:focus:border-blue-500/50 transition-colors shadow-sm dark:shadow-none text-sm sm:text-base"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1.5 sm:mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:border-blue-400 dark:focus:border-blue-500/50 transition-colors resize-none shadow-sm dark:shadow-none text-sm sm:text-base"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity text-sm sm:text-base"
              >
                <Send size={14} className="sm:hidden" />
                <Send size={16} className="hidden sm:block" />
                Send Message
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
