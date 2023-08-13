import React from 'react'
import './Home.css'

const Home = () => {
  return (
    
    <div className="relative pb-4 grid-cols-fluid  dark:bg-gray-900 h-full w-full">
    <div>
          <div className= "opacity-100 duration-700 ease-in-out scale-100">
            <div className='  w-full h-[900px] relative object-cover bg-fixed bg-center bg-cover custom-img'>
              <img
                  className="h-full w-[1700px]"
                  src='/top-3-best-ever-tech-ads.jpg'
                  alt="shoes"
                ></img>
            </div>
            <div className="absolute top-60 mx-auto inset-x-1/5 ml-20 hidden md:block">
                  <h1 className="text-white text-4xl  font-bold tracking-normal leading-none">
                  SOURCE CODE
                 </h1>
                 <p className='text-white text-2xl l leading-none pt-4'>
                  making your projects a face
                 </p>
            </div>
          </div>
    </div>
  </div>
  )
}

export default Home;
