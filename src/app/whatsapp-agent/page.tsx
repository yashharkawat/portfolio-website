import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppAgent from "@/components/WhatsAppAgent";

export const metadata: Metadata = {
  title: "WhatsApp AI agent in 5 days",
  description:
    "A WhatsApp AI agent for your business, built and handed over in 5 days. Fixed price USD 800. FAQ, lead capture, booking, human handover.",
  alternates: { canonical: "/whatsapp-agent" },
  openGraph: {
    title: "WhatsApp AI agent for your business in 5 days",
    description:
      "Fixed price USD 800. WhatsApp Cloud API or Twilio, n8n + OpenAI/Claude agent, human handover, one week of fixes.",
    url: "/whatsapp-agent",
    type: "website",
  },
};

const navLinks = [
  { label: "What you get", href: "#what-you-get" },
  { label: "Timeline", href: "#timeline" },
  { label: "Proof", href: "#proof" },
  { label: "FAQ", href: "#faq" },
  { label: "Portfolio", href: "/" },
];

export default function WhatsAppAgentPage() {
  return (
    <>
      <CustomCursor />
      <Navbar links={navLinks} />
      <main className="noise">
        <WhatsAppAgent />
      </main>
      <Footer />
    </>
  );
}
