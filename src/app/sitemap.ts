import { getPostsSitemap } from "@/util/mdxUtils";
import type { MetadataRoute } from "next";

const BASE_URL = "https://homayunmmdy.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPostsSitemap();

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    {
      url: BASE_URL + "/blogs",
      lastModified: new Date(),
    },
    ...posts.map((post) => ({
      url: `${BASE_URL}/blogs/${post.slug}`,
      lastModified: post.mtime,
    })),
    {
      url: "https://homayunmmdy.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://homayunmmdy.vercel.app/projects",
      lastModified: new Date(),
    },
  ];
}
