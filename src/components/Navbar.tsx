"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#products" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#f5f4f0]/90 dark:bg-[#080808]/90 backdrop-blur-xl border-b border-[#e0dfd9] dark:border-[#1c1c1c]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-4 flex items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-tight text-[#0a0a0a] dark:text-[#f0f0ee]">
            YH<span className="text-[#c9f04a]">.</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#0a0a0a] dark:hover:text-[#f0f0ee] transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
            <a
              href="/Yash_Harkawat_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs px-4 py-2"
            >
              Resume
            </a>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-[#0a0a0a] dark:text-[#f0f0ee]"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-[#f5f4f0]/98 dark:bg-[#080808]/98 backdrop-blur-xl pt-24 px-8 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="text-3xl font-bold text-[#0a0a0a] dark:text-[#f0f0ee] py-2 border-b border-[#e0dfd9] dark:border-[#1c1c1c] hover:text-[#c9f04a] dark:hover:text-[#c9f04a] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="/Yash_Harkawat_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 justify-center"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
