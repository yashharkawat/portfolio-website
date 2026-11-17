/**
 * One source of truth for the site copy. The page sections render from it and the
 * "Chat with Yash" assistant answers from it, so the two can never disagree.
 */

/** From this day the site shows the new employer. Pages re-render hourly, so no deploy is needed. */
export const joinedNewRole = Date.now() >= Date.parse("2026-11-24T00:00:00+05:30");

export const profile = {
  name: "Yash Harkawat",
  title: "Software Engineer",
  company: joinedNewRole ? "FlexEnergi" : "Pulse Energy",
  location: "Bengaluru, India",
  email: "yashharkawat2000@gmail.com",
  github: "https://github.com/yashharkawat",
  linkedin: "https://www.linkedin.com/in/yash-harkawat",
  site: "https://www.yashharkawat.com",
  resume: "/Yash_Harkawat_Resume.pdf",
  summary:
    `Full stack engineer from IIT Kharagpur. I have 2.5+ years of shipping production software end to end: PostgreSQL schema, Node.js and TypeScript services, React UIs. At Pulse Energy I ${joinedNewRole ? "worked" : "work"} on an EV charging platform behind the MG Motor app, used by 50,000+ EV owners. Outside work I build and run my own products, most of them around LLMs, agents and MCP.`,
  education:
    "Dual Degree (B.Tech + M.Tech) in Electrical Engineering, IIT Kharagpur, Jun 2018 to May 2023, CGPA 7.44/10.",
  achievements: [
    "All India Rank 612 in JEE Advanced and AIR 848 in JEE Mains (top 0.02% nationally).",
    "Five-year Dual Degree at IIT Kharagpur.",
  ],
};

export interface Project {
  title: string;
  description: string;
  period: string;
  tags: string[];
  github: string;
  live: string;
  gradient: string;
  borderGlow: string;
  /** Extra facts only the chat assistant uses. */
  notes?: string;
}

export const featuredProject: Project = {
  title: "Zojo",
  description:
    "An anime and streetwear clothing brand that I built and run alone. Two stores are live: zojoofficial.com for India and wearzojo.com for the US. One Next.js codebase handles the storefront, cart, checkout, order emails and an admin panel. Orders go straight to print-on-demand partners (Qikink in India, Printful in the US). No inventory. The India store runs as a Docker image on Google Cloud Run behind a Cloudflare Worker, with Postgres on Supabase.",
  period: "Apr 2026 - Present",
  tags: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Razorpay", "Cloud Run", "Cloudflare Workers", "Docker"],
  github: "",
  live: "https://zojoofficial.com",
  gradient: "from-rose-500/8 dark:from-rose-500/15 to-pink-500/8 dark:to-pink-500/15",
  borderGlow: "hover:border-rose-200 dark:hover:border-rose-500/30",
  notes:
    "US store: https://wearzojo.com. Moved the India store from Vercel to Google Cloud Run in Nov 2026; the host is one Cloudflare Worker setting, so it can move again in seconds. Payments by Razorpay (UPI, cards). Daily jobs sync the product catalogue and support mail.",
};

