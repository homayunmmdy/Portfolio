"use client";
import React, { useState } from "react";
import Section from "./Section";

const data = [
  {
    id: 1,
    title: "Magnitify",
    description:
      "This my newsletter that stat in the jan of the 2024 from the linkedin and now it's has own website in this newsletter I write about busisness ai and so on.",
    items: ["Blog", "Business", "AI"],
    link: "https://magnitify.vercel.app/",
  },
  {
    id: 2,
    title: "Nexca",
    description:
      "Nexca is powerfull admin behind the magnitify and many of my website it's support CRUD Opercation for the website and easily the manage the website just checkout to see what I mean.",
    items: ["Admin"],
    link: "https://nexca.vercel.app/",
  },
  {
    id: 3,
    title: "Ticket System",
    description:
      "This the Ticket System project that I use the mange the tickets for my projects especilly for magnitify and other in this website you go and create tickets and mange theme.",
    items: ["Ticket", "System Management"],
    link: "https://ticket-system-beta.vercel.app/",
  },
  {
    id: 4,
    title: "Mini Poject",
    description:
      "In this project I share the simplest project with each new tools I work or simple feature to able to add into another project in each branch",
    items: ["Auth", "Multi Lang", "Rich Text Editor", "More"],
    link: "https://github.com/homayunmmdy/Mini-Project",
  },
  {
    id: 5,
    title: "GameExplorer",
    description:
      "Welcome to GameExplorer, a dynamic game project that fetches data from the RWAG (Real World Arcade Games) API and presents it with an eye-catching UI. This project allows you to filter games by gen…",
    items: ["RWAG API", "Filter", "Search", "More"],
    link: "https://github.com/homayunmmdy/GameExplorer",
  },
  {
    id: 6,
    title: "Bugify",
    description:
      "Bugify is a simple web application built with React, JavaScript, and Tailwind CSS. It allows users to track their expenses by adding, editing, and deleting and see detail items, and displays the t…",
    items: ["React", "Tailwind", "Javascipt", "More"],
    link: "https://github.com/homayunmmdy/Bugify",
  },
  {
    id: 7,
    title: "Box shadow generator",
    description:
      "This project is a simple box-shadow CSS generator built using Vite and React. It allows users to customize various parameters of a box-shadow such as Horizontal and Vertical offset, Blur, Spread, Color, Opacity, and Inset.",
    link: "https://github.com/homayunmmdy/Box-shadow-generator",
  },
  {
    id: 8,
    title: "Gradient Generator",
    description:
      "This project is a gradient generator built using Vite, React, and TypeScript. It allows users to dynamically generate CSS color gradients and customize their orientation.",
    link: "https://github.com/homayunmmdy/Gradient-Generator",
  },
];

const Projects = () => {
  const [pageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterData, setfilterData] = useState(data.slice(0, pageSize));

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = pageNumber * pageSize;
    setfilterData(data.slice(startIndex, endIndex));
  };
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filterData?.map((item) => (
          <Section key={item.id} sec={item} />
        ))}
      </div>
      {data?.length < 6 ? null : (
        <div className="flex justify-center my-6">
          {Array.from({ length: Math.ceil(data.length / pageSize) }, (_, i) => (
            <button
              key={i}
              className={`mx-1 px-4 py-2  ${
                currentPage === i + 1 ? "bg-black text-white" : "bg-white"
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

export default Projects;
