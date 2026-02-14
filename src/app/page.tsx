import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const baseUrl = "https://www.yashharkawat.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Yash Harkawat",
      jobTitle: "Software Engineer",
      worksFor: { "@type": "Organization", name: "Pulse Energy" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "IIT Kharagpur" },
      url: baseUrl,
      description:
        "Software Engineer at Pulse Energy. IIT Kharagpur graduate specializing in full-stack web development with React, Node.js, and TypeScript.",
    },
    {
      "@type": "WebSite",
      name: "Yash Harkawat | Software Engineer",
      url: baseUrl,
      description:
        "Portfolio of Yash Harkawat — Software Engineer at Pulse Energy. IIT Kharagpur graduate specializing in full-stack web development.",
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
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
