"use client";
import { PageTitle } from "@/components";
import ExpandableText from "@/components/ExpandableText";
import useReadText from "@/hooks/useReadText";
import useSinglePost from "@/hooks/useSinglePost";
import Image from "next/image";
import React from "react";
import { FaPlay, FaStop } from "react-icons/fa";

const SinglePostPage = () => {
  //@ts-ignore
  const post = useSinglePost();
  //@ts-ignore
  const { isSpeaking, handleReadText, handleStopReading } = useReadText(post?.body);
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
              {!isSpeaking ? (
                <button
                  className="btn btn-neutral text-white rounded-full ml-3"
                  onClick={handleReadText}
                >
                  <FaPlay />
                </button>
              ) : (
                <button
                  className="btn btn-neutral text-white rounded-full ml-3"
                  onClick={handleStopReading}
                >
                  <FaStop />
                </button>
              )}
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default SinglePostPage;
