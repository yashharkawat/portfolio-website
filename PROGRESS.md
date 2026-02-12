# Portfolio Website - Progress & Reference Doc

## Resume Data (Source of Truth)

### Personal Info
- **Name:** Yash Harkawat
- **Phone:** 8824874733
- **Email:** yashharkawat2000@gmail.com
- **LinkedIn:** (link on resume)
- **GitHub:** (link on resume)

### Education
- **B.Tech & M.Tech in Electrical Engineering** - Indian Institute of Technology, Kharagpur (Jun 2018 - May 2023)
- CGPA: 7.44

### Work Experience

1. **Software Engineer** - Pulse Energy Technologies Pvt Ltd, Bengaluru (Dec 2023 - Present)
   - Created both front-end and back-end functionality using React.js, Node.js, and Prisma
   - Developed comprehensive backend APIs for the route planning feature of the MG Motor app
   - Implemented report generation strategy that significantly reduced download time and server load
   - Experienced in building complete applications, integrating frontend and backend seamlessly

2. **Front-end Developer (Internship)** - Plunes Technologies Pvt. Ltd, Gurugram (Oct 2023 - Dec 2023)
   - Created various forms and pages using React JS and Material-UI, ensuring a consistent design
   - Identified and resolved bugs in the codebase, improving overall performance

3. **Product Engineer (Internship)** - Sprinklr, Gurugram (May 2022 - Jul 2022)
   - Created a Chrome extension to detect errors during translation of the website
   - Intercepted requests and detected files used for translation
   - Highlighted i18n client-side labels with different colors based on translation files

### Projects

1. **Blogs Website** (Jun 2023 - Jul 2023)
   - Blogging website like medium.com using React JS, hosted on Firebase
   - Search and filter by author, title, date and topic
   - Post management: creation, editing, saving and deletion

2. **Movies Website** (May 2023 - Jun 2023)
   - Dynamic movies website using React with IMDB ratings and descriptions
   - Search, description, and likes page functionality

3. **Genome Assembly** (May 2021 - Jul 2021)
   - Constructed De-Bruijn graph from reads and assembled genome data using Eulerian Cycle
   - Used graph algorithms to remove errors like bubbles and tips from error-prone reads

### Skills
- **Development:** ReactJS, Redux, JavaScript, HTML, CSS, Node.js, TypeScript, C, C++, Python
- **Others:** SQL, Data Structures & Algorithms, Git, GitHub, AWS, Debugging

### Achievements
- AIR 612 in IIT JEE Advanced
- AIR 848 in IIT JEE Mains

---

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Theme:** next-themes (system preference + manual toggle)
- **Deployment:** Vercel
- **Icons:** Lucide React

