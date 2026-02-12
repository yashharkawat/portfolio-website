"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-gray-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
          &copy; {new Date().getFullYear()} Yash Harkawat. All rights reserved.
        </p>
        <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1">
          Built with <Heart size={10} className="text-red-400 sm:hidden" /><Heart size={12} className="text-red-400 hidden sm:block" /> using Next.js
          & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
