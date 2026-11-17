"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import AskYash from "./AskYash";

/** Floating "Ask about Yash" button that opens the assistant in a side panel. */
export default function AskWidget() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            type="button"
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25 }}
            aria-label="Ask the AI assistant about Yash"
            className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[60] flex items-center gap-2 pl-3.5 pr-4 py-3 rounded-full bg-[#0a0a0a] dark:bg-[#f0f0ee] text-white dark:text-[#0a0a0a] text-sm font-semibold shadow-lg shadow-black/20 hover:scale-[1.03] transition-transform"
          >
            <span className="w-6 h-6 rounded-full bg-[#c9f04a] flex items-center justify-center">
              <Sparkles size={13} className="text-[#0a0a0a]" />
            </span>
            Ask about Yash
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="shade"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[70] bg-black/30 backdrop-blur-[2px]"
              aria-hidden="true"
            />
            <motion.aside
              key="panel"
              role="dialog"
              aria-modal="true"
              aria-label="Ask about Yash"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 z-[80] h-[100dvh] w-full sm:w-[440px] bg-white dark:bg-[#0d0d0d] border-l border-[#e0dfd9] dark:border-[#1c1c1c] shadow-2xl flex flex-col"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full flex items-center justify-center text-gray-500 hover:text-[#0a0a0a] dark:hover:text-[#f0f0ee] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                <X size={18} />
              </button>
              <div className="flex-1 min-h-0">
                <AskYash fill autoFocus />
              </div>
              <a
                href="/connect"
                className="block text-center text-xs text-gray-500 dark:text-gray-500 hover:text-[#0a0a0a] dark:hover:text-[#f0f0ee] py-3 border-t border-[#e0dfd9] dark:border-[#1c1c1c] transition-colors"
              >
                Want to talk to the real Yash? Book a call →
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
