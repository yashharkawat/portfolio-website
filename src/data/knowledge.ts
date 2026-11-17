/**
 * Extra detail that only the "Ask about Yash" assistant reads. The site sections stay short;
 * this is where the depth lives. Everything here is safe to say in public.
 */

export const projectDeepDives = `
ZOJO (clothing brand, Apr 2026 to now)
- What it is: an anime and streetwear print-on-demand brand that Yash built and runs alone. India store zojoofficial.com, US store wearzojo.com.
- Stack: Next.js (App Router) and TypeScript, Drizzle ORM on PostgreSQL (Supabase, Mumbai), Razorpay for payments in India, Zod for validation, Tailwind and Radix UI, JWT sessions, Nodemailer and IMAP for order and support mail, pdf-lib for invoices, sharp for images.
- Fulfilment: no inventory. Orders go to print-on-demand partners, Qikink in India and Printful in the US. A daily job syncs the product catalogue from the partner, another reads the support mailbox.
- Hosting story: the India store started on Vercel, then moved in Nov 2026 to a Docker image on Google Cloud Run (Mumbai) behind a Cloudflare Worker. The Worker forwards every request to one "origin" setting, so the host can be swapped (for example to AWS) in seconds with instant rollback. Scheduled jobs run on Cloud Scheduler, uptime checks on GitHub Actions.
- Also built for it: an admin panel, custom-tee uploads, a design pipeline, a product-photo scoring tool, and a video pipeline that renders short reels for Instagram and YouTube.
- The first version (Apr 2026) was a monorepo with a Next.js storefront and an Express + TypeScript API using Prisma, phone OTP and JWT auth, Cloudinary and Redux Toolkit. He later rewrote it as the single Next.js app described above.

VIDEO-AUTOMATION (Nov 2026)
- What it is: a web app that makes YouTube Shorts in viral physics-simulation formats and posts them on a schedule.
- Flow: sign in with Google, connect a YouTube channel, pick a format, set a rule such as "every day at 12:00". The server renders the video, the user approves or rejects it, or it posts by itself if that switch is on. Each series can be Public, Unlisted or Private.
- Stack: Python, FastAPI, SQLAlchemy, SQLite on a persistent disk, a Python render pipeline that draws 1080x1920 60 fps simulations with sound, YouTube Data API v3 with OAuth 2.0, Docker, Caddy for HTTPS, one Google Cloud VM.
- Quality: an end-to-end test suite of 95 checks. A test channel posts public Shorts daily through the app's own scheduler.
- Pricing model built in: prepaid video packs in rupees with a small free tier.

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
- A SaaS app that helps Indian employees recover unpaid full and final settlement dues: a 4-stage email escalation from polite reminder to legal notice, labour-complaint guides for all 36 states and union territories, Razorpay payments, Google sign-in and evidence uploads.
- Stack: React, Node.js, TypeScript, Prisma, PostgreSQL. Frontend on Vercel, API on Render, database on Neon. He moved the database from Supabase to Neon in Sep 2026 and verified it with row counts and a content checksum across all 14 tables.

OTHER THINGS HE HAS BUILT
- Image Upscaler: a self-hosted 4x image upscaler. FastAPI serving Real-ESRGAN (PyTorch) with automatic device choice (Apple MPS, CUDA or CPU), a background job queue for bulk uploads, a folder watcher and a Next.js drag-and-drop UI.
- ScheduleAI (Mar 2026, now retired): a PWA for guided workout sessions where Gemini extracted a weekly schedule from an uploaded PDF or DOCX into structured JSON; live timer, voice instructions, Web Push, offline support.
- This website: Next.js and Tailwind on Vercel. The assistant you are is part of it: one route that streams answers from free models, with rate limits, and a fact sheet instead of a vector database because the facts fit in the prompt.
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
2. Made slow analytics fast. Charger uptime reports used to scan millions of raw log rows on every request. He redesigned them to keep small hourly summaries updated by events through queues, so a week of data for one connector is 168 rows.
3. Built a workflow automation engine from scratch, similar to Zapier or n8n: users draw a flow on a canvas, and it runs on triggers (schedule, webhook, platform events) with retries, encrypted credentials and integrations such as Slack, ServiceNow, SAP and Microsoft 365.
4. Built a custom pricing engine. Different customers (a fleet, a partner app, one user) can have negotiated prices at chosen chargers. The most specific rule wins, prices are frozen when a session starts so later edits never change a running bill, and the charger owner is still paid at their normal rate. (Internal name: business agreements.)
5. Built a rewards wallet with bill payments inside the consumer app, for example recharging a highway toll tag. Money is collected first and the bill is paid second, with an automatic refund if the second step fails, and locks that stop double spending. (Domain name: BBPS, India's bill payment system.)
6. Built the trip planner backend for the MG Motor app: routes with charging stops, multi-stop trips, elevation, favourites and history, about 20 endpoints.
7. Built most of a charging management system for a large enterprise client: notifications, 18 report types, ticketing-system integration, firmware and asset management.

The same work in more technical detail, biggest first

1. UBC (Beckn) seller-side stack, Nov 2025 to Oct 2026. UBC is India's unified EV charging network run on NPCI's Beckn-based rails, which lets users of apps such as BHIM find, pay for and run a charge on any member's chargers.
- Implemented the order flow actions (select, init, confirm, update for start and stop, track, status, cancel, support, rating), each with its callback, in two layers: a protocol service that validates, signs and translates payloads, and the core backend holding the logic.
- Start and stop reuse the normal charging API as that user, so every usual check still applies.
- Reservations with overlap checks and a no-show auto-cancel (10 minute default grace). Live session updates: the first one immediately, the rest from a per-minute job.
- Catalog publishing: moved from manual to event-driven. Charger connect, disconnect and status changes go into a Redis batch with a 30 second throttle, read and cleared atomically with a Lua script, then processed by BullMQ delayed jobs. A connector is listed as active only if it is online, seen recently and in a usable state. A pre-check drops connectors the network would reject and reports the exact reason.
- Moved the flow to the v2 UBC spec in Jan 2026 and built the certification checklists.

2. UBC to OCPI adaptor, Dec 2025 to Aug 2026. A standalone service that puts an operator's OCPI-only chargers on UBC. It acts as an OCPI 2.2.1 eMSP towards the operator (credentials, locations, tariffs, sessions, CDRs, tokens, commands) and as a Beckn provider towards UBC. Start is allowed only after payment completes and a retried start reuses the existing session. 16 Beckn action handlers and 22 Prisma models. The first PR was about 21,000 lines across 143 files.

3. Uptime and Reliability engine, Jun to Sep 2026.
- Problem: reports computed from raw status logs at read time scanned millions of rows and loaded the database.
- Built hourly buckets per connector, updated from events through two Redis-backed queues (BullMQ) and workers. A week is 168 rows per connector, so reads are small and fast.
- Chose event-driven updates over a cron rollup, so there is no cron to break. A per-connector lock stops two jobs writing the same hour, and the session-stopped webhook updates reliability as a backstop.
- APIs at organisation, station, charger and connector level, 7 by 24 heatmaps, bulk APIs, a parallel backfill tool and cleanup jobs. 52 unit tests.
- A good story: one partner sent local time marked as UTC, which wrote future buckets. He capped event times at "now" on both sides and rebuilt the data with the backfill.

4. Workflow automation engine (n8n-style), Sep to Nov 2026. A DAG runner where several pods can safely claim work, with versions, schedule, webhook and platform-event triggers, per-node retries and AES-256-GCM encrypted credentials. Kafka events from the main backend, 21 console API routes, and a React canvas builder (React Flow). Integrations: HTTP, email, Slack, ServiceNow, SAP, Microsoft 365. First built inside a client system, then as its own service (about 23,000 lines across 143 files).

5. Charging management system for a large enterprise client, Aug to Nov 2026 (about 110 PRs). A Kafka-based notification engine, 18 report types matched column for column to the system being replaced (16 schedulable), a ServiceNow integration, asset and firmware management, tariff linking, idle-fee billing, customer groups, alarms and bulk remote start/stop.

6. Business agreements and billing module, Jun 2025 to Oct 2026. Negotiated prices and fees for a fleet, app or user at chosen chargers.
- Built the first version end to end: data model, rule matching, prices in nearby search and the route planner, running cost during a session, billing for both OCPP and OCPI chargers.
- The most specific rule wins, weighted across who (fleet, app, user) and where (operator down to a single connector).
- Two decisions he is proud of: the rules chosen at session start are copied onto the bill, so later edits never change a running or past session; and each bill keeps two amounts, the operator's normal price and the agreed price, so settlement code did not need to change.

7. Rewards wallet and BBPS bill payments, Apr to Sep 2026. FASTag recharge over BBPS, reward credits and referrals.
- Wrote the design (19 endpoints) and the backend.
- Two-phase payment: collect through the payment gateway first, then pay the bill through BBPS, with an automatic refund if the bill payment fails. A state machine with a claim step against double submission and status polling at 5, 10, 30, 60 and 120 seconds.
- Reused the existing wallet and payment ledger instead of new reward tables, which gave an audit trail and row locks for free. Earn and spend lock the wallet row and check for duplicates inside the lock.
- Built the web app (React, Vite, Turborepo, S3 and CloudFront, Vitest and Playwright in CI, Sentry). Moved it from Next.js to Vite because the static export reloaded the whole page on every tap.

8. Route planning backend for the MG Motor app, Jul to Oct 2024, with fixes through 2026. About 20 endpoints and 6 new tables: find route, multi-stop, elevation, favourites, history and suggested chargers, using Google Maps and an AWS Lambda path for route finding. He wrote 123 of about 170 commits on those files.

9. OCPI roaming, Jul to Oct 2026. Real-time RFID token authorisation and token push, hub-model roaming and command-result persistence.

10. Fleet driver operations for an EV cab fleet, Mar 2025 to Nov 2026. Driver login, vehicle check-in, charging eligibility checks and dues top-up. Moved it from data copied out of spreadsheets every few minutes to the fleet's live APIs, rolled out driver by driver behind remote config with the old path kept running, a 10 second Redis cache and a fail-closed rule when the partner API is down.

11. Invoicing and PDFs, Dec 2023 to May 2026. GST invoices and receipts, white-labelled templates, a Puppeteer concurrency limiter (at most 3 Chrome instances) and one-page A4 scaling.

12. Performance and platform work, 2024 to 2025. Database indexing, a materialized view, read-replica use, console APIs moved to their own HTTP server, and QR and invoice generation moved to a separate worker with its Kubernetes setup.

13. Also: an energy marketplace (sites, charger requests, bids, contracts, chat), an issue tickets module (two versions), console features (feature flags and remote config with fan-out to every pod, RBAC rules, bulk actions, CSV/XLSX export, multi-organisation switcher, Cmd+K search, timezone, VAT and currency support), partner webhooks with retries and delivery tracking, reviews and ratings, payment links, refunds and wallet top-ups, and MG app features.

14. AI work at Pulse: AI summaries of charging-station reviews using Claude with OpenRouter and OpenAI as fallbacks, switched by remote config; an "enhance text" API in the console; OCR in a vehicle check-in flow. Internal Claude Code skills he wrote: a four-persona PR review tool that posts inline GitHub reviews, two root-cause-analysis skills that trace a failed Beckn transaction to the failing step, a unit-test writer, an API test suite generator and a hotfix deploy helper.

15. Design docs he wrote: moving a telematics log (about 1.2 million rows a day) to TimescaleDB with daily chunks, compression after 1 day and tiered retention (a draft design, not shipped by him), and fleet charging paid from a driver's personal wallet (draft).

Technologies he used at Pulse
TypeScript, JavaScript, SQL, Lua (Redis scripts); Node.js, Express, Prisma; React, MUI, Redux, React Flow; PostgreSQL (indexes, materialized views, read replicas), Redis, BullMQ, Kafka; Docker, Kubernetes, GCP Cloud Build, AWS Lambda and S3, Puppeteer; Jest, Vitest, Playwright, Postman; OCPP 1.6, OCPI 2.2.1, Beckn/UBC; Razorpay, Google Maps, ServiceNow, SAP, Microsoft Graph; Anthropic, OpenAI and OpenRouter APIs.

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
