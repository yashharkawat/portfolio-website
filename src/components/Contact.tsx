"use client";

import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mb-12">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a tech conversation. Feel free to reach
            out!
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <a
                href="mailto:yashharkawat2000@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 hover:border-blue-300 dark:hover:border-blue-500/30 transition-all group shadow-sm dark:shadow-none"
              >
                <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-500/10 group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition-colors">
                  <Mail size={20} className="text-blue-500 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-900 dark:text-white">yashharkawat2000@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+918824874733"
                className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 hover:border-purple-300 dark:hover:border-purple-500/30 transition-all group shadow-sm dark:shadow-none"
              >
                <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-500/10 group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20 transition-colors">
                  <Phone size={20} className="text-purple-500 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-gray-900 dark:text-white">+91 8824874733</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
                <div className="p-3 rounded-lg bg-pink-50 dark:bg-pink-500/10">
                  <MapPin size={20} className="text-pink-500 dark:text-pink-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-gray-900 dark:text-white">Bengaluru, India</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/yashharkawat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-all"
                >
                  <Github size={18} />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/yashharkawat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-all"
                >
                  <Linkedin size={18} />
                  <span className="text-sm">LinkedIn</span>
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
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-600 dark:text-gray-400 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:border-blue-400 dark:focus:border-blue-500/50 transition-colors shadow-sm dark:shadow-none"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm text-gray-600 dark:text-gray-400 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:border-blue-400 dark:focus:border-blue-500/50 transition-colors shadow-sm dark:shadow-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-600 dark:text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:border-blue-400 dark:focus:border-blue-500/50 transition-colors resize-none shadow-sm dark:shadow-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
