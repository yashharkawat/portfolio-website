"use client";

import AnimatedSection from "./AnimatedSection";
import { GraduationCap, Briefcase, Code } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8 sm:mb-12" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <AnimatedSection delay={0.1}>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg mb-4 sm:mb-6">
              I&apos;m a Software Engineer with a dual degree (B.Tech & M.Tech)
              in Electrical Engineering from{" "}
              <span className="text-gray-900 dark:text-white font-medium">
                IIT Kharagpur
              </span>
              . I&apos;m passionate about building full-stack web applications
              that solve real-world problems.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg mb-4 sm:mb-6">
              Currently at Pulse Energy Technologies, I work across the entire
              stack — from crafting responsive UIs with React to designing
              robust APIs with Node.js and Prisma. I&apos;ve had the opportunity
              to contribute to products used by thousands, including the MG Motor
              app.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg">
              Beyond my professional work, I enjoy building side projects,
              exploring new technologies, and solving algorithmic challenges.
              I ranked <span className="text-gray-900 dark:text-white font-medium">AIR 612</span>{" "}
              in IIT JEE Advanced, which speaks to my problem-solving abilities.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-4 sm:space-y-6">
              <div className="p-4 sm:p-6 rounded-xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 transition-colors shadow-sm dark:shadow-none">
                <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-blue-50 dark:bg-blue-500/10">
                    <GraduationCap size={18} className="text-blue-500 dark:text-blue-400 sm:hidden" />
                    <GraduationCap size={20} className="text-blue-500 dark:text-blue-400 hidden sm:block" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Education</h3>
                    <p className="text-xs sm:text-sm text-gray-500">IIT Kharagpur</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                  B.Tech & M.Tech in Electrical Engineering (2018-2023) — CGPA:
                  7.44
                </p>
              </div>

              <div className="p-4 sm:p-6 rounded-xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 transition-colors shadow-sm dark:shadow-none">
                <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-purple-50 dark:bg-purple-500/10">
                    <Briefcase size={18} className="text-purple-500 dark:text-purple-400 sm:hidden" />
                    <Briefcase size={20} className="text-purple-500 dark:text-purple-400 hidden sm:block" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Experience</h3>
                    <p className="text-xs sm:text-sm text-gray-500">2+ Years</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                  Worked at Pulse Energy, Plunes Technologies, and Sprinklr
                  building production-grade software.
                </p>
              </div>

              <div className="p-4 sm:p-6 rounded-xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 transition-colors shadow-sm dark:shadow-none">
                <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-pink-50 dark:bg-pink-500/10">
                    <Code size={18} className="text-pink-500 dark:text-pink-400 sm:hidden" />
                    <Code size={20} className="text-pink-500 dark:text-pink-400 hidden sm:block" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Tech Stack</h3>
                    <p className="text-xs sm:text-sm text-gray-500">Full Stack</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                  React, Node.js, TypeScript, Python, and more — building
                  end-to-end solutions.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
