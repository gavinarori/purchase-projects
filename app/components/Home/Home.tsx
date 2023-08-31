"use client"
import React from 'react';

const Home = () => {
  
    return (
    <div className="relative h-full">
      <div className="flex sm:min-h-full flex-1 flex-col justify-center px-0 py-0 lg:px-0 ">
      <video src='/commercial video for IT company - ELEKS - How to Turn a Great Idea into a Software Product-.mp4' className="w-full h-[56.25vw] object-cover brightness-[50%] transition duration-500" autoPlay muted loop />
      </div>
      
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          SOURCE CODE
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nobis odit accusantium voluptatibus fugiat perferendis labore animi hic exercitationem dolorum eos a qui vero, explicabo tenetur. Nihil omnis eligendi laudantium!
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <button
            className="
            bg-white
            text-white
              bg-opacity-30 
              rounded-md 
              py-1 md:py-2 
              px-2 md:px-4
              w-auto 
              text-xs lg:text-lg 
              font-semibold
              flex
              flex-row
              items-center
              hover:bg-opacity-20
              transition
            "
            >
              More Info
          </button>
        </div>
      </div>
    </div>
  )
}
export default Home;
