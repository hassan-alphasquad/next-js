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
      <div className='flex flex-col w-[340px] h-[475px] bg-white relative rounded-3xl sm:h-[570] sm:w-[475px] '>
        <div id="logo" className='flex flex-col text-center'>
          <div className="flex justify-center items-center mt-6 sm:mt-10">
            <div className='flex h-7 w-0.5 text-center border-3 border-amber-300 bg-yellow-400 sm:mt-2 sm:h-9 sm:ml-2'></div>
            <h1 className=' text-xl font-bold ml-1 sm:text-4xl sm:mt-2'>CRUD OPERATIONS</h1>
          </div>
          <h2 className='font-semibold fon uppercase mt-6 sm:text-2xl sm:mt-12'>Sign In</h2>
          <p className='mt-3 ml-3 text-sm text-zinc-400 sm:mt-3 sm:text-sm sm:ml-4'>Enter your credentials to access your account </p>
          <p className='mt-10 ml-4 text-zinc-500 text-sm mr-auto'>Email</p>
          <input className='flex mx-auto  h-10 w-80 outline-0  border-1 border-zinc-200 placeholder:text-sm placeholder:text-gray-300 p-3 rounded-sm sm:h-11 sm:w-md  sm:placeholder:text-sm' type="email" id='email' value={email} onChange={(e) => setemail(e.target.value)} placeholder='     Enter your email' />
          <p className='ml-4 mt-7 text-zinc-500 text-sm sm:text-sm mr-auto'>Password</p>
          <input className='flex mx-auto h-10 w-80 outline-0  placeholder:text-sm placeholder:text-gray-300  p-3 border-1 border-zinc-200 rounded-sm sm:h-11 sm:w-md sm:placeholder:text-sm' type="password" id='password' value={password} onChange={(e) => setpassword(e.target.value)} placeholder='     Enter your password' />
          <button className='flex mt-10 mx-auto h-11 justify-center items-center bg-yellow-500 cursor-pointer hover:bg-yellow-400 w-80 text-white border-1 border-yellow-500 hover:text-gray-400 rounded-sm sm:w-md' onClick={handleSignIn} > SIGN IN </button>
          <p className='text-sm text-zinc-400 sm:text-sm'>Forgot your password?<button className='text-yellow-400 text-sm cursor-pointer mt-5 underline sm:text-sm'> Reset Password </button></p>
        </div>




      </div>
    </div>
  )
}

export default Form
