"use client";
import Link from "next/link";
import React, { useState } from "react";
import HyperLink from "./HyperLink";
import About from "../page";
import Gallery from "./Gallery";

const AboutDetail = () => {
  const [isVisile, setIsVisile] = useState(false);

  const toggleVisiblity = () => {
    setIsVisile(!isVisile);
  };
  return (
    <>
      <div className="fter:h-px w-full my-12 flex items-center before:h-px before:flex-1  before:bg-gray-300 before:content-[''] after:h-px after:flex-1 after:bg-gray-300  after:content-['']">
        <button
          type="button"
          onClick={toggleVisiblity}
          className="flex items-center rounded-full border border-gray-300 bg-secondary-50 px-3 py-2 text-center text-sm font-medium  hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mr-1 h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
          {isVisile ? "Hide Text" : "View More"}
        </button>
      </div>
      {isVisile && (
        <section className="px-5 w-[98%] md:w-[92%] mx-auto">
          <div className="px-5 w-[98%] md:w-[92%] mx-auto">
            <p className="font-light md:text-xl my-2 leading-relaxed text-center">
              Welcome! In this section, I&apos;ll share details about my life and
              biography. If you&apos;re interested in learning more about my
              childhood, feel free to read on. Enjoy!
            </p>
            <section className="my-10">
              <h2 className="text-3xl pb-2 font-light sm:text-4xl md:text-5xl tracking-wide">
                Early life
              </h2>
              <p className="font-light md:text-xl my-2 leading-relaxed">
                I was born on October 20, 2005, in Baghlan, Afghanistan. Due to
                the ongoing war, my family migrated to Iran when I was 6 months
                old, and I grew up there.
              </p>
              <p className="font-light md:text-xl my-2 leading-relaxed">
                In Iran we lived in village called
                <HyperLink href="https://en.wikipedia.org/wiki/Turquzabad">
                  Torquzabad
                </HyperLink>
                located in Kahrizak Rural District, Kahrizak District, Ray
                County, Tehran Province. The village had a school that supported
                education up to the 3rd grade of middle school.
              </p>
              <p className="font-light md:text-xl my-2 leading-relaxed">
                I remember learning how to read and starting to read as much as
                possible every day. My grandfather always encouraged me to read
                and even rewarded me for reading books. Most of the books I read
                were biographies and stories from the past. My favorite
                childhood books included
                <HyperLink href="https://en.wikipedia.org/wiki/Gulistan_(book)">
                  Gulistan
                </HyperLink>
                ,{" "}
                <HyperLink href="https://en.wikipedia.org/wiki/Shahnameh">
                  Shahnameh
                </HyperLink>
                <HyperLink href="https://en.wikipedia.org/wiki/Bahlool">
                story of Bahlool
                </HyperLink>
                and{" "}
                <HyperLink href="https://en.wikipedia.org/wiki/The_Fourteen_Infallibles">
                  The Fourteen Infallibles
                </HyperLink>
                . (At the time, I read simplified versions of these books,
                specifically designed for children and teenagers.)
              </p>
            </section>
            <section className="my-10">
              <h2 className="text-3xl pb-2 font-light sm:text-4xl md:text-5xl tracking-wide">
                After School
              </h2>
              <p className="font-light md:text-xl my-2 leading-relaxed">
                Unfortunately, when I was 13-14 years old, my family separated,
                and I lived with my mother. Due to the circumstances, I had to
                leave school after finishing the second year of high school. I
                started working in various jobs, such as tailoring, carpet
                cleaning, and at a plastic factory.
              </p>
              <h2 className="text-3xl pb-2 font-light sm:text-4xl md:text-5xl tracking-wide mt-10">
                Changing life
              </h2>
              <p className="font-light md:text-xl my-2 leading-relaxed">
                At 16, I grew tired of working as a tailor and wanted to change
                my life, but I wasn&apos;t sure how. The one thing I knew was that
                learning English would be crucial for any path I chose. I began
                learning English while reflecting on my childhood. When I was
                12, my family had bought me a tablet for my birthday, and it had
                Android 3.
              </p>
              <p className="font-light md:text-xl my-2 leading-relaxed">
                Like other kids, I played games, but I also discovered tools to
                hack offline games on my tablet. I even experimented with
                modifying game files by copying and replacing them(I open
                android folder data and find the right folder for game then get
                copy of it delete each file one check what happend to game and
                if any wrong I haapend I replace the modified version with the
                copy), which allowed me to understand their structure. This led
                to some fun discoveries, like changing the kits of teams in
                football games and altering gameplay elements.
              </p>
            </section>
            <section className="my-10">
              <h2 className="text-3xl pb-2 font-light sm:text-4xl md:text-5xl tracking-wide mt-10">
                Coding Journey and Beyond
              </h2>
              <p className="font-light md:text-xl my-2 leading-relaxed">
                One morning, after six months of testing various jobs, I was
                still unsure of what to do. Then, one of my friends suggested I
                try programming, mentioning that it could lead to a successful
                career, like
                <HyperLink href="https://en.wikipedia.org/wiki/Jeff_Bezos">
                  Jeff Bezos
                </HyperLink>{" "}
                I didn&apos;t know what programming even meant at the time, but after
                work, I went home and googled it—and that&apos;s when my coding
                journey began.
              </p>
              <p className="font-light md:text-xl my-2 leading-relaxed">
                I spent another six months learning coding, and in March 2023,
                at 17 years old, I landed a job at Iransamaneh, where I still
                work today. That&apos;s my journey so far, and if anything
                interesting happens, I&apos;ll be sure to update this section. Thank
                you for taking the time to read this.
              </p>
            </section>
          </div>
          <Gallery />
        </section>
      )}
    </>
  );
};

export default AboutDetail;
