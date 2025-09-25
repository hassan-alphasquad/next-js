import React from 'react'
import Image from "next/image";
import Link from 'next/link';
const Sidebar3 = () => {
  return (
    <div className='flex flex-4 flex-col w-3xs bg-[rgba(242,234,225,1)] h-screen'>
      <div id='heading' className='col-span-1 flex flex-row h-15'>
        <div className='h-7 mt-5 text-center ml-3.5 border-3 border-amber-300 bg-yellow-400'>
        </div>
        <h1 className='ml-3 mt-5 text-xl font-extrabold'> CRUD OPERATIONS </h1>
      </div>
      <div id='img' className='col-span-1 h-48 w-36  flex flex-col mx-auto text-center mt-10 cursor-pointer'>
        <Image className="w-32 h-32 ml-1.5 rounded-full mt-0.5" src="/images/photo.svg" width={50} height={50} alt="image not found" />
        <h2 className="text-xl font-bold mt-4">Hassan Ali</h2>
        <p className=" text-lg cursor-pointer text-yellow-400 mt-1"> Admin </p>
      </div>


      <div id='navigation' className='col-span-1 h-96 w-48 flex flex-col mx-auto mt-15 bg-amber-60'>
        <li className="flex items-center gap-2 px-12 py-5 h-11 cursor-pointer">
          <Image className='' src="/icons/home.svg" height={50} width={50} alt='' />
          <Link href="/dashboard" className="font-normal text-lg mt-1 mx-2"> Home </Link>
        </li>

        <li className="flex items-center gap-2 px-12 py-4  cursor-pointer">
          <Image src="/icons/course.svg" height={50} width={50} alt='' />
          <span className="font-normal text-lg mx-3"> Course </span>
        </li>

        <li className="flex items-center gap-2 px-11 py-4  cursor-pointer">
          <Image src="/icons/student.svg" height={50} width={50} alt='' />

          <Link href="/student" className="font-normal text-lg mx-1"> Student </Link>
        </li>

        <li className="flex items-center gap-2 px-11 py-4  bg-yellow-500 rounded-md h-11 cursor-pointer">
          <Image src="/icons/payment.svg" height={50} width={50} alt='' />

          <span className="font-normal  text-lg mx-2"> Payment </span>
        </li>

        <li className="flex items-center gap-2 px-11 py-4  cursor-pointer">
          <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_17_18)">
              <path d="M4.60417 10.625H4.0625C3.91354 10.625 3.79167 10.7445 3.79167 10.8906V14.0781C3.79167 14.2242 3.91354 14.3438 4.0625 14.3438H4.60417C4.75313 14.3438 4.875 14.2242 4.875 14.0781V10.8906C4.875 10.7445 4.75313 10.625 4.60417 10.625ZM6.77083 7.4375H6.22917C6.08021 7.4375 5.95833 7.55703 5.95833 7.70312V14.0781C5.95833 14.2242 6.08021 14.3438 6.22917 14.3438H6.77083C6.91979 14.3438 7.04167 14.2242 7.04167 14.0781V7.70312C7.04167 7.55703 6.91979 7.4375 6.77083 7.4375ZM8.125 9.82812V14.0781C8.125 14.2242 8.24688 14.3438 8.39583 14.3438H8.9375C9.08646 14.3438 9.20833 14.2242 9.20833 14.0781V9.82812C9.20833 9.68203 9.08646 9.5625 8.9375 9.5625H8.39583C8.24688 9.5625 8.125 9.68203 8.125 9.82812ZM12.5227 3.25324L9.68297 0.468164C9.37828 0.169336 8.96526 0 8.53565 0H1.62466C0.727865 0.00332031 0 0.717188 0 1.59674V15.4066C0 16.2861 0.727865 17 1.62466 17H11.3753C12.2721 17 13 16.2861 13 15.4066V4.38182C13 3.96047 12.8273 3.55207 12.5227 3.25324ZM8.66768 1.08209C8.76247 1.10533 8.84711 1.15182 8.9182 1.22154L11.7579 4.00662C11.829 4.07635 11.8764 4.15936 11.9001 4.25232H8.66768V1.08209ZM11.917 15.4066C11.917 15.6988 11.6733 15.9378 11.3753 15.9378H1.62466C1.32674 15.9378 1.08299 15.6988 1.08299 15.4066V1.59674C1.08299 1.30455 1.32674 1.0625 1.62466 1.0625H7.58435V4.51795C7.58435 4.95955 7.94659 5.3125 8.39685 5.3125H11.917V15.4066Z" fill="black" /></g>
            <defs><clipPath id="clip0_17_18"><rect width="13" height="17" fill="white" /></clipPath></defs></svg>
          <span className="font-normal text-lg mx-2"> Report </span>
        </li>

        <li className="flex items-center gap-2 px-11 py-4 cursor-pointer">
          <Image src="/icons/setting.svg" height={50} width={50} alt='' />

          <span className="font-normal text-lg mx-1"> Settings </span>
        </li>
      </div>
      <div id='logout' className='col-span-1 mt-auto w-3xs h-20 flex justify-center items-center flex-row-reverse cursor-pointer'>
        <svg className=" mt-1 ml-3" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.3125 7.2084C5.3125 6.91621 5.55156 6.67715 5.84375 6.67715H10.625V3.55937C10.625 3.32363 10.9105 3.2041 11.0766 3.37012L15.7781 8.12148C15.9873 8.33066 15.9873 8.66602 15.7781 8.8752L11.0766 13.6266C10.9105 13.7926 10.625 13.6764 10.625 13.4373V10.3195H5.84375C5.55156 10.3195 5.3125 10.0805 5.3125 9.78828V7.2084ZM4.25 7.2084V9.78828C4.25 10.6682 4.96387 11.382 5.84375 11.382H9.5625V13.4373C9.5625 14.616 10.9902 15.2137 11.827 14.377L16.5318 9.62891C17.1561 9.00469 17.1561 7.99531 16.5318 7.37109L11.827 2.61973C10.9936 1.78633 9.5625 2.37734 9.5625 3.55937V5.61465H5.84375C4.96387 5.61465 4.25 6.33184 4.25 7.2084ZM0 3.71875V13.2812C0 14.1611 0.713867 14.875 1.59375 14.875H5.97656C6.1957 14.875 6.375 14.6957 6.375 14.4766V14.2109C6.375 13.9918 6.1957 13.8125 5.97656 13.8125H1.59375C1.30156 13.8125 1.0625 13.5734 1.0625 13.2812V3.71875C1.0625 3.42656 1.30156 3.1875 1.59375 3.1875H5.97656C6.1957 3.1875 6.375 3.0082 6.375 2.78906V2.52344C6.375 2.3043 6.1957 2.125 5.97656 2.125H1.59375C0.713867 2.125 0 2.83887 0 3.71875Z" fill="black" />
        </svg>
        <span className="font-semibold"> Logout </span>
      </div>
    </div>
  )
}

export default Sidebar3