"use client";

import AnimatedSection from "./AnimatedSection";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Redux", "Tailwind CSS", "HTML/CSS", "Material-UI"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "Prisma", "PostgreSQL", "SQL", "Python"],
  },
  {
    label: "Tools & Cloud",
    skills: ["Git", "GitHub", "AWS", "Firebase", "Google Cloud", "Vercel", "Netlify"],
  },
  {
    label: "CS Fundamentals",
    skills: ["DSA", "System Design", "OOP", "C/C++", "Algorithms"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-end gap-4 mb-12 sm:mb-16">
            <span className="section-number">04</span>
            <div className="mb-3">
              <span className="section-label block mb-1">What I use</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0a0a0a] dark:text-[#f0f0ee]">Tech Stack</h2>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {skillGroups.map((group, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="card p-5 sm:p-6 h-full">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#c9f04a] mb-4">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="pill">{skill}</span>
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
