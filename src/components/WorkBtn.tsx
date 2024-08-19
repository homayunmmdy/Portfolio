import React from "react";
import Link from "next/link";

const WorkBtn = () => {
  return (
    <>
      <Link href="/contacts" className="font-bold">
        <button className="btn bg-[#f2ad00] btn-warning w-full text-xl">
          Let us Work Together
        </button>
      </Link>
    </>
  );
};

export default WorkBtn;
