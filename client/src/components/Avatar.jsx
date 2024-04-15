import React from 'react'
import { RxAvatar } from "react-icons/rx";


const Avatar = () => {
  return (
    <div className='flex items-center gap-4 border-b-2 border-gray-300/50 pb-2 mb-2'>
      <div className='relative w-max'>
        <RxAvatar size={40} />
        <div className='h-[10px] bg-green-500 ring-1 ring-white rounded-full w-[10px] right-0 top-0 absolute' />
        {/* <div className='h-[10px] bg-red-600 ring-1 ring-white rounded-full w-[10px] right-0 top-0 absolute' /> */}
      </div>
      <div className='text-white'>
        <h2>Aman Kumar</h2>
      </div>
    </div>
  )
}

export default Avatar