export const projects: Project[] = [
  {
    title: "video-automation",
    description:
      "A web app that makes YouTube Shorts in viral simulation formats and posts them on a schedule. You connect a channel, pick a format and set a rule like \"every day at 12:00\". Each video is rendered on the server, then waits for your approve or reject. It can also post by itself if you switch that on. A 95-check end-to-end test suite covers it.",
    period: "Nov 2026",
    tags: ["Python", "FastAPI", "SQLAlchemy", "YouTube Data API", "OAuth 2.0", "Docker", "Google Cloud"],
    github: "",
    live: "https://34-93-91-175.sslip.io",
    gradient: "from-violet-500/10 dark:from-violet-500/20 to-indigo-500/10 dark:to-indigo-500/20",
    borderGlow: "hover:border-violet-300 dark:hover:border-violet-500/30",
    notes:
      "Runs on one Google Cloud VM with Docker and Caddy for HTTPS. Videos are physics simulations (for example a ball escaping rotating rings) rendered in Python at 1080x1920. A test channel posts public Shorts every day through the app's own scheduler.",
  },
  {
    title: "Codebase Copilot",
    description:
      "An MCP server that gives Claude Code, Cursor and Claude Desktop hybrid semantic search over any repository. Tree-sitter AST chunking, local ONNX embeddings (no API key) and BM25 fused with reciprocal-rank fusion. Measured on 50 hand-verified questions: Recall@5 80% → 88%, Recall@1 44% → 62% over a naive RAG baseline. Ships with a remote MCP endpoint, a live retrieval playground and cited LLM answers.",
    period: "Sep 2026",
    tags: ["MCP", "RAG", "TypeScript", "Next.js", "Tree-sitter", "ONNX", "BM25", "Vercel"],
    github: "https://github.com/yashharkawat/codebase-copilot",
    live: "https://codebase-copilot.zojoofficial.com",
    gradient: "from-emerald-500/10 dark:from-emerald-500/20 to-teal-500/10 dark:to-teal-500/20",
    borderGlow: "hover:border-emerald-300 dark:hover:border-emerald-500/30",
    notes:
      "MRR went from 0.60 to 0.73. A cross-encoder reranker was tested and made results worse (88% to 80% Recall@5), so it ships switched off.",
  },
  {
    title: "Helpdesk Agent",
    description:
      "A customer-support AI agent with a hand-written agent loop. It is an MCP client that discovers its tools from three MCP servers (RAG knowledge base, orders, refunds and tickets), and business rules are enforced in the servers rather than the prompt. Measured on 28 scripted scenarios: 27/28 resolved with 0 policy violations, versus 4 of 14 attacks succeeding when the same rules lived only in the prompt.",
    period: "Sep 2026",
    tags: ["AI Agents", "MCP", "RAG", "TypeScript", "Next.js", "Tool Calling", "Evals", "Vercel"],
    github: "https://github.com/yashharkawat/helpdesk-agent",
    live: "https://helpdesk-agent.zojoofficial.com",
    gradient: "from-sky-500/10 dark:from-sky-500/20 to-emerald-500/10 dark:to-emerald-500/20",
    borderGlow: "hover:border-sky-300 dark:hover:border-sky-500/30",
    notes:
      "No agent framework. The one failed scenario was not a policy violation: the agent re-read an order until it ran out of its six-step budget.",
  },
  {
    title: "Docs Q&A",
    description:
      "Retrieval-augmented question answering where every fact in the answer carries a citation to the passage it came from. If the documents do not hold the answer it says so instead of guessing. Chunking and embeddings run in the browser with transformers.js, and you can upload your own PDF, Markdown or text files.",
    period: "Sep 2026",
    tags: ["RAG", "Embeddings", "transformers.js", "Next.js", "TypeScript", "Citations"],
    github: "https://github.com/yashharkawat/rag-docs-qa",
    live: "https://rag-docs-qa.vercel.app",
    gradient: "from-cyan-500/10 dark:from-cyan-500/20 to-blue-500/10 dark:to-blue-500/20",
    borderGlow: "hover:border-cyan-300 dark:hover:border-cyan-500/30",
  },
  {
    title: "Structured Extraction",
    description:
      "Paste an invoice or an email and get JSON that has passed a schema, a confidence score for every field and a human review queue for anything doubtful. Invalid output is sent back to the model with the exact errors, up to three tries. Every run is logged with latency, tokens and cost.",
    period: "Sep 2026",
    tags: ["LLM", "Zod", "JSON Schema", "Next.js", "TypeScript", "Human in the loop"],
    github: "https://github.com/yashharkawat/llm-extract",
    live: "https://llm-extract-psi.vercel.app",
    gradient: "from-amber-500/10 dark:from-amber-500/20 to-orange-500/10 dark:to-orange-500/20",
    borderGlow: "hover:border-amber-300 dark:hover:border-amber-500/30",
  },
  {
    title: "FNF Recovery Assistant",
    description:
      "A full-stack SaaS app that helps Indian employees recover unpaid Full & Final settlement dues from former employers. Features a 4-stage email escalation system (polite reminder → legal notice), formal labour complaint filing with state-specific guides for all 36 states/UTs, Razorpay payments, Google OAuth, and cloud file uploads for evidence management.",
    period: "Feb 2026",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL", "Razorpay", "Google Cloud", "Prisma"],
    github: "",
    live: "https://fnf-recovery.yashharkawat.com",
    gradient: "from-indigo-500/10 dark:from-indigo-500/20 to-purple-500/10 dark:to-purple-500/20",
    borderGlow: "hover:border-indigo-300 dark:hover:border-indigo-500/30",
  },
];

