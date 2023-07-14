
import Chat from '@/components/Chats.js/Chat'
import ChatDetails from '@/components/Chats.js/ChatDetails'
import Dashbord from '@/components/dashbord/Dashbord'
import Navbar from '@/components/navbar/Navbar'
import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-gray-100 '>
      <Navbar />
      <Chat />
      <div className='grid grid-cols-1  lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 mt-2'>
        <div className='grid col-span-1'>
          <ChatDetails/>
        </div>
        <div className='grid col-span-3'><Dashbord /></div>
        
      </div>


    </div>
  )
}
