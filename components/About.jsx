/* eslint-disable @next/next/no-img-element */
import React from "react"

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-8">
      <div className="max-w-[1200px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-xl tracking-widest uppercase text-[#2DD4BF]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            possimus vero non natus illum omnis fuga enim provident rem commodi
            itaque quia similique dignissimos quos consectetur eum ratione, quam
            eaque. Enim, cum? At sit, inventore impedit similique tempora
            repellat, magni, placeat unde minus in non? Quasi ab illum nostrum
            porro!
          </p>
          <p className="py-2 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nam
            totam, veniam voluptatum aliquam tempora similique iste asperiores,
            harum quis id reiciendis unde quae impedit pariatur ipsa illum. Qui
            fuga eveniet itaque, labore magni assumenda dolores, libero esse ex
            dolore, sit et voluptas eum reiciendis officiis tempore veritatis
            officia pariatur temporibus nisi accusamus maiores. Animi.
          </p>
          <p className="py-2 text-gray-300 underline decoration-[#77fae8] cursor-pointer">
            My latest Projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-600 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-200">
          <img className="rounded-xl"
            src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
            alt="/"
          />
        </div>
      </div>
    </div>
  )
}

export default About
