import React from 'react'
import { FaSearch } from "react-icons/fa";
import Avatar from '../components/Avatar';

const Home = () => {
  return (
    <div className='flex p-5 text-emerald-300'>
        <div className=' w-[25vh]'>
            <div className='flex items-center'>
                <input type="text"  placeholder='Search...'className='w-auto overflow-hidden  text-xs w-3/4 p-[3px] bg-transparent border-b-2 border-b-black/50  focus:outline-none focus:border-b-2 focus:border-b-emerald-400 ' /> 
                <FaSearch size={13}  className='hover:text-emerald-400 cursor-pointer'/>
            </div>
            {/* <hr className='border-black/50 my-2'/> */}
           <div className=''>
                <Avatar />
                <Avatar />
                <Avatar />
            </div>
        </div>
        <div className='h-[60vh] border-[1px] border-white/40 mx-2 '>
            
        </div>
        <div className='w-[35vh]'>
            right
        </div>
    </div>
  )
}

export default Home