import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className=' bg-black/20 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-gray-900 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-black/20'>
      <Routes>
        <Route path = "/" element ={<Home />}/>
        <Route path = "/login" element = {<Login />}/>
        <Route path = "/signup" element = {<Signup />}/>
      </Routes>
    </div>
    </>
  )
}

export default App
