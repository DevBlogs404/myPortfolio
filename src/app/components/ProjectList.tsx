import React from "react";
import { projectsData } from "@/api/data";

type TProps = {
  chooseProject: string;
  handleClickOutside: () => void;
  handleClick: (event: React.MouseEvent<HTMLSpanElement>) => void;
};

export default function ProjectList(props: TProps) {
  return (
    <>
      <div className="w-full md:p-2 xl:p-6 md:flex md:flex-col md:justify-center animate-comeFromLeft">
        <h2
          className="mb-6 text-gray-300 text-3xl hover:text-white cursor-pointer"
          onClick={props.handleClickOutside}
        >
          {props.chooseProject === "" ? "Projects" : "Back to Main"}
        </h2>
        <div className="flex relative flex-col gap-6 p-8">
          <div className="z-[-5] h-1/2  w-1/5  absolute top-0 left-0 border-t-4 border-l-4 rounded-sm border-orange-400 animate-comeFromOpacity"></div>
          {projectsData.map((project) => {
            return (
              <span className="cursor-pointer" key={project.id}>
                <span
                  className=" text-xl text-gray-300 border-b-2 border-[#fb923c] hover:text-white  md:hover:text-2xl transition-all ease-in-out"
                  onClick={props.handleClick}
                >
                  {project.title}
                </span>
              </span>
            );
          })}
        </div>
      </div>
      <div className=" h-1/5 xl:h-1/3 xl:w-1/4 w-1/5 absolute bottom-0 right-0 border-b-4  border-r-4 rounded-sm border-orange-400 md:border-b-8 md:border-r-8  md:animate-comeFromOpacity md:transition-all md:ease-in"></div>
    </>
  );
}
