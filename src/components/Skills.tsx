"use client";

import AnimatedSection from "./AnimatedSection";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "Redux", level: 80 },
      { name: "HTML/CSS", level: 90 },
      { name: "Material-UI", level: 75 },
    ],
    color: "blue",
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Prisma", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "SQL", level: 80 },
      { name: "Python", level: 75 },
    ],
    color: "purple",
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 75 },
      { name: "C/C++", level: 70 },
    ],
    color: "pink",
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "AWS", level: 65 },
      { name: "Firebase", level: 75 },
      { name: "DSA", level: 85 },
      { name: "Debugging", level: 90 },
    ],
    color: "green",
  },
];

const colorMap: Record<
  string,
  { bg: string; bar: string; text: string; trackBg: string }
> = {
  blue: {
    bg: "bg-blue-50 dark:bg-blue-500/10",
    bar: "bg-gradient-to-r from-blue-500 to-blue-400",
    text: "text-blue-600 dark:text-blue-400",
    trackBg: "bg-blue-100 dark:bg-white/5",
  },
  purple: {
    bg: "bg-purple-50 dark:bg-purple-500/10",
    bar: "bg-gradient-to-r from-purple-500 to-purple-400",
    text: "text-purple-600 dark:text-purple-400",
    trackBg: "bg-purple-100 dark:bg-white/5",
  },
  pink: {
    bg: "bg-pink-50 dark:bg-pink-500/10",
    bar: "bg-gradient-to-r from-pink-500 to-pink-400",
    text: "text-pink-600 dark:text-pink-400",
    trackBg: "bg-pink-100 dark:bg-white/5",
  },
  green: {
    bg: "bg-green-50 dark:bg-green-500/10",
    bar: "bg-gradient-to-r from-green-500 to-green-400",
    text: "text-green-600 dark:text-green-400",
    trackBg: "bg-green-100 dark:bg-white/5",
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
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8 sm:mb-12" />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="p-4 sm:p-6 rounded-xl bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 transition-all duration-300 shadow-sm dark:shadow-none">
                <h3
                  className={`text-base sm:text-lg font-semibold mb-4 sm:mb-6 ${
                    colorMap[category.color].text
                  }`}
                >
                  {category.title}
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1 sm:mb-1.5">
                        <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className={`w-full h-1 sm:h-1.5 rounded-full ${
                          colorMap[category.color].trackBg
                        } overflow-hidden`}
                      >
                        <div
                          className={`h-full rounded-full ${
                            colorMap[category.color].bar
                          } transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
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
