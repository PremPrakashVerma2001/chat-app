import React from 'react'
import Chats from '../components/Chats';
import Conversation from '../components/Conversation';
import axios from 'axios';

const Home = () => {
  // const hello = async()=>{
  //   try {
  //     const response = await axios.get("/api/auth/status");
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // hello();
  return (
    <div className='flex text-black/80 h-[70vh]'>
        <Chats/>
        <Conversation/>
    </div>
  )
}

export default Home