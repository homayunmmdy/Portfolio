"use client";
import React, { useState } from "react";
import Card from "./Card";

const Cards = <T,>({ data }: { data: T[] }) => {
  const [pageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterData, setfilterData] = useState(data?.slice(0, pageSize));

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = pageNumber * pageSize;
    setfilterData(data.slice(startIndex, endIndex));
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filterData?.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
      {data?.length < 6 ? null : (
        <div className="flex justify-center my-6">
          {Array.from({ length: Math.ceil(data.length / pageSize) }, (_, i) => (
            <button
              key={i}
              className={`mx-1 px-4 py-2  ${
                currentPage === i + 1 ? "bg-[#714F04] text-white" : "bg-black text-white"
              } rounded`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Cards;
