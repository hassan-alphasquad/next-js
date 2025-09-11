import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { TbFileSettings } from "react-icons/tb";
import { PiStudentLight } from "react-icons/pi";
import { SiCoursera } from "react-icons/si";
import { MdOutlinePayments } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
 import { IoCaretBackCircleOutline } from "react-icons/io5";
 import { FaRegBell } from "react-icons/fa";
 import { GoSearch } from "react-icons/go";
const Sidebar = () => {
  return (
    <div>
    <div className=' fixed flex flex-col text-center w-[270px] h-[950px] overflow-y-hidden bg-[rgba(242,234,225,1)]'>
      <div className='flex h-7 w-[0px] mt-[-22] relative text-center top-[41px] ml-[60PX] border-3 border-amber-300 bg-yellow-400  sm:h-6 sm:ml-[31px]'></div>
   <h1 className='ml-[19px] mt-[11px] text-xl font-extrabold leading-[100%] sm:text-[19px] sm:mt-[20px]'>CRUD OPERATIONS</h1>  
      <div className="flex flex-col mx-auto mt-[65px] w-[140px] h-[196px] ">
  <img className="w-[130px] h-[128px] ml-[6px] rounded-full mt-[1px] bg-amber-200" src="" alt="" />
    <h2 className="text-[17px] font-bold mt-4">Karthi Madesh</h2>
    <p className=" text-[15px] mt-1">Admin</p>
      </div>
      <ul className="flex flex-col mx-auto mt-[120px] w-[193px] h-[497px] bg-amber-60">
     <li className="flex items-center gap-2 px-11 py-4 bg-yellow-500 rounded-md h-11 cursor-pointer">
      <HiOutlineHome className="h-5 w-5" />
      <img src="" alt="" srcset="" />
      <span className="font-semibold">Home</span>
    </li>
     <li className="flex items-center gap-2 px-11 py-4  cursor-pointer">
      <SiCoursera className="h-5 w-5"/>
      <span className="font-semibold">Course</span>
    </li>
     <li className="flex items-center gap-2 px-11 py-4  cursor-pointer">
      <PiStudentLight className="h-5 w-5" />
      <span className="font-semibold">Students</span>
    </li>
     <li className="flex items-center gap-2 px-11 py-4  cursor-pointer">
      <MdOutlinePayments className="h-5 w-5" />
      <span className="font-semibold">Payment</span>
    </li>
     <li className="flex items-center gap-2 px-11 py-4  cursor-pointer">
      <HiOutlineDocumentReport className="h-5 w-5" />
      <span className="font-semibold">Report</span>
    </li>
     <li className="flex items-center gap-2 px-11 py-4 cursor-pointer">
      <TbFileSettings className="h-5 w-5" />
      <span className="font-semibold">Settings</span>
    </li>
  
       <li className="flex flex-row-reverse px-13 py-35">
       <TbLogout className="h-5 w-5 ml-2"/>
  <span className="font-semibold">Logout</span>
       </li>
      </ul>
      </div>
      <header className="flex flex-row  items-center bg-amber-300 h-[60px] ml-[270px]">

        <IoCaretBackCircleOutline className="ml-4 text-xl text-gray-300" />
        <input className=" w-[212px] rounded-[8px] ml-330 h-[37px] border border-zinc-300 placeholder:text-zinc-300" type="Search" id="search" placeholder="Search"  />
        <FaRegBell className="text-2xl ml-6 text-gray-300"/>
      </header>

   <section className="grid grid-flow-col justify-evenly auto-cols-max gap-4 ml-[270px] mt-12">
  <div className="h-[167px] w-[255px] bg-amber-500"></div>
  <div className="h-[157px] w-[255px] bg-amber-500"></div>
  <div className="h-[157px] w-[255px] bg-amber-500"></div>
  <div className="h-[157px] w-[255px] bg-amber-500"></div>
</section>

      </div>
  )
}

export default Sidebar
