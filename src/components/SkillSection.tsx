import React from "react";
import Skills from "./Skills";

const SkillSection = () => {
  return (
    <div className=" py-12 sm:py-36">
      <div className="grid grid-cols-12  gap-4 md:gap-16 pb-10">
        <div className="col-span-12 ">
          <section>
            <div className="text-[#714F04] text-center mb-2 text-2xl">
              Technical skills
            </div>
            <h1 className="text-3xl text-center font-light  sm:text-4xl md:text-6xl tracking-wide leading-loose">
              Programmering is not about what you know, it is about what can you
              figure out.
            </h1>
          </section>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default SkillSection;
