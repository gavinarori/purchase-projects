import React from 'react'
import { Navbar }from '@/app/components/DashboardNavbar/Navbar'
import Sidebar from '@/app/components/DashboardNavbar/Sidebar'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen bg-back object-cover flex items-center">
      <Sidebar />
    </div>

    </div>
  )
}

export default Dashboard