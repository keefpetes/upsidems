import type { MetadataRoute } from "next";
import { baseUrl, stories } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/our-work",
    "/get-involved",
    "/stories",
    "/stories/follow",
    "/contact",
    "/manifesto",
    "/privacy-policy",
    "/terms",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const storyRoutes = stories.map((story) => ({
    url: `${baseUrl}/stories/${story.slug}`,
    lastModified: new Date(story.date),
  }));

  return [...staticRoutes, ...storyRoutes];
}
