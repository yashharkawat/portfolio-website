import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
};

export const metadata: Metadata = {
  title: "Yash Harkawat | Software Engineer",
  description:
    "Portfolio of Yash Harkawat — Software Engineer at Pulse Energy. IIT Kharagpur graduate specializing in full-stack web development with React, Node.js, and TypeScript.",
  keywords: [
    "Yash Harkawat",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Node.js",
    "IIT Kharagpur",
    "Portfolio",
  ],
  authors: [{ name: "Yash Harkawat" }],
  openGraph: {
    title: "Yash Harkawat | Software Engineer",
    description:
      "Software Engineer at Pulse Energy. IIT Kharagpur graduate. Building full-stack web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
