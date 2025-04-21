import React from 'react'
import Header from '@/components/heaer'
import Sidebar from '@/components/sidebar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className=''>
      <Outlet />
    </div>
  )
}

export default MainLayout
