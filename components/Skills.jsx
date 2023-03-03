import React from "react"
import Image from "next/image"
import Html from "../public/assets/skills/html.png"
import tailwind from "../public/assets/skills/tailwind.png"
import js from "../public/assets/skills/js.png"
import react from "../public/assets/skills/react.png"
import solidity from "../public/assets/skills/solidity.png"
import nextjs from "../public/assets/skills/next.png"
import linux from "../public/assets/skills/linux.png"
import github from "../public/assets/skills/github.png"

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#2DCEA5]">
          Skills
        </p>
        <h2 className="py-4">My Tech Stack</h2>
        <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 ">
          <div className="p-6 shadow-xl rounded-xl shadow-cyan-900 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Html} width="64" height="64" alt="html.png" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl shadow-cyan-900 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={tailwind} width="64" height="64" alt="html.png" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl shadow-cyan-900 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={js} width="64" height="64" alt="html.png" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl shadow-cyan-900 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={react} width="64" height="64" alt="html.png" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl shadow-cyan-900 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={solidity} width="64" height="64" alt="html.png" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Solidity</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl shadow-cyan-900 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={nextjs} width="64" height="64" alt="html.png" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NextJS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl shadow-cyan-900 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={linux} width="64" height="64" alt="html.png" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Linux</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl shadow-cyan-900 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={github} width="64" height="64" alt="html.png" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
