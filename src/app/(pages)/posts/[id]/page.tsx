"use client";
import { PageTitle } from "@/components";
import ExpandableText from "@/components/ExpandableText";
import useSinglePost from "@/hooks/useSinglePost";
import Image from "next/image";
import React from "react";

const SinglePostPage = () => {
  //@ts-ignore
  const post = useSinglePost();
  return (
    <>
      {/* @ts-ignore */}
      <PageTitle title={post?.title.slice(0, 80)} />
      <div className="px-5 w-[98%] md:w-[92%] mx-auto mb-4 md:mb-5 lg:mb-9">
        <Image
          className="w-full h-full aspect-video mx-auto my-12 md:my-20 lg:my-24 border border-[#714F04]"
          // @ts-ignore
          src={post?.imgurl}
          width={1000}
          height={750}
          // @ts-ignore
          alt={post?.title.slice(0, 60)}
        />
        <div className="px-5 w-[98%] md:w-[92%] mx-auto mb-4 md:mb-5 lg:mb-9">
          <p className="text-xl md:text-2xl font-light font-serif leading-9">
            <div className="text-center gap-4 items-center flex-col">
              {/* @ts-ignore */}
              <ExpandableText text={post?.body} />
              <button
                className=" text-center w-48 rounded-2xl h-14 relative  text-xl font-semibold group"
                type="button"
              >
                <div className="bg-black rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                    height="25px"
                    width="25px"
                  >
                    <path
                      d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                      fill="#000000"
                    ></path>
                    <path
                      d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                      fill="#000000"
                    ></path>
                  </svg>
                </div>
                <p className="translate-x-2">Go Back</p>
              </button>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default SinglePostPage;