import PageTitle from "@/components/PageTitle";
import Cards from "@/components/Cards";
import SiteConfig from "@/config/site";
import { Metadata } from "next";
import React from "react";
import { ProjectData, ProjectType } from "@/data/ProjectData";

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
        <Cards<ProjectType> data={ProjectData} />
      </div>
    </>
  );
};

export default ProjectsPage;
