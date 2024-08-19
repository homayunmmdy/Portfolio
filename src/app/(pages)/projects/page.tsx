import PageTitle from "@/components/PageTitle";
import Projects from "@/components/Projects";
import SiteConfig from "@/config/site";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: `${SiteConfig.title} | projects page`,
  alternates: {
    canonical: `${SiteConfig.siteURL}projects`,
  },
};

const ProjectsPage = () => {
  return (
    <>
    <h1 className="hidden">{`${SiteConfig.title} | projects page`}</h1>
      <PageTitle titr="My projects" title="Recent Projects" />
      <div className="px-5 w-[98%] md:w-[92%] mx-auto py-12">
        <Projects />
      </div>
    </>
  );
};

export default ProjectsPage;
