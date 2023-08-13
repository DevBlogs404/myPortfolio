import React from "react";
import Link from "next/link";

type projectProps = {
  title: string;
  description: string;
  siteUrl: string;
  codeUrl: string;
};

export default function Project(props: projectProps) {
  return (
    <div
      className={`w-full md:p-2 xl:p-6 md:flex md:flex-col md:justify-center animate-comeFromRight`}
    >
      <div className="text-6xl pointer-events-none">{props.title}</div>
      <div>
        <p className="my-6 pointer-events-none">{props.description}</p>
        <Link
          href={props.siteUrl}
          target="_blank"
          className=" text-gray-300  border-b-2 border-fuchsia-500  hover:text-white transition-all ease-in-out"
        >
          View Site
        </Link>
        <Link
          href={props.codeUrl}
          target="_blank"
          className=" ml-4 text-gray-300  border-b-2 border-fuchsia-500  hover:text-white transition-all ease-in-out"
        >
          Github
        </Link>
      </div>
    </div>
  );
}
