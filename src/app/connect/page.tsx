import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ConnectPanel from "@/components/ConnectPanel";
import AskYash from "@/components/AskYash";

export const metadata: Metadata = {
  title: "Chat with Yash",
  description:
    "Ask the AI assistant about Yash Harkawat's work and projects, or book a 15 or 30 minute call with him.",
  alternates: { canonical: "/connect" },
};

export const revalidate = 3600;

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#products" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export default function ConnectPage() {
  return (
    <>
      <CustomCursor />
      <Navbar links={navLinks} />
      <main className="noise min-h-[100dvh] pt-28 sm:pt-36 pb-20 px-5 sm:px-8 md:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="section-label block mb-3">Chat with Yash</span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0a0a0a] dark:text-[#f0f0ee] mb-4">
            Let&apos;s talk.
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-10">
            Quick question? Ask the assistant, it knows my work and projects. For anything real,
            book a short call below.
          </p>
          <AskYash />
          <h2 className="text-xl sm:text-2xl font-bold text-[#0a0a0a] dark:text-[#f0f0ee] mt-14 mb-6">
            Book a call
          </h2>
          <ConnectPanel calLink={process.env.NEXT_PUBLIC_CAL_LINK || ""} />
        </div>
      </main>
      <Footer />
    </>
  );
}
