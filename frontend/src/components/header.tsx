import { SidebarTrigger } from './ui/sidebar'
import { AvatarImage, Avatar, AvatarFallback } from './ui/avatar'
import { BellDot } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const nav = useNavigate()
  return (
    <div className='w-full  p-6 shadow-md flex  justify-between'>
      <SidebarTrigger className='absolute left-0 top-1' />
      <p
        onClick={() => {
          nav('/')
        }}
        className='text-[#BF9BDE] font-bold text-[36px] cursor-pointer'
      >
        GScores
      </p>
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
