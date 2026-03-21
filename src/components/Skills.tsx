"use client";

import AnimatedSection from "./AnimatedSection";

const skillGroups = [
  {
    label: "Frontend",
    color: "indigo",
    skills: ["React.js", "TypeScript", "JavaScript", "Next.js", "Redux", "HTML/CSS", "Tailwind CSS", "Material-UI"],
  },
  {
    label: "Backend",
    color: "purple",
    skills: ["Node.js", "Express", "REST APIs", "Prisma", "PostgreSQL", "SQL", "Python"],
  },
  {
    label: "Tools & Cloud",
    color: "pink",
    skills: ["Git", "GitHub", "AWS", "Firebase", "Google Cloud", "Docker", "Vercel"],
  },
  {
    label: "CS Fundamentals",
    color: "violet",
    skills: ["DSA", "System Design", "OOP", "C/C++", "Algorithms"],
  },
];

const colorMap: Record<string, { pill: string; header: string; dot: string }> = {
  indigo: {
    pill: "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-100 dark:border-indigo-500/20 hover:bg-indigo-100 dark:hover:bg-indigo-500/20",
    header: "text-indigo-600 dark:text-indigo-400",
    dot: "bg-indigo-500",
  },
  purple: {
    pill: "bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-100 dark:border-purple-500/20 hover:bg-purple-100 dark:hover:bg-purple-500/20",
    header: "text-purple-600 dark:text-purple-400",
    dot: "bg-purple-500",
  },
  pink: {
    pill: "bg-pink-50 dark:bg-pink-500/10 text-pink-700 dark:text-pink-300 border-pink-100 dark:border-pink-500/20 hover:bg-pink-100 dark:hover:bg-pink-500/20",
    header: "text-pink-600 dark:text-pink-400",
    dot: "bg-pink-500",
  },
  violet: {
    pill: "bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-100 dark:border-violet-500/20 hover:bg-violet-100 dark:hover:bg-violet-500/20",
    header: "text-violet-600 dark:text-violet-400",
    dot: "bg-violet-500",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-8 sm:mb-12" />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {skillGroups.map((group, i) => {
            const c = colorMap[group.color];
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 card-hover h-full">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                    <h3 className={`text-sm font-semibold uppercase tracking-widest ${c.header}`}>
                      {group.label}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium border transition-colors cursor-default ${c.pill}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
