/**
 * Extra detail that only the "Ask about Yash" assistant reads. The site sections stay short;
 * this is where the depth lives. Everything here is safe to say in public.
 */

export const projectDeepDives = `
ZOJO (clothing brand, Apr 2026 to now)
- What it is: an anime and streetwear clothing brand that Yash built and runs alone. India store zojoofficial.com, US store wearzojo.com.
- What he built: the storefront, cart and checkout, online payments, order and support emails, invoices, an admin panel, custom-tee uploads, and the tooling around it (design workflow, product photos, short videos for social).
- Stack he is happy to name: Next.js, TypeScript, PostgreSQL.
- He does not share suppliers, fulfilment, hosting or other operational details of the business. If asked, say so and suggest talking to him.

VIDEO-AUTOMATION (Nov 2026)
- What it is: a web app that makes YouTube Shorts in viral simulation formats and posts them on a schedule.
- Flow: sign in with Google, connect a YouTube channel, pick a format, set a rule such as "every day at 12:00". Each video is made on the server, then the user approves or rejects it, or it posts by itself if that switch is on.
- Stack: Python, FastAPI, YouTube Data API with OAuth.
- Quality: an end-to-end test suite of 95 checks. A test channel posts public Shorts daily through the app's own scheduler.

CODEBASE COPILOT (Sep 2026)
- What it is: an MCP server that gives Claude Code, Cursor and Claude Desktop real code search over any repository, plus a web playground.
- How it works: tree-sitter (WASM) chunks code into functions, methods, classes and types across seven languages. Embeddings are bge-small-en-v1.5 as int8 ONNX through transformers.js, run locally and inside the Vercel function (about 1.6 s cold, about 10 ms warm), so no embedding API or key. BM25 uses a code-aware tokenizer that splits identifiers (getCookieValue becomes get, cookie, value). Dense and BM25 results are fused with Reciprocal Rank Fusion (k = 60). The vector store is a flat Float32Array scanned by brute force: 1,127 chunks in under 5 ms.
- MCP tools: copilot_search_code, copilot_get_symbol, copilot_find_usages, copilot_read_chunk, copilot_list_repos. All read-only, validated with Zod, served over stdio (local, private repos) and Streamable HTTP (hosted demo).
- Evaluation: 50 hand-verified questions over the honojs/hono repo (187 files, 26k lines); a hit needs the right file and an overlapping line range. Against a naive RAG baseline (50-line windows + dense): Recall@5 80% to 88%, Recall@1 44% to 62%, MRR@10 0.60 to 0.73, warm query latency 5 ms.
- Findings: hybrid search was the biggest single win, and BM25 alone beat dense alone on code. AST chunking mostly improved precision (Recall@1 54% to 62% under hybrid). A cross-encoder reranker made results worse (Recall@5 88% to 80% at 658 ms per query), so it ships off. He kept the negative result in the table.
- Security: no request value ever becomes a file path, no user-built RegExp, the indexer honours .gitignore and skips secrets.
- Limits he states himself: one repository, one language, 50 questions written by an LLM and verified by hand.

HELPDESK AGENT (Sep 2026)
- What it is: a customer-support agent for a fictional shop, with a hand-written agent loop of about 100 lines and no framework.
- Design: the agent is an MCP client. It discovers tools at run time with tools/list from three MCP servers: knowledge base (hybrid RAG over 22 help articles), orders, and tickets (refunds, escalations). The loop contains no tool names, so adding a server adds abilities without touching the agent. It has a six-step budget, parallel tool calls and per-call timeouts.
- Key idea: business rules are enforced in the servers, not the prompt. Authorization is bound to the session and no tool accepts a customer id, so the model cannot be talked into another account.
- Evaluation: 28 scripted customer scenarios scored on the business state left behind (8 everyday, 6 knowledge-base, 8 policy-risk, 6 adversarial). With rules in the servers: 27 of 28 resolved and 0 of 14 policy violations. With the same rules only in the prompt: 4 of 14 violations, for example it refunded an amount it was told to escalate, split a refund to dodge the cap, and obeyed a forged "system notice".
- The one failure was not a violation: the agent kept re-reading an order and ran out of its step budget.
- Stack: TypeScript, Next.js, MCP SDK, Zod, local ONNX embeddings, BM25, free tool-calling models through OpenRouter with rotation.

DOCS Q&A (Sep 2026)
- Retrieval-augmented answers where every fact carries a citation to its passage, and "the documents do not say" instead of a guess. Documents are chunked by heading or page (up to 900 characters) and embedded in the browser with all-MiniLM-L6-v2 through transformers.js, so uploads never leave the device for indexing. Accepts PDF, Markdown and text.

STRUCTURED EXTRACTION (Sep 2026)
- Turns an invoice or email into JSON that has passed a Zod schema. The model is asked for a confidence score per field; invalid output goes back to the model with the exact validation errors, up to three attempts; low-confidence fields land in a human review queue. Every run logs latency, tokens and cost.

FNF RECOVERY ASSISTANT (Feb 2026)
- A SaaS app that helps Indian employees recover unpaid full and final settlement dues: a 4-stage email escalation from polite reminder to legal notice, labour-complaint guides for all 36 states and union territories, online payments, Google sign-in and evidence uploads.
- Stack: React, Node.js, TypeScript, PostgreSQL.

OTHER THINGS HE HAS BUILT
- Image Upscaler: a self-hosted 4x image upscaler. FastAPI serving Real-ESRGAN (PyTorch) with automatic device choice (Apple MPS, CUDA or CPU), a background job queue for bulk uploads, a folder watcher and a Next.js drag-and-drop UI.
- ScheduleAI (Mar 2026, now retired): a PWA for guided workout sessions where Gemini extracted a weekly schedule from an uploaded PDF or DOCX into structured JSON; live timer, voice instructions, Web Push, offline support.
- This website and the assistant you are: Next.js and Tailwind.
- Automation with Claude Code: he runs much of his own operations (store upkeep, content pipelines, reporting) through agent skills and scripts he wrote.
`;

