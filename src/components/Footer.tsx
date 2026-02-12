"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Yash Harkawat. All rights reserved.
        </p>
        <p className="text-sm text-gray-500 flex items-center gap-1">
          Built with <Heart size={12} className="text-red-400" /> using Next.js
          & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
