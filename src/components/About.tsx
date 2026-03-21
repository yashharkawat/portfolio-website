"use client";

import AnimatedSection from "./AnimatedSection";
import { ArrowUpRight } from "lucide-react";

const facts = [
  { value: "AIR 612", label: "JEE Advanced rank — top 0.02%" },
  { value: "7.44", label: "CGPA at IIT Kharagpur (B.Tech + M.Tech)" },
  { value: "2018–23", label: "Five years of engineering at IIT KGP" },
  { value: "MG Motor", label: "App used by thousands of EV owners" },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 relative">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <AnimatedSection>
          <div className="flex items-end gap-4 mb-12 sm:mb-16">
            <span className="section-number">01</span>
            <div className="mb-3">
              <span className="section-label block mb-1">Who I am</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0a0a0a] dark:text-[#f0f0ee]">About Me</h2>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Text */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-5 text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
              <p>
                I&apos;m a Software Engineer with a dual degree in Electrical Engineering
                from{" "}
                <span className="font-semibold text-[#0a0a0a] dark:text-[#f0f0ee]">IIT Kharagpur</span>
                . I thrive at the intersection of clean code and thoughtful product design.
              </p>
              <p>
                At{" "}
                <span className="font-semibold text-[#0a0a0a] dark:text-[#f0f0ee]">Pulse Energy</span>
                , I build full-stack features for EV charging infrastructure — from
                responsive React UIs to performant Node.js APIs with Prisma. My work
                ships in the MG Motor app, used by thousands of EV owners daily.
              </p>
              <p>
                Beyond my job, I build side projects, explore new technologies, and
                love the challenge of turning complex problems into simple, elegant
                solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <a href="#contact" className="btn-primary">
                Let&apos;s talk <ArrowUpRight size={14} />
              </a>
              <a
                href="/Yash_Harkawat_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                View Resume
              </a>
            </div>
          </AnimatedSection>

          {/* Fact grid */}
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {facts.map((f, i) => (
                <div key={i} className="card p-5 sm:p-6">
                  <div className="text-2xl sm:text-3xl font-bold text-[#0a0a0a] dark:text-[#f0f0ee] mb-1.5 gradient-text-static">
                    {f.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 leading-snug">
                    {f.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
