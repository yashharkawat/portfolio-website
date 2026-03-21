"use client";

import AnimatedSection from "./AnimatedSection";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Pulse Energy Technologies",
    location: "Bengaluru",
    period: "Dec 2023 – Present",
    current: true,
    points: [
      "Built frontend and backend features using React.js, Node.js, and Prisma",
      "Developed backend APIs for the route planning feature of the MG Motor EV app",
      "Implemented a report generation strategy that significantly reduced download time and server load",
      "Ship end-to-end features integrating frontend and backend seamlessly",
    ],
    tags: ["React.js", "Node.js", "Prisma", "REST APIs", "PostgreSQL"],
  },
  {
    title: "Front-end Developer",
    company: "Plunes Technologies",
    location: "Gurugram",
    period: "Oct 2023 – Dec 2023",
    current: false,
    points: [
      "Built forms and pages with React.js and Material-UI ensuring pixel-perfect design",
      "Identified and resolved bugs, improving overall website performance",
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
      "Built a Chrome extension to detect errors during website translation",
      "Intercepted requests and detected files used for i18n translation",
      "Highlighted client-side labels with colors based on translation files",
    ],
    tags: ["Chrome Extension", "i18n", "JavaScript"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-8 sm:mb-12" />
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-purple-500/40 to-transparent hidden sm:block" />

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="relative sm:pl-20">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-4 md:left-8 top-6 -translate-x-1/2 hidden sm:flex items-center justify-center w-4 h-4 rounded-full border-2 ${
                      exp.current
                        ? "border-indigo-500 bg-indigo-500/20 shadow-[0_0_12px_rgba(99,102,241,0.5)]"
                        : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                    }`}
                  >
                    {exp.current && <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />}
                  </div>

                  <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 card-hover group">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {exp.title}
                          </h3>
                          {exp.current && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20 font-medium">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                          <Building2 size={13} className="flex-shrink-0" />
                          <span className="text-xs sm:text-sm">{exp.company} · {exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500 text-xs sm:text-sm whitespace-nowrap">
                        <Calendar size={12} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-1.5 mb-4">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm flex items-start gap-2">
                          <span className="text-indigo-400 mt-1.5 flex-shrink-0 text-[8px]">◆</span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
