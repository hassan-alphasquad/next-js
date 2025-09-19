import React from 'react'
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div id="header" className=" items-center h-[60px]">
        <header className='flex items-center h-[60px]'>
          <Image className="p-4 ml-4" src="/icons/back.svg" width={50} height={50} alt="image not found" />
          <input className=" w-[212px] rounded-[8px] ml-315 h-[37px] border border-zinc-300 outline-0 placeholder:text-zinc-300 " type="Search" name="search" id="search" placeholder="Search..." ></input>
          <Image className="p-4 ml-5" src="/icons/bell.svg" width={50} height={50} alt="image not found" />
        </header>
      </div>
    </div>
  )
}

export default Header
