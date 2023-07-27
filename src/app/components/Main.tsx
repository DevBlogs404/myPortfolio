"use client";
import React, { useState } from "react";
import Link from "next/link";
import { projectsData } from "./../../data.js";
import Project from "./Project";
import Welcome from "./Welcome";
import ProjectList from "./ProjectList";

export default function Main() {
  const [chooseProject, setChooseProject] = useState("");

  const handleClick = (event: any) => {
 setChooseProject(event.currentTarget.innerText) 
  };

  const handleClickOutside = () =>{
    setChooseProject("")
  }
  return (
    <main className="container relative min-h-[80vh] p-6 mt-4 flex flex-col gap-10 md:mx-auto xl:mx-auto xl:flex-row animate-comeFromOpacity">
        <div className=" h-1/5 xl:h-1/3 w-1/5 xl:w-1/4 absolute top-0 left-0 border-t-4 border-l-4 rounded-sm border-orange-400 md:border-t-8 md:border-l-8 animate-comeFromOpacity"></div>
      {chooseProject ? (
        projectsData
          ?.filter(
            (project) =>
              project.title.toLowerCase() === chooseProject.toLowerCase()
          )
          .map((project) => {
            return (
              <Project
                key={project.id}
                title={project.title}
                description={project.description}
                siteUrl={project.siteUrl}
                codeUrl={project.codeUrl}
              />
            );
          })
      ) : (
        <Welcome />
      )}
      <ProjectList chooseProject={chooseProject} handleClick={handleClick} handleClickOutside={handleClickOutside} />
    </main>
  );
}

