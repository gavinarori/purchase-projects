"use client"

import React, { useState, useEffect } from 'react';
import Navbar from '@/app/components/Navbar/Navbar';
import DisplayHome from '@/app/components/Home/Home';
import DotSlide from '@/app/components/About/About';

export default function Home() {
return (
    <main className="bg-">
      <Navbar/>
      <DisplayHome/>
      <DotSlide />
  </main>
  
  );
}
