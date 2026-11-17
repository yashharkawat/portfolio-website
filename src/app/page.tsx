import { profile } from "@/data/profile";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import AskWidget from "@/components/AskWidget";

/** Re-render hourly so date-based copy (current employer) stays right without a deploy. */
export const revalidate = 3600;

const baseUrl = "https://www.yashharkawat.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Yash Harkawat",
      jobTitle: "Software Engineer",
      worksFor: { "@type": "Organization", name: profile.company },
      alumniOf: { "@type": "CollegeOrUniversity", name: "IIT Kharagpur" },
      url: baseUrl,
      description:
        `Software Engineer at ${profile.company}. IIT Kharagpur graduate building full-stack products and AI agents with React, Node.js and TypeScript.`,
      sameAs: ["https://github.com/yashharkawat", "https://www.linkedin.com/in/yash-harkawat"],
    },
    {
      "@type": "WebSite",
      name: "Yash Harkawat | Software Engineer",
      url: baseUrl,
      description:
        `Portfolio of Yash Harkawat, Software Engineer at ${profile.company}. IIT Kharagpur graduate specializing in full-stack web development.`,
      publisher: { "@type": "Person", name: "Yash Harkawat" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CustomCursor />
      <Navbar />
      <main className="noise">
        <Hero />
        <MarqueeStrip />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <AskWidget />
    </>
  );
}
