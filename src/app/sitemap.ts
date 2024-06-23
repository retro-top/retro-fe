import { MetadataRoute } from "next";
import games from "@/constants/games";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const gamesUrls = games.map((game) => {
    return {
      url: new URL(game.href, BASE_URL).href,
      lastModified: new Date(),
      priority: 0.7,
    };
  });
  return [...gamesUrls];
}
