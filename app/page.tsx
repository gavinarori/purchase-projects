"use client"

import React, { useState, useEffect } from 'react';
import Navbar from '@/app/components/Navbar/Navbar';
import useMediaQuery from '@/hooks/useMediaQuery';

export default function Home() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery('(min-width: 1060px)');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage('home');
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-wallapaper-1 w-full h-[900px] relative object-cover bg-fixed bg-center bg-cover custom-img">
    <div className=" flex items-center justify-center h-screen mb-12">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      //homeBackground video
       <video src="https://youtu.be/wAmbDCJocJM" autoPlay loop muted className=''></video>
      <div className="p-24 flex flex-col justify-center align-middle">
        <h1 className="text-white text-6xl font-bold ">Your Heading</h1>
        <p className="text-slate-300 text-3xl font-light mt-5 ">Your paragraph text</p>
        <button className='px-4 py-0 rounded-lg flex-row mt-7 font-bold text-2xl p-4 text-white  border'>
          Purchase
          <svg xmlns="http://www.w3.org/2000/svg"
           className="h-6 w-6 mr-[20px] " 
           fill="none" 
           viewBox="0 0 24 24" 
           stroke="currentColor" 
           stroke-width="2">
  <path strokeLinecap="round" 
  strokeLinejoin="round" 
  d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg>
          </button>
      </div>
    </div>
  </main>
  
  );
}
