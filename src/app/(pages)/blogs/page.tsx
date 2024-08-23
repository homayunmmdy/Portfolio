import Cards from "@/components/Cards";
import SiteConfig from "@/config/site";
import { getLatestPostSummaries } from "@/util/mdxUtils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${SiteConfig.title} | blogs page`,
  alternates: {
    canonical: `${SiteConfig.siteURL}blogs`,
  },
};

const BlogIndexPage = async () => {
  const posts = await getLatestPostSummaries();

  return (
    <div className="px-5 w-[98%] md:w-[92%] mx-auto py-12">
      <Cards data={posts} />
    </div>
  );
};

export default BlogIndexPage;
