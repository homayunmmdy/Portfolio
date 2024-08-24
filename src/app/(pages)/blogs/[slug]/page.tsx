import Image from "next/image";
import { getCompiledMDX, getPostFilePaths } from "@/util/mdxUtils";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import SiteConfig from "@/config/site";
import PageTitle from "@/components/PageTitle";

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  try {
    const { frontmatter } = await getCompiledMDX(params.slug);

    return {
      title: frontmatter.title.slice(0, 65),
      description: frontmatter.description.slice(0, 155),
      keywords: frontmatter.categories,
      openGraph: {
        title: frontmatter.title.slice(0, 155),
        description: frontmatter.description.slice(0, 155),
        type: "article",
        url: `/blogs/${params.slug}`,
        images: {
          url: frontmatter.imgURL,
          secureUrl: frontmatter.imgURL,
          width: 1200,
          height: 630,
          alt: `Preview image for ${frontmatter.title.slice(0, 30)}`,
        },
      },
      twitter: {
        card: "summary_large_image",
        site: `@${SiteConfig.name}`,
        description: frontmatter.description.slice(0, 155),
        creator: `@${SiteConfig.name}`,
        images: {
          url: frontmatter.imgURL,
          alt: `Preview image for ${frontmatter.title.slice(0, 30)}`,
        },
      },
      alternates: {
        canonical: `${SiteConfig.siteURL}blogs/${params.slug}`,
      },
    };
  } catch (e) {
    notFound();
  }
};

export const generateStaticParams = async () => {
  const postFilePaths = await getPostFilePaths();

  return postFilePaths.map((path) => ({
    slug: path.replace(/.mdx?$/, ""),
  }));
};

const getPostData = async (postSlug: string) => {
  try {
    return await getCompiledMDX(postSlug);
  } catch (e) {
    notFound();
  }
};

type PageProps = {
  params: {
    slug: string;
  };
};

const BlogPostPage = async ({ params }: PageProps) => {
  const { content, frontmatter } = await getPostData(params.slug);
  const { title, date, imgURL, categories } = frontmatter;

  return (
    <>
      <PageTitle title={title} date={date} categories={categories} />
      <div className="px-5 w-[98%] md:w-[92%] mx-auto mb-4 md:mb-5 lg:mb-9">
        <Image
          className="w-full h-full aspect-video mx-auto my-12 md:my-20 lg:my-24"
          src={imgURL}
          width={1000}
          height={750}
          alt={title}
        />
        <div className="px-5 w-[98%] md:w-[92%] mx-auto mb-4 md:mb-5 lg:mb-9">
          <p className="text-xl md:text-2xl font-light font-serif leading-9">
            {content}
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;
