import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='container p-6 flex items-center justify-between  md:mx-auto animate-comeFromTop '>
      <div>
        <Link className='text-2xl md:text-3xl text-orange-500 font-extrabold' href="/"><span className='text-white'>{"<"}</span> Shubham <span className='text-white'>{"/>"}</span></Link>
      </div>
      <div>
        <ul className='h-full flex items-center justify-center gap-4'>
          <li>
            <Link className='text-gray-300 hover:text-white font-bold' target='_blank' href="https://www.github.com/DevBlogs404">Github</Link>
          </li>
          {/* <li>
            <Link className='text-red-300 font-bold' target='_blank' href="#">Gmail</Link>
          </li> */}
          <li>
            <Link className='text-blue-300 hover:text-white font-bold' target='_blank' href="https://www.linkedin.com/in/shubham-hooda-321078183">LinkedIn</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
