import React from 'react'

export default function ProjectList(props:any,chooseProject:string) {
  return (
   <>
   <div className="w-full md:p-2 xl:p-6 md:flex md:flex-col md:justify-center animate-comeFromLeft">
        <h2 className="mb-6 text-gray-300 text-3xl hover:text-white cursor-pointer" onClick={props.handleClickOutside} >{chooseProject=== "" ? "Projects" : "Back to Main"}</h2>
          <div className="flex relative flex-col gap-6 p-8" 
          >
             <div className="z-[-5] h-1/2  w-1/5  absolute top-0 left-0 border-t-4 border-l-4 rounded-sm border-orange-400 animate-comeFromOpacity"></div>
          <span className="cursor-pointer">
            <span
              className=" text-xl text-gray-300 border-b-2 border-fuchsia-500 hover:text-white md:hover:text-2xl transition-all ease-in-out"
              onClick={props.handleClick}
            >
              Avira
            </span>
          </span>
          <span className="cursor-pointer">
            <span
              className=" text-xl text-gray-300  border-b-2 border-fuchsia-500  hover:text-white md:hover:text-2xl transition-all ease-in-out"
              onClick={props.handleClick}
            >
              Space-App
            </span>
          </span>
          <span className="cursor-pointer">
            <span
              className=" text-xl text-gray-300  border-b-2 border-fuchsia-500  hover:text-white md:hover:text-2xl transition-all ease-in-out"
              onClick={props.handleClick}
            >
              DashBoard
            </span>
          </span>
        </div>
      </div>
      <div className=" h-1/5 xl:h-1/3 xl:w-1/4 w-1/5 absolute bottom-0 right-0 border-b-4  border-r-4 rounded-sm border-orange-400 md:border-b-8 md:border-r-8  md:animate-comeFromOpacity md:transition-all md:ease-in"></div></>
  )
}
