import React from 'react'
import { SidebarTrigger } from './ui/sidebar'

const Header = () => {
  return (
    <div className='w-full  p-6 shadow-md flex items-center justify-center'>
      <SidebarTrigger className='absolute left-0' />

      <p className='text-3xl font-medium '>G-Scores</p>
    </div>
  )
}

export default Header
