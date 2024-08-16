import Link from "next/link";
import React from "react";

const experiences = [
  {
    experience:
      "Implement frontend part of the several modules for Iransamaneh like occasion, membership and companies",
  },
  {
    experience:
      "Worked closely with UI/UX team to redesign or design websites like Razebaghaa , Nabzenaft , Shahraranews",
  },
  {
    experience:
      "Developed and tested over 100 compoentst and multiply websites useing Vitest ensuring high-quality reliable code",
  },
  {
    experience:
      "Streamlined page rendering performance, significantly reducing loading times and enhancing overall website",
  },
  { experience: "Revamped and maintained the Iransamaneh admin panel" },
];

const Experience = () => {
  return (
    <div className=" py-12 sm:py-36">
      <div className="grid grid-cols-12  gap-4 md:gap-16">
        <div className="col-span-12 md:col-span-6 xl:col-span-7">
          <section>
            <div className="text-[#714F04] mb-2 text-2xl">
              March 2023- Present (1yr 6 mos)
            </div>
            <h1 className="text-4xl font-light  sm:text-5xl md:text-7xl tracking-wide">
              Iransamaneh
            </h1>
            <p className=" leading-relaxed text-2xl my-3 ">
              one of the largest news companies, specializing in the development
              website with CMS news admin panel for news media and news
              agencies.
            </p>
            <button className="btn btn-outline my-6  hover:bg-black">
              <Link href="/experience" className="text-xl   hover:text-white">
                View More Experiences
              </Link>
            </button>
          </section>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-5">
          <div>
            {experiences.map((item, index) => (
              <section className="mb-4" key={index}>
                <p className=" md:font-base md:text-2xl my-2">
                  {item.experience}
                </p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
