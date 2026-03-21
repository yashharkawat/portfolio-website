"use client";

import AnimatedSection from "./AnimatedSection";
import { Zap, Trophy, Code2, MapPin } from "lucide-react";

const highlights = [
  {
    icon: Trophy,
    color: "amber",
    title: "AIR 612",
    sub: "IIT JEE Advanced",
  },
  {
    icon: Code2,
    color: "indigo",
    title: "2+ Years",
    sub: "Professional dev",
  },
  {
    icon: Zap,
    color: "purple",
    title: "Full Stack",
    sub: "React · Node · SQL",
  },
  {
    icon: MapPin,
    color: "pink",
    title: "Bengaluru",
    sub: "India",
  },
];

const colorMap: Record<string, { bg: string; icon: string }> = {
  amber:  { bg: "bg-amber-50 dark:bg-amber-500/10",  icon: "text-amber-600 dark:text-amber-400" },
  indigo: { bg: "bg-indigo-50 dark:bg-indigo-500/10", icon: "text-indigo-600 dark:text-indigo-400" },
  purple: { bg: "bg-purple-50 dark:bg-purple-500/10", icon: "text-purple-600 dark:text-purple-400" },
  pink:   { bg: "bg-pink-50 dark:bg-pink-500/10",     icon: "text-pink-600 dark:text-pink-400" },
};

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-8 sm:mb-12" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          <AnimatedSection delay={0.1}>
            <div className="space-y-5 text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg">
              <p>
                I&apos;m a Software Engineer with a dual degree (B.Tech & M.Tech)
                in Electrical Engineering from{" "}
                <span className="text-gray-900 dark:text-white font-semibold">IIT Kharagpur</span>.
                I love building full-stack products that solve real problems.
              </p>
              <p>
                At{" "}
                <span className="text-gray-900 dark:text-white font-semibold">Pulse Energy</span>,
                I work across the entire stack — crafting responsive UIs in React,
                designing robust APIs with Node.js and Prisma, and shipping features
                used by thousands through the MG Motor app.
              </p>
              <p>
                Outside work I enjoy building side projects, exploring new tech,
                and algorithmic challenges. I&apos;m driven by the idea that great
                software should feel effortless to the person using it.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-md shadow-indigo-500/20"
              >
                Let&apos;s talk
              </a>
              <a
                href="/Yash_Harkawat_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/8 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/8 transition-colors"
              >
                View Resume
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {highlights.map((h, i) => {
                const c = colorMap[h.color];
                return (
                  <div
                    key={i}
                    className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 card-hover"
                  >
                    <div className={`w-9 h-9 rounded-xl ${c.bg} flex items-center justify-center mb-3`}>
                      <h.icon size={18} className={c.icon} />
                    </div>
                    <div className="font-bold text-gray-900 dark:text-white text-base sm:text-lg">{h.title}</div>
                    <div className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 mt-0.5">{h.sub}</div>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
