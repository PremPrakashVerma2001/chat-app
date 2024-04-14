import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    
  return (
    <div className="text-white text-md p-7 ">
        
        <form className='space-y-4 ' >
            <div className="space-y-1">
            <label htmlFor="username">Email</label><br />
            <input type="email" name='username' id = 'username' value="" placeholder='xyz@gmail.com'  className='w-full  p-2 bg-transparent border-b-2 border-b-black/50  focus:outline-none focus:border-b-2 focus:border-b-emerald-400 ' />
            </div>
            <div className=''>
            <label htmlFor="password">Password</label><br/>
            <input type="password" name='password' id='password' value="" placeholder='*****' className='w-full  p-2 bg-transparent border-b-2 border-b-black/50  focus:outline-none focus:border-b-2 focus:border-b-emerald-400 '  />
            </div>
            <div className='text-center space-y-2'>
                <button className='rounded-lg bg-blue-500 hover:bg-blue-600  px-3 py-2'  type='submit'>LOGIN</button>
                <p className='text-black/60'>Forgot Password ?</p>
            </div>
            <div className='text-base text-center'>
            <p>Don't have an Account ?  <Link className='text-amber-400 font-semibold hover:text-amber-500' to = "/signup">SignUp</Link></p>
            
            </div>
        </form>

    </div>
  )
}

export default Login