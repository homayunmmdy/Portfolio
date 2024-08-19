import Experience from "@/components/Experience";
import PageTitle from "@/components/PageTitle";
import SiteConfig from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${SiteConfig.title} | experience page`,
  alternates: {
    canonical: `${SiteConfig.siteURL}experience`,
  },
};

const ServicesPage = () => {
  return (
    <>
      <h1 className="hidden">{`${SiteConfig.siteURL}experience`}</h1>
      <PageTitle titr="services" title="High-Impact Services" />
      <div className="px-5 w-[98%] md:w-[92%] mx-auto">
        <Experience />
      </div>
    </>
  );
};

export default ServicesPage;
