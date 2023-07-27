import React from 'react'

export default function Welcome() {
  return (
<div className="w-full md:p-2 md:flex md:flex-col md:justify-center xl:p-6  animate-comeFromRight">
      <div className="text-6xl md:text-8xl pointer-events-none">Welcome.</div>
      <div className='my-6 p-4 pointer-events-none'>
        <p className=" text-gray-300 break-words">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          aliquam eaque illum ipsum sapiente ab magnam minus expedita
          possimus nulla?
        </p>
        <p className="mt-4 text-gray-300 break-words">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          ab!
        </p>
      </div>
    </div>
  )
}
