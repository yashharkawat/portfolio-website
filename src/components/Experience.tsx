"use client";

import AnimatedSection from "./AnimatedSection";
import { Building2 } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Pulse Energy Technologies Pvt Ltd",
    location: "Bengaluru",
    period: "Dec 2023 - Present",
    current: true,
    points: [
      "Created both front-end and back-end functionality using React.js, Node.js, and Prisma",
      "Developed comprehensive backend APIs for the route planning feature of the MG Motor app",
      "Implemented report generation strategy that significantly reduced download time and server load",
      "Building complete applications, integrating frontend and backend seamlessly",
    ],
    tags: ["React.js", "Node.js", "Prisma", "REST APIs"],
  },
  {
    title: "Front-end Developer",
    company: "Plunes Technologies Pvt. Ltd",
    location: "Gurugram",
    period: "Oct 2023 - Dec 2023",
    current: false,
    points: [
      "Created various forms and pages using React JS and Material-UI, ensuring consistent design",
      "Identified and resolved bugs in the codebase, improving overall website performance",
    ],
    tags: ["React.js", "Material-UI", "Bug Fixing"],
  },
  {
    title: "Product Engineer",
    company: "Sprinklr",
    location: "Gurugram",
    period: "May 2022 - Jul 2022",
    current: false,
    points: [
      "Created a Chrome extension to detect errors during website translation",
      "Intercepted requests and detected files used for i18n translation",
      "Highlighted client-side labels with different colors based on translation files",
    ],
    tags: ["Chrome Extension", "i18n", "JavaScript"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-12" />
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="relative pl-8 md:pl-20">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 md:left-8 top-2 -translate-x-1/2 w-3 h-3 rounded-full ${
                      exp.current
                        ? "bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.5)]"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />

                  <div className="p-6 rounded-xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 transition-all duration-300 group shadow-sm dark:shadow-none">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-1">
                          <Building2 size={14} />
                          <span className="text-sm">
                            {exp.company}, {exp.location}
                          </span>
                        </div>
                      </div>
                      <span
                        className={`text-sm px-3 py-1 rounded-full whitespace-nowrap ${
                          exp.current
                            ? "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20"
                            : "bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/5"
                        }`}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.points.map((point, i) => (
                        <li
                          key={i}
                          className="text-gray-600 dark:text-gray-400 text-sm flex items-start gap-2"
                        >
                          <span className="text-blue-500 mt-1.5 flex-shrink-0">
                            &#8226;
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/5"
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
