import React from 'react'
import Chats from '../components/Chats';
import Conversation from '../components/Conversation';

const Home = () => {
  return (
    <div className='flex text-black/80 min-h-[50vh]'>
        <Chats/>
        <Conversation/>
    </div>
  )
}

export default Home