/** Older work, shown as one compact row. */
export const earlierProjects = [
  { title: "Blogs Website", year: "2023", stack: "React, Firebase", live: "https://blogs-website.yashharkawat.com" },
  { title: "Movies Website", year: "2023", stack: "React, REST API", live: "https://imdb-movies-rating.yashharkawat.com" },
];

const newRole = {
  title: "Software Engineer, DER Integration",
  company: "FlexEnergi",
  location: "Remote",
  period: "Nov 2026 – Present",
  current: true,
  points: [] as string[],
  tags: [] as string[],
};

export const experiences = [
  ...(joinedNewRole ? [newRole] : []),
  {
    title: "Software Engineer",
    company: "Pulse Energy Technologies",
    location: "Bengaluru",
    period: joinedNewRole ? "Dec 2023 – Nov 2026" : "Dec 2023 – Present",
    current: !joinedNewRole,
    points: [
      "Built full-stack features (React.js, Node.js, TypeScript, Prisma, PostgreSQL) for an EV charging platform behind the MG Motor app, used by 50,000+ EV owners across India.",
      "Designed and shipped a real-time Uptime & Reliability platform: a 1-hour aggregation pipeline (168 buckets per charge point per week) on Redis-backed queues and workers, rolled out across 50+ charge point operators with sub-500 ms reads from pre-aggregated rollups.",
      "Built two charging-protocol stacks, Beckn (UBC) and a full OCPI module suite (locations, sessions, tokens, CDRs, commands), plus a UBC to OCPI adaptor that connects Beckn flows to external operators in production.",
      "Moved the route-planning backend from Python to Node.js, re-implementing 14+ REST APIs (route creation, elevation, favourites, history) with zero behaviour regressions.",
      "Delivered 15+ features on my own from PostgreSQL schema to REST API to React UI, and designed a chunked-streaming report pipeline that cut PDF download time and server load.",
      "Built internal Claude Code agent skills that trace failed Beckn transactions to the failing step, and a multi-persona AI PR-review tool that posts inline GitHub reviews.",
    ],
    tags: ["React.js", "Node.js", "TypeScript", "Prisma", "PostgreSQL", "Redis", "OCPI", "Beckn"],
  },
  {
    title: "Front-end Developer",
    company: "Plunes Technologies",
    location: "Gurugram",
    period: "Oct 2023 – Dec 2023",
    current: false,
    points: [
      "Developed 10+ responsive forms and UI pages using React.js and Material-UI, matching the designs closely across the product.",
      "Debugged and resolved 15+ critical issues through systematic testing, improving page load performance and reducing user-facing errors.",
    ],
    tags: ["React.js", "Material-UI", "JavaScript"],
  },
  {
    title: "Product Engineer Intern",
    company: "Sprinklr",
    location: "Gurugram",
    period: "May 2022 – Jul 2022",
    current: false,
    points: [
      "Built a Chrome extension that detects i18n translation errors in real time, cutting QA investigation time for localisation issues.",
      "Colour-coded 100+ client-side i18n labels by translation file status, so missing translations are visible at a glance.",
    ],
    tags: ["Chrome Extension", "i18n", "JavaScript"],
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux Toolkit", "Tailwind CSS", "Material-UI", "Jest", "React Testing Library", "PWA"],
  },
  {
    label: "Backend & Data",
    skills: ["Node.js", "Express.js", "REST API Design", "Prisma", "Drizzle", "PostgreSQL", "Redis (queues, caching)", "Kafka", "Python", "FastAPI"],
  },
  {
    label: "AI / LLM",
    skills: ["LLM applications", "RAG", "MCP servers and clients", "Tool-calling agents", "Evals", "Guardrails", "Structured output", "Claude, OpenAI and Gemini APIs", "Claude Code"],
  },
  {
    label: "Platform & Cloud",
    skills: ["OCPI & Beckn (UBC)", "JWT, OAuth 2.0, RBAC", "Razorpay", "Webhooks", "AWS", "Google Cloud", "Cloudflare Workers", "Vercel", "Docker", "GitHub Actions"],
  },
];

const line = (s: string) => s.replace(/\s+/g, " ").trim();

/** Plain-text fact sheet handed to the chat model. Everything in it is already public on this site. */
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
Website: ${profile.site}`;
}
