import Link from "next/link";
import React from "react";

const HyperLink = ({ href, children }: { href: string; children: string }) => {
  return (
    <Link href={href} className="font-bold hover:text-[#714F04] underline mx-2">
      {children}
    </Link>
  );
};

export default HyperLink;
