"use client";

import AnimatedSection from "./AnimatedSection";
import { experiences } from "@/data/profile";


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
