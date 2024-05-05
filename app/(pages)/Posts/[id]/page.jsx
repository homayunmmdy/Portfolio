"use client";
import PageTitle from "@/app/components/PageTitle";
import SinglePost from "@/app/components/SinglePost";
import Image from "next/image";

const Post = () => {
    const post = SinglePost();

    if (!post) {
        return <h1>Loading</h1>
    }

    return (
        <>
            <PageTitle title={post.title} />
            <div className='px-5 w-[98%] md:w-[92%] mx-auto'>
                <Image
                    width={1000}
                    height={750}
                    src={post.imgurl}
                    alt={post.title}
                    className="w-full h-full mx-auto my-12"
                />
                <div className='px-5 w-[98%] md:w-[92%] mx-auto pb-7'>
                <p className='font-light md:text-xl my-2 text-gray-600 leading-relaxed'>
                    {post.description}
                </p>
                    <p className=" text-lg leading-9">

                    {post.body}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Post;