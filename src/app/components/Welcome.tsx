import React from 'react'

export default function Welcome() {
  return (
<div className="w-full md:p-2 md:flex md:flex-col md:justify-center xl:p-6  animate-comeFromRight">
      <div className="text-6xl md:text-8xl pointer-events-none">Welcome.</div>
      <div className='my-6 p-4 pointer-events-none'>
        <p className=" text-gray-300 break-words">
        My name is Shubham, I'm a front-end developer based in Haryana, IN. I have developed many types of front-ends from well known  Ecommerce platforms to  Modren Websites.
        </p>
        <p className="mt-4 text-gray-300 break-words">
        I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented UX
        </p>
      </div>
    </div>
  )
}
