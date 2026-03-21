"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const roles = [
  "Full Stack Engineer",
  "React Developer",
  "Product Builder",
  "Node.js Developer",
];

const stats = [
  { value: "2+", label: "Years experience" },
  { value: "3", label: "Companies" },
  { value: "IIT KGP", label: "Alumni" },
  { value: "AIR 612", label: "JEE Advanced" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center grid-bg overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-500/8 dark:bg-indigo-500/12 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/8 dark:bg-purple-500/12 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pink-500/5 dark:bg-pink-500/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-5 sm:mb-7"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-dot" />
            Open to opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 sm:mb-5 text-gray-900 dark:text-white"
        >
          Yash{" "}
          <span className="gradient-text">Harkawat</span>
        </motion.h1>

        {/* Rotating role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-8 sm:h-10 flex items-center justify-center mb-5 sm:mb-7"
        >
          <span className="text-gray-400 dark:text-gray-500 text-lg sm:text-xl mr-2">→</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
        >
          Currently engineering EV charging infrastructure at{" "}
          <span className="text-gray-900 dark:text-white font-medium">Pulse Energy</span>.
          I build full-stack products that are fast, beautiful, and impactful.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14"
        >
          <a
            href="#contact"
            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 text-sm sm:text-base"
          >
            Get in Touch
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#products"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/8 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/8 transition-all text-center text-sm sm:text-base font-medium"
          >
            View Work
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-12 sm:mb-16"
        >
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
              className="p-2.5 rounded-xl text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 border border-transparent hover:border-gray-200 dark:hover:border-white/10 transition-all"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-3 sm:p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 text-center"
            >
              <div className="text-xl sm:text-2xl font-bold gradient-text-static stat-number mb-0.5">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={18} className="text-gray-300 dark:text-gray-700" />
        </motion.div>
      </motion.div>
    </section>
  );
}
