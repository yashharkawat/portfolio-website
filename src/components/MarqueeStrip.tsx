"use client";

const items = [
  "React", "Node.js", "TypeScript", "PostgreSQL", "Prisma",
  "Full Stack", "IIT Kharagpur", "AIR 612", "Bengaluru",
  "Open to Work", "Next.js", "REST APIs", "AWS", "Git",
];

export default function MarqueeStrip() {
  const repeated = [...items, ...items];
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
