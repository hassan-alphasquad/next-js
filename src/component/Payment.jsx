import React from 'react'
import Image from "next/image";
const Paymount = () => {
  return (
    <div>     <div className="flex items-center justify-between mt-5 hover:border-b-2 h-13">
      <h2 className="font-bold text-lg ml-9 mb-3"> Payment Details </h2>
      <Image
        className="p-4 mb-3"
        src="/icons/arrow.svg"
        width={50}
        height={50}
        alt="not found"
      />

    </div>

      <div className="flex justify-evenly items-center h-[15px]  mt-6 ">
        <p className="font-semibold text-sm  text-gray-400">Name </p>
        <p className="font-semibold text-sm text-gray-400">Payment Schedule </p>
        <p className="font-semibold text-sm text-gray-400">Bill Number </p>
        <p className="font-semibold text-sm text-gray-400">Amount Paid </p>
        <p className="font-semibold text-sm text-gray-400">Balance amount </p>
        <p className="font-semibold text-sm text-gray-400">Date </p>
      </div>
      <div className='flex justify-around items-center h-[15px] mt-10'>
        <div className='font-normal text-sm'>Karthi </div>
        <div className='font-normal text-sm'>First </div>
        <div className='font-normal text-sm'>00012223 </div>
        <div className='font-normal text-sm'>INR 35,000 </div>
        <div className='font-normal text-sm'>INR 55,000 </div>
        <div className='font-normal text-sm'>08-Dec, 2021 </div>
        <Image className='p-3' src="/icons/eye.svg" height={50} width={50} alt='image' />
      </div>
    </div>
  )
}

export default Paymount