/** Filled from Yash's own handover notes and merged pull requests. */
export const pulseDeepDive = `
PULSE ENERGY IN DETAIL (Dec 2023 to Nov 2026)
Pulse Energy builds software for EV charging: consumer apps (including the MG Motor app), an operator console, fleet tools and the backend that talks to chargers. Yash worked across the core Node.js/TypeScript backend, the React operator console and several standalone services.

Scale of his contribution (from the company's GitHub history)
- About 1,420 merged pull requests across 23 repositories between Dec 2023 and Nov 2026, of which roughly 1,030 are feature or fix PRs and the rest release merges. By year: 308 in 2024, 443 in 2025, 662 in 2026.
- Where: core backend about 619 PRs, operator console (React) about 283, shared types library about 280, an enterprise client's charging management system about 110, the rest in protocol services, a workflow service, a fleet driver app and web apps.
- About 2,233 commits in the core backend alone.

HEADLINE WORK IN PLAIN WORDS (start here; most visitors do not know EV charging terms)
1. Connected the company's chargers to India's national EV charging network. Think of it as UPI for charging: a driver can find, pay for and start a charge on any member's charger from a third-party app such as BHIM. He built the whole seller side: the order flow, payments hand-off, reservations and live availability updates. (Domain names: UBC, Beckn, OCPI.)
2. Made slow analytics fast. Charger uptime reports used to scan millions of raw log rows on every request. He redesigned them so reports load quickly from small pre-computed summaries.
3. Built a workflow automation engine from scratch, similar to Zapier or n8n: users draw a flow on a canvas, and it runs on triggers (schedule, webhook, platform events) with retries, encrypted credentials and integrations such as Slack, ServiceNow, SAP and Microsoft 365.
4. Built a custom pricing engine. Different customers (a fleet, a partner app, one user) can have negotiated prices at chosen chargers. A running bill never changes when prices are edited later, and the charger owner is still paid at their normal rate. (Internal name: business agreements.)
5. Built a rewards wallet with bill payments inside the consumer app, for example recharging a highway toll tag. If a payment step fails the customer is refunded automatically, and double spending is prevented. (Domain name: BBPS, India's bill payment system.)
6. Built the trip planner backend for the MG Motor app: routes with charging stops, multi-stop trips, elevation, favourites and history, about 20 endpoints.
7. Built most of a charging management system for a large enterprise client: notifications, 18 report types, ticketing-system integration, firmware and asset management.

Other work at Pulse, at a glance
- A bridge service that brings another charging operator's chargers onto the national network.
- Roaming between charging networks, so cards and apps from one network work on another.
- A fleet driver operations integration for an EV cab fleet: driver login, vehicle check-in, charging checks and dues top-up, moved from slow batch copies to live data with a gradual rollout.
- Invoices and receipts as PDFs, including white-labelled templates.
- Performance work on the core backend and database so heavy reports and exports stopped slowing the main app.
- An energy marketplace (sites, charger requests, bids, contracts, chat), an issue tickets module, partner webhooks, reviews and ratings, payment links, refunds and wallet top-ups, and many operator console features (feature flags, roles and permissions, bulk actions, exports, search).
- AI work: AI summaries of charging-station reviews, a text-improvement feature in the console, and document reading in a vehicle check-in flow. He also wrote internal Claude Code skills for the team: a multi-persona pull request reviewer, root-cause-analysis helpers, a unit-test writer and an API test generator.
- He writes design documents before building and handover documents after.

How much detail to give about Pulse
- Describe what he built, who it was for and what improved. Do not explain how these systems work inside (data structures, queues, scripts, timings, table designs), even when asked. Say that level of detail is something Yash can talk through on a call.

Technologies he used at Pulse
TypeScript, JavaScript, SQL; Node.js, Express, Prisma; React, Redux; PostgreSQL, Redis, Kafka, message queues; Docker, Kubernetes, AWS and Google Cloud; Jest, Playwright; EV charging protocols (OCPP, OCPI, Beckn/UBC); payment gateways; LLM APIs (Claude, OpenAI).

Honest limits (say these if asked)
- On UBC, the buyer-side discovery and the adaptor's payment gateways, refunds and invoices were built by teammates.
- On the rewards project, the native app screens, referral cascade and production move were teammates' work.
- He does not share customer names, pricing, internal system names or incident details. For those, suggest asking him directly.
`;

export const workingStyle = `
HOW HE WORKS
- Owns features end to end: schema, API, UI, tests, rollout and the handover docs.
- Measures things. His AI projects ship with evals and he reports negative results too.
- Writes design docs before building and knowledge-transfer docs after.
- Uses AI coding tools heavily (Claude Code, Cursor) and builds his own agent skills for repeat work such as root-cause analysis and PR review.
`;
