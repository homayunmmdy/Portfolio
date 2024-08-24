import { PageTitleType } from "@/types/entities";
import React from "react";
import { CiFolderOn } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";

const PageTitle: React.FC<PageTitleType> = ({
  titr,
  title,
  date,
  categories,
}: PageTitleType) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(20deg, hsl(130deg, 8%, 14%) 40%, hsl(0deg, 0%, 13%) 100%)",
      }}
    >
      <section className="flex justify-center items-center py-12	sm:py-36	flex-col ">
        <div className=" md:max-w-[50%] contents">
          {titr && <div className="text-[#714F04] mb-2 text-2xl">{titr}</div>}
          <h2 className="text-white px-1 md:px-0 text-4xl font-light  sm:text-5xl md:text-7xl tracking-wide  sm:leading-loose text-center">
            {title}
          </h2>
          <div className="flex justify-center md:justify-between flex-wrap md:flex-nowrap gap-5 p-4">
            {date && (
              <div className="flex gap-2 text-xl text-white">
                <FaRegClock size={23} color="#714F04" />
                {date}
              </div>
            )}
            {categories && (
              <div className="flex text-xl gap-2 text-white">
                <CiFolderOn
                  className="hidden md:block"
                  size={23}
                  color="#714F04"
                />
                <ul className="flex flex-wrap md:flex-nowrap justify-center gap-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      {index === categories.length - 1
                        ? category
                        : `${category} ,`}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageTitle;
