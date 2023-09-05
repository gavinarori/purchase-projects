import React from 'react'
import { Navbar }from '@/app/components/DashboardNavbar/Navbar'
import Sidebar from '@/app/components/DashboardNavbar/Sidebar'
import Service from '@/app/components/Services/Service'

const Dashboard = () => {
  return (
    <div>
      
      <Navbar />
      <Service/>

    </div>
  )
}

export default Dashboard