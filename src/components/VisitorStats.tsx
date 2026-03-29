"use client";

import { useEffect, useState } from "react";

export default function VisitorStats() {
  const [count, setCount] = useState<string | null>(null);
  const [unique, setUnique] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/visitors");
        if (!res.ok) return;
        const data = await res.json();
        if (data.count && data.count !== "0") setCount(data.count);
        if (data.count_unique && data.count_unique !== "0") setUnique(data.count_unique);
      } catch {
        // silently fail
      }
    }
    fetchStats();
  }, []);

  if (!count) return null;

  return (
    <span className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/10">
      <span className="inline-flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
        {count} visits
      </span>
      {unique && (
        <>
          <span className="w-px h-3 bg-gray-300 dark:bg-gray-600" />
          <span>{unique} unique visitors</span>
        </>
      )}
    </span>
  );
}