## Design
- Modern, minimal design with blue/purple gradient accents
- **Light & Dark mode** — follows system preference, user can toggle manually
- Smooth scroll navigation
- Animated sections on scroll
- **Fully responsive** — 3-tier breakpoints (mobile → sm:640px → md:768px+), tested from 320px to ultrawide
- Touch-friendly (44px min tap targets on touch devices)
- Sections: Hero, About, Experience, Projects, Skills, Contact
- **Live at:** [yashharkawat.com](https://yashharkawat.com)

---

## Progress Log

### Step 1: Project Setup
- [x] Created PROGRESS.md reference doc
- [x] Initialized Next.js 16 project with Tailwind CSS v4, TypeScript
- [x] Installed framer-motion (animations) and lucide-react (icons)

### Step 2: Built All Components
- [x] `Navbar.tsx` - Fixed navbar with scroll effect, mobile hamburger menu, smooth scroll links
- [x] `Hero.tsx` - Gradient name, animated badges, social links, scroll indicator
- [x] `About.tsx` - Bio text + 3 info cards (Education, Experience, Tech Stack)
- [x] `Experience.tsx` - Timeline layout with 3 roles (Pulse Energy, Plunes, Sprinklr)
- [x] `Projects.tsx` - 2x2 card grid with hover gradient effects (4 projects)
- [x] `Skills.tsx` - 4 categories with progress bars (Frontend, Backend, Languages, Tools)
- [x] `Contact.tsx` - Contact info cards + mailto form
- [x] `Footer.tsx` - Copyright + built-with info
- [x] `AnimatedSection.tsx` - Reusable scroll-triggered animation wrapper

### Step 3: Styling & Polish
- [x] Dark theme (#030712 background) with blue/purple gradient accents
- [x] Custom scrollbar styling
- [x] Grid background pattern
- [x] Glow effects and gradient text
- [x] Responsive design (mobile-first with md: breakpoints)
- [x] Smooth scroll behavior
- [x] Framer Motion animations (fade up on scroll, hero entrance)

### Step 5: Light/Dark Mode Support
- [x] Installed `next-themes` for theme management
- [x] Created `ThemeProvider.tsx` — wraps app with next-themes, uses class-based dark mode
- [x] Created `ThemeToggle.tsx` — animated Sun/Moon toggle button, cycles light/dark
- [x] Updated `globals.css` — `@custom-variant dark` for Tailwind v4 class-based dark mode, light/dark scrollbar, light/dark grid-bg
- [x] Updated `layout.tsx` — wrapped with ThemeProvider, removed hardcoded `dark` class, added `suppressHydrationWarning`
- [x] Updated ALL components with `dark:` prefix patterns:
  - Light: white bg, gray-200 borders, gray-900 text, gray-600 secondary text, shadow-sm cards
  - Dark: #030712 bg, white/5 borders, white text, gray-400 secondary text, no shadows
- [x] Theme toggle in Navbar (desktop + mobile)
- [x] System preference detection (defaultTheme: "system")
- [x] Build verified with zero errors

### Step 6: Full Responsive Design (Mobile → Desktop)
- [x] Added `viewport` meta with `theme-color` for mobile browsers
- [x] Added `overflow-x: hidden` on html/body to prevent horizontal scroll
- [x] Added minimum 44px touch targets for buttons/links on touch devices (`pointer:coarse`)
- [x] Hero: `100dvh` to handle mobile browser address bar
- [x] Hero: Text scaling `text-3xl` → `sm:text-5xl` → `md:text-7xl` → `lg:text-8xl`
- [x] Hero: CTA buttons stack vertically on mobile, side-by-side from `sm:`
- [x] Hero: Gradient orbs scale down on mobile (`w-48` → `w-72` → `w-96`)
- [x] All sections: Padding scales `py-16 px-4` → `sm:py-20 sm:px-6` → `md:py-24`
- [x] All cards: Padding scales `p-4` → `sm:p-6`
- [x] All headings: `text-2xl` → `sm:text-3xl` → `md:text-4xl`
- [x] All body text: `text-base` → `sm:text-lg`
- [x] All tags: `text-[10px]` → `sm:text-xs`
- [x] Projects/Skills grid: 1 column on mobile, 2 columns from `sm:` up
- [x] Contact: Email truncates on narrow screens instead of overflowing
- [x] Experience: Company names truncate with ellipsis on tiny screens
- [x] Icons scale down on mobile (16-18px vs 20px on desktop)
- [x] Progress bars thinner on mobile (`h-1` vs `h-1.5`)
- [x] Grid background pattern smaller on mobile (40px vs 60px)
- [x] Tested for 320px (iPhone SE) through ultrawide monitors
- [x] Build verified with zero errors, pushed to GitHub

### Step 4: Deployment
- [x] Git commit (all files committed to main branch)
- [x] Deployed to Vercel via GitHub integration
- [x] Domain: `yashharkawat.com` (purchased on Namecheap)
- [x] DNS configured: A record → 76.76.21.21, CNAME www → cname.vercel-dns.com
- [x] SSL certificate auto-provisioned by Vercel

### Section Reorg & Cleanup
- [x] Removed "Genome Assembly" and "i18n Chrome Extension" projects
- [x] Renamed section from "Featured Projects" → "My Products"
- [x] Moved "My Products" section above "Experience" in page order
- [x] Updated Navbar links: "Products" replaces "Projects", reordered to match new layout
- [x] Section id changed from `#projects` → `#products`

### Files Created/Modified
- `src/app/globals.css` - Light/dark theme styles, custom variants, utilities
- `src/app/layout.tsx` - SEO metadata, fonts, ThemeProvider wrapper
- `src/app/page.tsx` - Composes all sections
- `src/components/ThemeProvider.tsx` - next-themes provider (class-based, system default)
- `src/components/ThemeToggle.tsx` - Animated Sun/Moon toggle button
- `src/components/AnimatedSection.tsx`
- `src/components/Navbar.tsx` - Includes ThemeToggle (desktop + mobile)
- `src/components/Hero.tsx`
- `src/components/About.tsx`
- `src/components/Experience.tsx`
- `src/components/Projects.tsx`
- `src/components/Skills.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`
