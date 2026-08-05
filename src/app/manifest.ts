import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bandaru Nithinkumar — Portfolio",
    short_name: "Nithinkumar",
    description:
      "AI & Data Science Engineer and Software Developer portfolio by Bandaru Nithinkumar.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    lang: "en",
    categories: ["portfolio", "education", "productivity"],
    icons: [
      {
        src: "/icons/icon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
