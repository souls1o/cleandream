import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Clean Dream - Cleaning Services Tulare County",
    short_name: "Clean Dream",
    description:
      "Move-out, deep, and recurring house cleaning in Tulare County, including Visalia, Tulare, and Porterville.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7fbfd",
    theme_color: "#0c3047",
    icons: [
      {
        src: "/assets/images/favicon.ico",
        sizes: "any",
        type: "image/x-icon"
      }
    ]
  };
}
