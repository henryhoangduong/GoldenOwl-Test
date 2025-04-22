import React from 'react'
import { SidebarTrigger } from './ui/sidebar'
import { AvatarImage, Avatar, AvatarFallback } from './ui/avatar'
import { Bell, BellDot } from 'lucide-react'

const Header = () => {
  return (
    <div className='w-full  p-6 shadow-md flex  justify-between'>
      <SidebarTrigger className='absolute left-0' />
      <p className='text-3xl font-medium '>G-Scores</p>
      <div className='flex flex-row gap-2 items-center'>
        <Avatar>
          <AvatarImage src='' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <BellDot size={18} />
      </div>
    </div>
  )
}

export default Header
