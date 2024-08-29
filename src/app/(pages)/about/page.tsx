import { PageDescription, PageTitle } from "@/components";
import SiteConfig from "@/config/site";
import { Metadata } from "next";
import Image from "next/image";
import AboutDetail from "./components/AboutDetail";

export const metadata: Metadata = {
  title: `${SiteConfig.title} | about page`,
  description:
    "Explore the portfolio of Homayoun, a frontend developer specializing in React and Next.js.",
  keywords:
    "Frontend developer, React developer, Next.js, web development, Homayoun, Homayoun Mohammadi, homayunmmdy",
  alternates: {
    canonical: `${SiteConfig.siteURL}about`,
  },
};

const About = () => {
  return (
    <div>
      <h1 className="hidden">{`${SiteConfig.siteURL}about`}</h1>
      <PageTitle titr="About" title="Hi I'm Homayoun" />
      <div className="px-5 w-[98%] md:w-[92%] mx-auto">
        <PageDescription
          title="Frontend Developer"
          description="Experienced Frontend Developer skilled in creating or improving websites that fulfill customer needs. Proficient in the design, installation, testing, and maintenance of web systems. Capable of self-managing during independent projects and collaborating within a team."
        />
        <Image
          width={1000}
          height={750}
          alt="Homayoun"
          src="/about.webp"
          className="max-h-[750px] w-full xl:max-w-[1000px] mx-auto pb-20"
        />
        <div className="px-5 w-[98%] md:w-[92%] mx-auto">
          <section className="mb-10">
            <h2 className="text-3xl pb-2 font-light sm:text-4xl md:text-5xl tracking-wide">
              How I Got Here
            </h2>
            <p className="font-light md:text-xl my-2 leading-relaxed">
              Hi, my name is Homayoun, and I was born in October 2005. My coding
              journey began in late 2022 when I started learning to code
              part-time as a hobby. By 2023, I shifted to full-time,
              professional learning, focusing on frontend development.
            </p>
            <p className="font-light md:text-xl my-2 leading-relaxed">
              In March 2023, I landed a job as a frontend developer at
              Iransamaneh. My responsibilities include a variety of tasks such
              as testing, redesigning UI for websites, and building new sites
              from scratch. Since many of our clients are news companies, I work
              closely with the SEO team to optimize website performance. I also
              contributed to multiple modules and played a key role in revamping
              the admin panel of Iransamaneh.
            </p>
          </section>
          <section className="mb-10">
            <h2 className="text-3xl pb-2 font-light sm:text-4xl md:text-5xl tracking-wide">
              Why Work With Me
            </h2>
            <p className="font-light md:text-xl my-2 leading-relaxed">
              I bring a strong foundation in frontend development, combined with
              hands-on experience at Iransamaneh, where I&apos;ve tackled
              diverse challenges from UI redesign to building websites from
              scratch. My journey in coding began as a passion, and it quickly
              evolved into a professional pursuit. This transition reflects my
              dedication and ability to quickly adapt and learn.
            </p>
            <p className="font-light md:text-xl my-2 leading-relaxed">
              I&apos;m not just focused on coding; I&apos;m committed to
              delivering results that align with business goals. My experience
              working closely with SEO teams means I understand the importance
              of optimizing websites for performance and visibility.
              Additionally, I&apos;ve successfully revamped critical components
              like the admin panel at Iransamaneh, showcasing my ability to
              improve existing systems.
            </p>
            <p className="font-light md:text-xl my-2 leading-relaxed">
              By working with me, you gain a developer who is not only
              technically proficient but also understands the bigger picture,
              ensuring that every project contributes to the success of your
              business.
            </p>
          </section>
          <section className="mb-10">
            <h2 className="text-3xl pb-2 font-light sm:text-4xl md:text-5xl tracking-wide">
              A Few More Words About Myself
            </h2>
            <p className="font-light md:text-xl my-2 leading-relaxed">
              I&apos;ve dedicated around two years to becoming proficient in
              English as my second language. As of now, my English level is B2
              (Upper Intermediate), and I&apos;m continually working on
              improving it further. Additionally, my time at Iransamaneh has
              helped me develop important soft skills. Part of my role involves
              interacting with customers through ticketing systems to gather
              essential information, which has enhanced my communication
              abilities.
            </p>
          </section>
        </div>
      </div>
      <AboutDetail />
    </div>
  );
};

export default About;
