import Image from "next/image";
import Link from "next/link";

const Sidebar2 = () => {
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
        <li className="flex items-center gap-2 px-11 py-4  bg-yellow-500 rounded-md h-11 cursor-pointer">
          <Image src="/icons/student.svg" height={50} width={50} alt='' />

          <Link href="/student" className="font-normal text-lg mx-1"> Student </Link>
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

export default Sidebar2