import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Home = () => {
  return (
    <main className="mt-20 px-6 relative">
      <section>
        <h1 className="text-6xl md:text-8xl font-bold text-center leading-tight !mb-10 ! !mt-25 ">
          <span>Reimagine</span>
          <br />
          <span>Your Space</span>
        </h1>

          <div className='flex justify-between items-center !px-20'>

            <div className="  ">
              <div className="flex -space-x-4 relative">
                <img
                  className="w-12 h-12 border-2 border-white rounded-full object-cover absolute left-0"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User 1"
                />
                <img
                  className="w-12 h-12 border-2 border-white rounded-full object-cover absolute left-8"
                  src="https://randomuser.me/api/portraits/men/44.jpg"
                  alt="User 2"
                />
                <img
                  className="w-12 h-12 border-2 border-white rounded-full object-cover absolute left-16"
                  src="https://randomuser.me/api/portraits/women/25.jpg"
                  alt="User 3"
                />
                
              </div>

              <p className="text-md !mt-14">
                More than 1000+ homes
                <br />
                have been shaped by
                <br />
                Haven Craft
              </p>
            </div>

            <div className="z-1 shadow-lg ">
            <img
              src="https://framerusercontent.com/images/kEM2A8aPUx6Imk6456geaTOdOQ4.jpg"
              alt="Interior Design"
              className="w-70 h-auto shadow-lg rounded-lg "
            />
          </div>

            <div className=" flex flex-col items-end">
              <p className="text-md flex flex-col items-end !mb-5">
                <span>The intellect crafts the stunning,</span>
               <span> the soul shapes the residence,</span>
                 <span>The Sweet Home</span>
              </p>
              <div className=''>
              <button className=" bg-white text-black rounded-full hover:bg-gray-200 cursor-pointer flex items-center gap-2 !px-10 !py-4">
                <span>Get started</span>
                <span className='text-2xl'><IoIosArrowRoundForward /></span>
              </button>
              </div>
            </div>
          </div>

      </section>
      <section className="relative">
        <div className=" inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className=" inset-0 w-full h-full object-cover opacity-30"
          >
            <source src="bgvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="particles"></div>
        </div>
      </section>
    </main>
  )
}

export default Home