import React from "react";
import { useState } from "react";

const ExpandableText: React.FC<{ text: string }> = ({
  text,
}: {
  text: string;
}) => {
  const limit = 255;
  const [isExpanded, setExpanded] = useState(false);

  if (text?.length <= limit) return <article>{text}</article>;

  return (
    <>
      {isExpanded ? (
        <article>{text}</article>
      ) : (
        <article>{text?.substring(0, limit)}...</article>
      )}
      <button
        className="btn btn-outline btn-neutral my-3"
        onClick={() => setExpanded(!isExpanded)}
      >{isExpanded ? "Show Less" : "Show More"}</button>
    </>
  );
};

export default ExpandableText;
