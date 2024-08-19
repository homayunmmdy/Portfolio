import React from "react";
import Link from "next/link";
import { ProjectType } from "@/data/ProjectData";

const ProjectCard = ({ data }: { data: ProjectType }) => {
  return (
    <section className="mb-4 h-full">
      <div className="flex items-center flex-col gap-2">
        <img
          src={data.imgURL}
          title={data.title}
          alt={data.description.slice(0, 80)}
          className="w-full h-full aspect-video border border-[#714F04]"
        />
        <div className="flex items-center">
          <span className="text-[#714F04] text-2xl pr-1">{data.id}.</span>
          {data.demo ? (
            <Link href={data.demo}>
              <h3 className="text-2xl font-light  sm:text-4xl hover:text-[#714F04]">
                {data.title}
              </h3>
            </Link>
          ) : (
            <h3 className="text-2xl font-light  sm:text-4xl hover:text-[#714F04]">
              {data.title}
            </h3>
          )}
        </div>
      </div>
      <p className="font-light md:font-base md:text-xl my-2">
        {data.description.slice(0, 70)}...
      </p>
    </section>
  );
};

export default ProjectCard;
