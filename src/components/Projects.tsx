"use client";

import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Github, Calendar, Star, ArrowUpRight } from "lucide-react";
import { featuredProject, projects, earlierProjects } from "@/data/profile";


function getProjectLink(project: { live: string; github: string }) {
  return project.live || project.github || "";
}

export default function Projects() {
  const featuredLink = getProjectLink(featuredProject);

  return (
    <section id="products" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-end gap-4 mb-12 sm:mb-16">
            <span className="section-number">02</span>
            <div className="mb-3">
              <span className="section-label block mb-1">What I've built</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0a0a0a] dark:text-[#f0f0ee]">Products</h2>
            </div>
          </div>
        </AnimatedSection>

        {/* Featured project - full width */}
        <AnimatedSection delay={0.1}>
          <div
            className={`group relative p-5 sm:p-8 rounded-xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 ${featuredProject.borderGlow} transition-all duration-300 shadow-sm dark:shadow-none mb-4 sm:mb-6 ${featuredLink ? "cursor-pointer" : ""}`}
          >
            <div
              className={`absolute inset-0 rounded-xl bg-gradient-to-br ${featuredProject.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-2">
                <div className="flex items-center gap-2 sm:gap-3">
                  {featuredLink ? (
                    <a
                      href={featuredLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors after:absolute after:inset-0 after:z-0"
                    >
                      {featuredProject.title}
                    </a>
                  ) : (
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                      {featuredProject.title}
                    </h3>
                  )}
                  <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20 ml-auto sm:ml-0 shrink-0">
                    <Star size={12} className="sm:hidden" />
                    <Star size={14} className="hidden sm:block" />
                  </span>
                </div>
                <div className="flex gap-1 sm:gap-2 relative z-10">
                  {featuredProject.github && (
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 sm:p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
                      aria-label={`${featuredProject.title} GitHub`}
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
                      aria-label={`${featuredProject.title} Live`}
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
          {projects.map((project, index) => {
            const link = getProjectLink(project);
            return (
              <AnimatedSection key={index} delay={(index + 1) * 0.1}>
                <div
                  className={`group relative p-4 sm:p-6 rounded-xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 ${project.borderGlow} transition-all duration-300 h-full flex flex-col shadow-sm dark:shadow-none ${link ? "cursor-pointer" : ""}`}
                >
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      {link ? (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors after:absolute after:inset-0 after:z-0"
                        >
                          {project.title}
                        </a>
                      ) : (
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                      )}
                      <div className="flex gap-1 sm:gap-2 relative z-10">
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
            );
          })}
        </div>

        {/* Earlier work - one compact row */}
        <AnimatedSection delay={0.2}>
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-500 dark:text-gray-500">
            <span className="section-label">Earlier</span>
            {earlierProjects.map((p) => (
              <a
                key={p.title}
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#0a0a0a] dark:hover:text-[#f0f0ee] transition-colors"
              >
                {p.title} <span className="text-gray-400 dark:text-gray-600">({p.year}, {p.stack})</span>
                <ArrowUpRight size={12} />
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
