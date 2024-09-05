"use client";
import Loading from "@/app/loading";
import { PostsCashType } from "@/types/entities";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import DeleteBlock from "./DeleteBlock";

const PostsCard = () => {
  const { data: posts, isLoading } = useQuery<PostsCashType[]>({
    queryKey: ["posts"],
    queryFn: () =>
      axios.get<PostsCashType[]>("/api/posts").then((res) => res.data),
  });

  if (isLoading) return <Loading />;
  let isAuth: boolean = false;
  const auth = localStorage.getItem("auth");
  if (auth) {
    isAuth = true;
  } else {
    isAuth = false;
  }

  return (
    <>
      <div className="p-4">
        {/* @ts-ignore */}
        {posts?.data?.map((post) => (
          <article
            key={post._id}
            className="group flex flex-col sm:flex-row transition border border-base-100 hover:border-[#714F04] hover:shadow-2xl shadow-xl mb-4"
          >
            <Link
              href={`/posts/${post._id}`}
              className="w-full sm:w-auto sm:basis-56"
            >
              <Image
                alt={post.title.slice(0, 60)}
                src={post.imgurl}
                width={224}
                height={224}
                className="aspect-square h-full w-full object-cover"
              />
            </Link>

            <div className="flex flex-1 flex-col justify-between">
              <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                <Link href={`/posts/${post._id}`}>
                  <h3 className="font-bold uppercase group-hover:text-[#714F04] cursor-pointer">
                    {post.title.slice(0, 60)}
                  </h3>
                </Link>

                <p className="mt-2 line-clamp-3 text-sm/relaxed group-hover:text-[#714F04] cursor-pointer">
                  {post.title.slice(0, 140)}
                </p>
              </div>
              <div className="sm:flex gap-2 sm:items-end sm:justify-end">
                {isAuth === true ? (
                  <DeleteBlock path="posts" id={post._id} />
                ) : null}
                <Link
                  href={`/posts/${post._id}`}
                  className="block bg-yellow-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition group-hover:bg-yellow-500 group-hover:text-white"
                >
                  Read Post
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default PostsCard;
