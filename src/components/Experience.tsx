"use client";

import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    title: "Software Engineer",
    company: "Pulse Energy Technologies",
    location: "Bengaluru",
    period: "Dec 2023 – Present",
    current: true,
    points: [
      "Engineered full-stack features for an EV charging infrastructure platform using React.js, Node.js, TypeScript, and Prisma ORM, shipping to the MG Motor app used by 50,000+ EV owners across India.",
      "Designed and implemented 10+ backend REST APIs for the route planning feature, enabling real-time EV charger discovery and navigation within the MG Motor mobile application.",
      "Architected a report generation pipeline using chunked streaming, reducing PDF download times and server load significantly compared to synchronous bulk processing.",
      "Delivered 15+ end-to-end features independently — from PostgreSQL schema design to React UI — reducing cross-team dependency and accelerating release cycles.",
      "Resolved 30+ bugs across codebase through code reviews and production incident triage, improving platform stability and reducing critical error rate.",
    ],
    tags: ["React.js", "Node.js", "TypeScript", "Prisma", "REST APIs", "PostgreSQL"],
  },
  {
    title: "Front-end Developer",
    company: "Plunes Technologies",
    location: "Gurugram",
    period: "Oct 2023 – Dec 2023",
    current: false,
    points: [
      "Developed 10+ responsive forms and UI pages using React.js and Material-UI, achieving pixel-perfect design consistency across the product.",
      "Debugged and resolved 15+ critical issues through systematic testing, improving page load performance and reducing user-facing errors.",
    ],
    tags: ["React.js", "Material-UI", "JavaScript"],
  },
  {
    title: "Product Engineer Intern",
    company: "Sprinklr",
    location: "Gurugram",
    period: "May 2022 – Jul 2022",
    current: false,
    points: [
      "Engineered a Chrome extension to detect i18n translation errors in real time, significantly reducing QA investigation time for localization issues.",
      "Implemented color-coded visual highlighting across 100+ client-side i18n labels based on translation file status, enabling faster identification of missing translations.",
    ],
    tags: ["Chrome Extension", "i18n", "JavaScript"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-end gap-4 mb-12 sm:mb-16">
            <span className="section-number">03</span>
            <div className="mb-3">
              <span className="section-label block mb-1">Where I've been</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0a0a0a] dark:text-[#f0f0ee]">Experience</h2>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="card p-5 sm:p-7 group">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base sm:text-lg font-bold text-[#0a0a0a] dark:text-[#f0f0ee] group-hover:text-[#c9f04a] transition-colors">
                        {exp.title}
                      </h3>
                      {exp.current && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#c9f04a] text-[#0a0a0a] font-bold uppercase tracking-wide">
                          Now
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-gray-400 dark:text-gray-500 whitespace-nowrap pt-0.5">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-1.5 mb-4">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2.5">
                      <span className="text-[#c9f04a] mt-1.5 text-[8px] flex-shrink-0">◆</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="pill text-[11px]">{tag}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
