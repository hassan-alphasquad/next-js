"use client"
import { useState } from "react";
import { useRouter } from 'next/navigation'
const Form = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const router = useRouter()
  const handleSignIn = () => {
    if (!email || !password) {
      alert('please fill all the field');
      return;
    }
    const userdata = {
      email,
      password,
    }

    localStorage.setItem('User', JSON.stringify(userdata));
    alert('signIn successful! data saved in local storage')

    setemail('');
    setpassword('');


    router.push('/dashboard');

  }
  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-bl from-yellow-300 to-yellow-600 '>
      <div className='flex flex-col w-[340px] h-[475px] bg-white relative rounded-[20px] sm:h-[570]  sm:w-[475px]'>
        <div id="logo" className='flex flex-col text-center'>
          <div className='flex h-7 w-[1px] mb-1 relative text-center top-[41px] ml-[60PX] border-3 border-amber-300 bg-yellow-400 sm:mb-0 sm:h-9 sm:ml-[60px]'></div>
          <h1 className='ml-[19px] mt-[11px] text-xl font-bold leading-[100%] sm:text-[32px] sm:mt-[8px]'>CRUD OPERATIONS</h1>
          <h2 className='font-semibold fon uppercase mt-6 sm:text-2xl sm:mt-12'>Sign In</h2>
          <p className='mt-3 ml-3 text-[13px] text-zinc-400 sm:mt-3 sm:text-[16px] sm:ml-4'>Enter your credentials to access your account</p>
          <p className='mr-70 mt-10 text-zinc-500 text-[13px] sm:text-[15px] sm:mr-92'>Email</p>
          <input className='flex mx-auto  h-[40px] w-[316px] outline-0  border-1 border-zinc-200 placeholder:text-[11px] placeholder:text-gray-300 p-3 rounded-[4px] sm:h-[44px] sm:w-[415px]  sm:placeholder:text-[13px]' type="email" id='email' value={email} onChange={(e) => setemail(e.target.value)} placeholder='     Enter your email' />
          <p className='mr-64 mt-7 text-zinc-500 text-[13px] sm:text-[15px] sm:mr-84 sm:mt-10'>Password</p>
          <input className='flex mx-auto h-[40px] w-[316px] outline-0  placeholder:text-[11px] placeholder:text-gray-300  p-3 border-1 border-zinc-200 rounded-[4px] sm:h-[44px] sm:w-[415px] sm:placeholder:text-[13px]' type="password" id='password' value={password} onChange={(e) => setpassword(e.target.value)} placeholder='     Enter your password' />
          <button className='flex mt-10 mx-auto h-[44px] justify-center items-center bg-yellow-500 cursor-pointer hover:bg-yellow-400 w-[316px] text-white border-1 border-yellow-500 hover:text-gray-400 rounded-[4px] sm:w-[415px]' onClick={handleSignIn} >SIGN IN</button>
          <p className='text-[14px] text-zinc-400 sm:text-[16px]'>Forgot your password?<button className='text-yellow-400 text-[13px] cursor-pointer mt-5 underline sm:text-[16px]'>Reset Password</button></p>
        </div>




      </div>
    </div>
  )
}

export default Form
