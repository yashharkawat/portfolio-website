import "server-only";
import { earlierProjects, experiences, featuredProject, profile, projects, skillGroups } from "@/data/profile";
import { projectDeepDives, pulseDeepDive, workingStyle } from "@/data/knowledge";

const line = (s: string) => s.replace(/\s+/g, " ").trim();

/** Plain-text fact sheet handed to the chat model. Server-only, so it never ships in the page's JavaScript. */
export function buildKnowledge(): string {
  const proj = [featuredProject, ...projects]
    .map(
      (p) =>
        `- ${p.title} (${p.period}). ${line(p.description)}${p.notes ? " " + line(p.notes) : ""} Stack: ${p.tags.join(", ")}. Live: ${p.live || "not public"}.${p.github ? " Code: " + p.github + "." : " Code is private."}`
    )
    .join("\n");
  const exp = experiences
    .map((e) => `- ${e.title}, ${e.company}, ${e.location} (${e.period}).\n${e.points.map((pt) => "  * " + pt).join("\n")}`)
    .join("\n");
  const skills = skillGroups.map((g) => `- ${g.label}: ${g.skills.join(", ")}`).join("\n");
  const earlier = earlierProjects.map((p) => `- ${p.title} (${p.year}, ${p.stack}): ${p.live}`).join("\n");

  return `ABOUT
${profile.name}, ${profile.title} at ${profile.company}, based in ${profile.location}.
${profile.summary}
Education: ${profile.education}
Achievements: ${profile.achievements.join(" ")}

EXPERIENCE
${exp}

PROJECTS (built on his own time)
${proj}

EARLIER PROJECTS
${earlier}

SKILLS
${skills}

CONTACT
Email: ${profile.email}
LinkedIn: ${profile.linkedin}
GitHub: ${profile.github}
Resume (PDF): ${profile.site}${profile.resume}
Website: ${profile.site}

MORE DETAIL (use when the visitor asks for depth)
${pulseDeepDive.trim()}

${projectDeepDives.trim()}

${workingStyle.trim()}`;
}
