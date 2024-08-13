import PageDescription from "@/components/PageDescription";
import PageTitle from "@/components/PageTitle";
import Projects from "@/components/Projects";
import React from "react";

const CoursesPage = () => {
  return (
    <>
      <PageTitle titr="Courses" title="List of courses I take" />
      <div className="px-5 w-[98%] md:w-[92%] mx-auto py-12">
        <PageDescription
          title="Knowlege out side of the course"
          description="Most of the time instead of speding time I read the documentation to solve problem but these are list of the course that I recommand to everybody how start learning or on the path of learning how to code as frontend developer personally I take lot's of course to improve my skil but these are the best one."
        />
        <Projects />
      </div>
    </>
  );
};

export default CoursesPage;
