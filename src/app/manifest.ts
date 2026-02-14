import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yashharkawat.com";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yash Harkawat | Software Engineer",
    short_name: "Yash Harkawat",
    description:
      "Portfolio of Yash Harkawat — Software Engineer at Pulse Energy. IIT Kharagpur graduate.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#030712",
  };
}
