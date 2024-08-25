import { SocialMedia } from "@/types/entities";
import Link from "next/link";
import React from "react";

const PageDescription = ({
  title,
  description,
  media,
}: {
  title: string;
  description: string;
  media?: SocialMedia[];
}) => {
  return (
    <div className=" py-12 sm:py-36">
      <div className="grid grid-cols-12  gap-4 md:gap-8">
        <div className="col-span-12 md:col-span-6 xl:col-span-7">
          <section>
            <h3 className="text-5xl font-light  sm:text-6xl md:text-7xl lg:text-8xl tracking-wide racking-wide">
              {title}
            </h3>
          </section>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-5">
          <div>
            <p className="font-light md:font-base md:text-3xl my-2  leading-relaxed">
              {description}
            </p>
            <ul className="flex justify-center gap-4 mt-10">
              {media?.map((link: SocialMedia, index: number) => {
                const LinkIcon = link.icon;
                return (
                  <li key={index}>
                    <Link title={link.name} href={link.href}>
                      <LinkIcon size={28} className="hover:text-[#714F04]" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageDescription;
