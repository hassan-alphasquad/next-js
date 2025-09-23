import React from 'react'
import Image from "next/image";
const Paymount = () => {
  return (
    <div>     <div className="flex items-center justify-between mt-5 hover:border-b-2 h-13">
      <h2 className="font-bold text-[20px] ml-9 mb-3"> Payment Details </h2>
      <Image
        className="p-4 mb-3"
        src="/icons/arrow.svg"
        width={50}
        height={50}
        alt="not found"
      />

    </div>

      <div className="flex justify-between items-center h-[15px] w-[1300px]  mt-6 ml-10">
        <p className="font-semibold text-[12px] text-gray-400"> Name </p>
        <p className="font-semibold text-[12px] text-gray-400"> Payment Schedule </p>
        <p className="font-semibold text-[12px] text-gray-400"> Bill Number </p>
        <p className="font-semibold text-[12px] text-gray-400"> Amount Paid </p>
        <p className="font-semibold text-[12px] text-gray-400"> Balance amount </p>
        <p className="font-semibold text-[12px] text-gray-400"> Date </p>
      </div>
      <div className='flex justify-between items-center h-[15px] w-[1550px] mt-10 ml-10'>
        <div className='font-normal text-[14px]'> Karthi </div>
        <div className='font-normal text-[14px]'> First </div>
        <div className='font-normal text-[14px] ml-20'> 00012223 </div>
        <div className='font-normal text-[14px] ml-3'> INR 35,000 </div>
        <div className='font-normal text-[14px]'> INR 55,000 </div>
        <div className='font-normal text-[14px]'> 08-Dec, 2021 </div>
        <Image className='p-3' src="/icons/eye.svg" height={50} width={50} alt='image' />
      </div>
    </div>
  )
}

export default Paymount