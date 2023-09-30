import Image from "next/image";
import Nodejs from "../../../public/nodejs.png";
import express from "../../../public/express.png";
import html from "../../../public/html.png";
import css from "../../../public/css.png";
import reactpic from "../../../public/react.png";
import tailwindcss from "../../../public/tailwid.png";
import next from "../../../public/next.jpg";
import javascriptpic from "../../../public/javascript.png";
import mongodb from "../../../public/mongodb.png";

export default function Welcome() {
  return (
    <div className="w-full md:p-2 md:flex md:flex-col md:justify-center xl:p-6  animate-comeFromRight">
      <div className="text-6xl md:text-8xl pointer-events-none">Welcome.</div>
      <div className="my-6 p-4 pointer-events-none">
        <p className=" text-gray-300 break-words">
          My name is Shubham, I'm a JavaScript developer based in Haryana,
          India. I have developed many types of web-apps as side projects, from
          well known Ecommerce platforms to Modren Websites.
        </p>
        <p className="mt-4 text-gray-300 break-words">
          I'm passionate about cutting-edge new technologies, pixel-perfect,
          beautiful interfaces and intuitively implemented UX
        </p>
        <div className="mt-4">
          <p className=" text-gray-300 font-bold">Technologies I Use:</p>
          <div className=" mt-2 flex flex-wrap gap-4 items-center justify-between">
            <Image
              src={html}
              width={50}
              height={50}
              className="w-16 h-16 object-contain rounded-full"
              alt="html"
            ></Image>
            <Image
              src={css}
              width={50}
              height={50}
              className="w-16 h-16 object-contain rounded-full"
              alt="css"
            ></Image>
            <Image
              src={javascriptpic}
              width={50}
              height={50}
              className="w-16 h-16 object-contain rounded-full"
              alt="javascript"
            ></Image>
            <Image
              src={reactpic}
              width={50}
              height={50}
              className="w-16 h-16 object-contain rounded-full"
              alt="react"
            ></Image>
            <Image
              src={tailwindcss}
              width={50}
              height={50}
              className="w-16 h-16 object-contain rounded-full"
              alt="tailwindcss"
            ></Image>
            <Image
              src={express}
              width={50}
              height={50}
              className="w-16 h-16 object-contain rounded-full"
              alt="expressjs"
            ></Image>
            <Image
              src={Nodejs}
              width={50}
              height={50}
              className="w-16 h-16 object-contain rounded-full"
              alt="nodejs"
            ></Image>
            <Image
              src={mongodb}
              width={50}
              height={50}
              className="w-16 h-16 object-contain rounded-full"
              alt="mongodb"
            ></Image>
            <Image
              src={next}
              width={50}
              height={50}
              className="w-16 h-16 object-contain rounded-full"
              alt="nextjs"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
