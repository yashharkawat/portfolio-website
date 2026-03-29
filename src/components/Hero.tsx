"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import VisitorStats from "./VisitorStats";

const roles = ["Full Stack Engineer", "React Developer", "Product Builder", "Node.js Engineer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIndex(i => (i + 1) % roles.length), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[100dvh] grid-bg flex flex-col justify-between pt-28 sm:pt-32 pb-0 overflow-hidden">

      {/* Top: name block */}
      <div className="px-5 sm:px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Status badge + visitor stats */}
          <div className="flex items-center gap-3 mb-6 sm:mb-8 flex-wrap">
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-black dark:bg-white/10 text-white dark:text-white border border-black/10 dark:border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9f04a] animate-pulse" />
              Open to opportunities
            </span>
            <VisitorStats />
          </div>

          {/* Giant name */}
          <h1 className="hero-name text-[#0a0a0a] dark:text-[#f0f0ee]">
            YASH
          </h1>
          <h1 className="hero-name text-[#0a0a0a] dark:text-[#f0f0ee] flex items-end justify-between flex-wrap gap-4">
            <span>HARKAWAT</span>
            {/* Role box tucked bottom-right of name */}
            <span className="text-sm sm:text-base font-normal tracking-normal leading-normal mb-3 sm:mb-4 text-gray-500 dark:text-gray-400 flex flex-col items-end">
              <span className="section-label mb-1">Currently</span>
              <span className="font-medium text-[#0a0a0a] dark:text-[#f0f0ee]">Software Engineer @ Pulse Energy</span>
            </span>
          </h1>
        </motion.div>

        {/* Divider + rotating role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex items-center gap-4 mt-6 sm:mt-8"
        >
          <div className="divider flex-1" />
          <div className="h-8 sm:h-10 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="text-sm sm:text-base font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap"
              >
                → {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar: stats + socials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="px-5 sm:px-8 md:px-12 py-6 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-[#e0dfd9] dark:border-[#1c1c1c] mt-8"
      >
        {/* Stats */}
        <div className="flex flex-wrap gap-6 sm:gap-10">
          {[
            { value: "2+", label: "Years exp." },
            { value: "3", label: "Companies" },
            { value: "IIT KGP", label: "Alumni" },
            { value: "AIR 612", label: "JEE Adv." },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-xl sm:text-2xl font-bold text-[#0a0a0a] dark:text-[#f0f0ee] leading-none">
                {s.value}
              </div>
              <div className="section-label mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTAs + socials */}
        <div className="flex items-center gap-3 flex-wrap">
          <a href="#products" className="btn-primary">
            View work <ArrowUpRight size={14} />
          </a>
          <a href="#contact" className="btn-outline">
            Contact
          </a>
          <div className="flex items-center gap-1 ml-2">
            {[
              { href: "https://github.com/yashharkawat", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/yash-harkawat", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:yashharkawat2000@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="p-2.5 rounded-full text-gray-400 hover:text-[#0a0a0a] dark:hover:text-[#f0f0ee] hover:bg-black/5 dark:hover:bg-white/5 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
