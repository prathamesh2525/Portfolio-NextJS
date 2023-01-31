import React from "react"
import Link from "next/link"
import { AiOutlineMail } from "react-icons/ai"
import { FaGithub, FaTwitter } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs"

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
        <div>
          <p className="uppercase tracking-widest">
            Lorem ipsum dolor sit amet.
          </p>
          <h1 className="py-4 text-gray-200">
            Hi, I&#39;m <span className="text-teal-400">Prathamesh</span>
          </h1>
          <h1 className="py-2 text-gray-200">A Front-end Developer</h1>
          <p className="py-4 text-gray-300 max-w-[70%] m-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quasi at officiis nam consequatur ut quibusdam ipsa aspernatur odit
            nostrum, id deleniti nesciunt officia eveniet tempora?
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href="https://twitter.com/2xprathamesh" target="_blank">
              <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150">
                <FaTwitter />
              </div>
            </Link>
            <Link href="https://github.com/prathamesh2525" target="_blank">
              <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150">
                <FaGithub />
              </div>
            </Link>
            <Link href="mailto:prathameshmadniwale31@gmail.com" target="_blank">
              <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150">
                <AiOutlineMail />
              </div>
            </Link>
            <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-150">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
