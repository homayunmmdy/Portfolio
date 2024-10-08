import CV from "./CV";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap gap-4">
        <div className="w-full md:w-[49%]">
          <div className="text-yellow-600 relative mb-2 text-2xl text-center">
            About
          </div>
          <p className="text-2xl  text-center md:text-3xl lg:text-4xl leading-8 text-white">
            Experienced Frontend Developer skilled in creating or improving
            websites that fulfill customer needs. Proficient in the design,
            installation, testing, and maintenance of web systems. Capable of
            self-managing during independent projects and collaborating within a
            team.
          </p>
          <div className="text-center">
            <button className="btn btn-outline my-6 text-white hover:bg-white">
              <span className="text-xl text-white  hover:text-black">
                More About Me
              </span>
            </button>
          </div>
        </div>
        <div className="w-full md:w-[50%]">
          <CV />
        </div>
      </div>
    </>
  );
};

export default About;
