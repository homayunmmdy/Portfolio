import Link from "next/link";

const experiences = [
  {
    experience:
      "Tested over 100 components and multiple websites using Vitest, ensuring code reliability and robustness",
  },
  {
    experience:
      " Engineered the occasions and memberships modules using ReactJS and JavaScript, empowering over 2,000 users to seamlessly manage and control their websites.",
  },
  {
    experience:
      "Collaborated with UI/UX teams to redesign Razebaghaa, Zisaan, and Shahraranews, improving mobile responsiveness and increasing user engagement through enhanced navigation and a more intuitive user experience.",
  },
  {
    experience:
      "Boosted SEO and page speed, resulting in increase in website traffic, an improvement in conversion rates, and a increase in revenue by achieving higher search engine rankings and greater online visibility",
  },
  {
    experience:
      "Developed multilingual websites for Tabnak, IQNA and others to increase international traffic and expand global reach",
  },
  {
    experience:
      "Revamped the Iransamaneh admin panel by redesigning key modules, reducing user workflow times, and decreasing support requests through improved customization options and streamlined processes",
  },
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
            <h2 className="text-4xl font-light  sm:text-5xl md:text-7xl tracking-wide">
              Iransamaneh
            </h2>
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
