"use client";

import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Github, Calendar, Star } from "lucide-react";

const featuredProject = {
  title: "FNF Recovery Assistant",
  description:
    "A full-stack SaaS app that helps Indian employees recover unpaid Full & Final settlement dues from former employers. Features a 4-stage email escalation system (polite reminder → legal notice), formal labour complaint filing with state-specific guides for all 36 states/UTs, Stripe payments, Google OAuth, and cloud file uploads for evidence management.",
  period: "Feb 2026",
  tags: ["React", "Node.js", "TypeScript", "PostgreSQL", "Stripe", "Google Cloud", "Prisma"],
  github: "",
  live: "https://fnf-recovery-assistant.vercel.app/",
  gradient: "from-indigo-500/10 dark:from-indigo-500/20 to-blue-500/10 dark:to-blue-500/20",
  borderGlow: "hover:border-indigo-300 dark:hover:border-indigo-500/30",
};

const projects = [
  {
    title: "Blogs Website",
    description:
      "A full-featured blogging platform inspired by Medium. Includes search and filter by author, title, date and topic. Users can create, edit, save, and delete posts seamlessly.",
    period: "Jun 2023 - Jul 2023",
    tags: ["React.js", "Firebase", "CSS"],
    github: "https://github.com/yashharkawat",
    live: "https://blogs-project-fdc4c.web.app/",
    gradient: "from-blue-500/10 dark:from-blue-500/20 to-cyan-500/10 dark:to-cyan-500/20",
    borderGlow: "hover:border-blue-300 dark:hover:border-blue-500/30",
  },
  {
    title: "Movies Website",
    description:
      "A dynamic movie discovery website showing IMDB ratings and descriptions. Features include search functionality, detailed movie pages, and a likes system for personalized experience.",
    period: "May 2023 - Jun 2023",
    tags: ["React.js", "API Integration", "CSS"],
    github: "https://github.com/yashharkawat",
    live: "https://imdb-movies-rating.web.app/",
    gradient: "from-purple-500/10 dark:from-purple-500/20 to-pink-500/10 dark:to-pink-500/20",
    borderGlow: "hover:border-purple-300 dark:hover:border-purple-500/30",
  },
  {
    title: "Genome Assembly",
    description:
      "Constructed De-Bruijn graph from DNA reads and assembled genome data using Eulerian Cycle. Applied graph algorithms to remove errors like bubbles and tips from error-prone reads.",
    period: "May 2021 - Jul 2021",
    tags: ["Python", "Graph Algorithms", "Bioinformatics"],
    github: "https://github.com/yashharkawat",
    live: "",
    gradient: "from-green-500/10 dark:from-green-500/20 to-emerald-500/10 dark:to-emerald-500/20",
    borderGlow: "hover:border-green-300 dark:hover:border-green-500/30",
  },
  {
    title: "i18n Chrome Extension",
    description:
      "Chrome extension built at Sprinklr that detects translation errors on websites. Intercepts network requests to identify translation files and highlights labels with color-coded feedback.",
    period: "May 2022 - Jul 2022",
    tags: ["JavaScript", "Chrome API", "i18n"],
    github: "",
    live: "",
    gradient: "from-orange-500/10 dark:from-orange-500/20 to-yellow-500/10 dark:to-yellow-500/20",
    borderGlow: "hover:border-orange-300 dark:hover:border-orange-500/30",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8 sm:mb-12" />
        </AnimatedSection>

        {/* Featured project - full width */}
        <AnimatedSection delay={0.1}>
          <div
            className={`group relative p-5 sm:p-8 rounded-xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 ${featuredProject.borderGlow} transition-all duration-300 shadow-sm dark:shadow-none mb-4 sm:mb-6`}
          >
            <div
              className={`absolute inset-0 rounded-xl bg-gradient-to-br ${featuredProject.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-2">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20">
                    <Star size={10} className="sm:hidden" />
                    <Star size={12} className="hidden sm:block" />
                    Featured
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                    {featuredProject.title}
                  </h3>
                </div>
                <div className="flex gap-1 sm:gap-2">
                  {featuredProject.github && (
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 sm:p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
                      aria-label="FNF Recovery Assistant GitHub"
                    >
                      <Github size={16} className="sm:hidden" />
                      <Github size={18} className="hidden sm:block" />
                    </a>
                  )}
                  {featuredProject.live && (
                    <a
                      href={featuredProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 sm:p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
                      aria-label="FNF Recovery Assistant Live"
                    >
                      <ExternalLink size={16} className="sm:hidden" />
                      <ExternalLink size={18} className="hidden sm:block" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                {featuredProject.description}
              </p>

              <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 text-[10px] sm:text-xs mb-3 sm:mb-4">
                <Calendar size={12} />
                <span>{featuredProject.period}</span>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Other projects - 2 col grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={(index + 1) * 0.1}>
              <div
                className={`group relative p-4 sm:p-6 rounded-xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 ${project.borderGlow} transition-all duration-300 h-full flex flex-col shadow-sm dark:shadow-none`}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-1 sm:gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 sm:p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
                          aria-label={`${project.title} GitHub`}
                        >
                          <Github size={16} className="sm:hidden" />
                          <Github size={18} className="hidden sm:block" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 sm:p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
                          aria-label={`${project.title} Live Demo`}
                        >
                          <ExternalLink size={16} className="sm:hidden" />
                          <ExternalLink size={18} className="hidden sm:block" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 text-[10px] sm:text-xs mb-3 sm:mb-4">
                    <Calendar size={12} />
                    <span>{project.period}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/5"
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
    </section>
  );
}
