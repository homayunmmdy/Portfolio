import Link from "next/link";

const MDXLink = ({ href, text }: { href: string; text: string }) => {
  return <Link className="font-bold hover:text-[#714F04]" title={text} href={href}>{text}</Link>;
};

export default MDXLink;