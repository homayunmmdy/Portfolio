"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import FormField from "./FormField";

//@ts-ignore
const EditPostForm = ({  post }) => {
  const EDITMODE = post._id !== "new";
  const router = useRouter();
  const startingTicketData = {
    title: EDITMODE ? post.title : "",
    description: EDITMODE ? post.description : "",
    body: EDITMODE ? post.body : "",
    imgurl: EDITMODE ? post.imgurl : "",
  };

  const [formData, setFormData] = useState(startingTicketData);
  const [loading, setLoading] = useState(false);

  //@ts-ignore
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //@ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url = EDITMODE ? `/api/posts/${post._id}` : '/api/posts';
    const method = EDITMODE ? "PUT" : "POST";
    const headers = { "Content-Type": "application/json" };

    const res = await fetch(url, {
      method,
      headers,
      body: JSON.stringify({ formData }),
    });

    if (!res.ok) {
      setLoading(false);
      throw new Error(`Failed to ${EDITMODE ? "update" : "create"} post`);
    }

    router.refresh();
    router.push("/posts");
  };

  return (
    <div className="flex justify-center p-4">
      {loading && <span className="absolute loading loading-ring loading-lg"></span>}
      <form onSubmit={handleSubmit} method="post" className="flex flex-col gap-3 w-full md:w-1/2 mb-3">
        <h3 className="text-center font-semibold text-2xl">{EDITMODE ? "Edit Post" : "New Post"}</h3>
        <div><Image
          src={formData.imgurl}
          title={formData.title}
          alt={formData.title}
          height={390.938}
          width={695}
          className="w-full rounded-xl border border-gray-500 aspect-video"
        /></div>
        <FormField id="imgurl" name="imgurl" label="Image Link" value={formData.imgurl} onChange={handleChange} />
        <FormField id="title" name="title" label="Title" value={formData.title} onChange={handleChange} required />
        <FormField id="description" name="description" type="textarea" label="Lead" value={formData.description} onChange={handleChange} />
        <FormField id="body" name="body" type="textarea" label="Body" value={formData.body} onChange={handleChange} required />
        <input  type="submit" className='btn btn-active btn-neutral' value={EDITMODE ? "Save" : "Post"}/>
      </form>
    </div>
  );
};

export default EditPostForm;