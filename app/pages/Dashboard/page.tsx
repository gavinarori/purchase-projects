'use client'
// Import necessary types
import React, { createContext, useState, ReactNode } from 'react';
import { Navbar } from '@/app/components/DashboardNavbar/Navbar';
import Service from '@/app/components/Services/Service';
import Profile from '@/app/splash/page';
import Link from 'next/link';




const Dashboard = (): JSX.Element => {
  
  return (
    <div>
      
        <Navbar />
        <Service  />

      
    </div>
  );
};

export default Dashboard;
