
import { useState } from "next";



const Signin = () => {


  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-bl from-yellow-300 to-yellow-600 '>
      <div className='flex flex-col w-[475px] h-[570px] bg-white relative rounded-[20px]'>
        <div id="logo" className='flex flex-col text-center'>
<div className='flex h-9 w-[1px] relative text-center top-[41px] ml-[70PX] border-3 border-amber-300 bg-yellow-400'></div>
 <h1 className='ml-[19px] mt-[10px] text-3xl font-serif font-extrabold leading-[100%]'>CRUD OPERATIONS</h1>
  <h2 className='font-bold font-mont text-2xl uppercase mt-12'>Sign In</h2>
  <p className='mt-3 ml-4 text-zinc-400 font-serif'>Enter your credentials to access your account</p>
  <p className='mr-94 mt-10 text-zinc-500 font-serif'>Email</p>
  <input className='flex mx-auto h-[44px] w-[415px] outline-0  border-1 border-zinc-200 rounded-[4px] ' type="email" id='text'  placeholder='     Enter your email' />
  <p className='mr-87 mt-10 text-zinc-500 font-serif'>Password</p>
  <input className='flex mx-auto h-[44px] w-[415px] outline-0  border-1 border-zinc-200 rounded-[4px]' type="password" id='text'  placeholder='     Enter your password' />
    <button className='flex mt-10 mx-auto h-[44px] justify-center items-center font-serif bg-yellow-500 w-[415px] text-white border-1 border-yellow-500 rounded-[4px]' >Sign in</button>   
      <p className='font-serif text-zinc-400'>Forgot your password?<button className='text-yellow-400 mt-5 underline font-serif'>Reset Password</button></p>  
        </div>

 


      </div>
    </div>
  )
};

export default Signin
