"use client";

import { useEffect, useState } from "react";

export default function VisitorCount() {
  const [count, setCount] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCount() {
      try {
        const res = await fetch(
          "https://yashharkawat.goatcounter.com/counter/%2F.json"
        );
        if (!res.ok) return;
        const data = await res.json();
        if (data.count && data.count !== "0") {
          setCount(data.count);
        }
      } catch {
        // silently fail
      }
    }
    fetchCount();
  }, []);

  if (!count) return null;

  return (
    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
      <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
      {count} visitors
    </span>
  );
}
