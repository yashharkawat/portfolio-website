import { earlierProjects, featuredProject, profile, projects } from "@/data/profile";

export const revalidate = 3600;

export function GET() {
  const all = [featuredProject, ...projects];
  const body = `# ${profile.name}

> ${profile.title} at ${profile.company}. ${profile.summary}

## Pages
- [Home](${profile.site}/): about, projects, experience, skills, contact
- [Chat with Yash](${profile.site}/connect): ask the site's AI assistant about Yash, or book a 15 or 30 minute call
- [Resume (PDF)](${profile.site}${profile.resume})

## Projects
${all.map((p) => `- [${p.title}](${p.live}): ${p.description.split(". ")[0]}. Stack: ${p.tags.join(", ")}`).join("\n")}
${earlierProjects.map((p) => `- [${p.title}](${p.live}): ${p.year}, ${p.stack}`).join("\n")}

## Contact
- Email: ${profile.email}
- LinkedIn: ${profile.linkedin}
- GitHub: ${profile.github}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
