"use client";

import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Github, Calendar } from "lucide-react";

const projects = [
  {
    title: "Blogs Website",
    description:
      "A full-featured blogging platform inspired by Medium. Includes search and filter by author, title, date and topic. Users can create, edit, save, and delete posts seamlessly.",
    period: "Jun 2023 - Jul 2023",
    tags: ["React.js", "Firebase", "CSS"],
    gradient: "from-blue-500/10 dark:from-blue-500/20 to-cyan-500/10 dark:to-cyan-500/20",
    borderGlow: "hover:border-blue-300 dark:hover:border-blue-500/30",
  },
  {
    title: "Movies Website",
    description:
      "A dynamic movie discovery website showing IMDB ratings and descriptions. Features include search functionality, detailed movie pages, and a likes system for personalized experience.",
    period: "May 2023 - Jun 2023",
    tags: ["React.js", "API Integration", "CSS"],
    gradient: "from-purple-500/10 dark:from-purple-500/20 to-pink-500/10 dark:to-pink-500/20",
    borderGlow: "hover:border-purple-300 dark:hover:border-purple-500/30",
  },
  {
    title: "Genome Assembly",
    description:
      "Constructed De-Bruijn graph from DNA reads and assembled genome data using Eulerian Cycle. Applied graph algorithms to remove errors like bubbles and tips from error-prone reads.",
    period: "May 2021 - Jul 2021",
    tags: ["Python", "Graph Algorithms", "Bioinformatics"],
    gradient: "from-green-500/10 dark:from-green-500/20 to-emerald-500/10 dark:to-emerald-500/20",
    borderGlow: "hover:border-green-300 dark:hover:border-green-500/30",
  },
  {
    title: "i18n Chrome Extension",
    description:
      "Chrome extension built at Sprinklr that detects translation errors on websites. Intercepts network requests to identify translation files and highlights labels with color-coded feedback.",
    period: "May 2022 - Jul 2022",
    tags: ["JavaScript", "Chrome API", "i18n"],
    gradient: "from-orange-500/10 dark:from-orange-500/20 to-yellow-500/10 dark:to-yellow-500/20",
    borderGlow: "hover:border-orange-300 dark:hover:border-orange-500/30",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-12" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div
                className={`group relative p-6 rounded-xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 ${project.borderGlow} transition-all duration-300 h-full flex flex-col shadow-sm dark:shadow-none`}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all">
                        <Github size={18} />
                      </button>
                      <button className="p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all">
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 text-xs mb-4">
                    <Calendar size={12} />
                    <span>{project.period}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
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
    </section>
  );
}
