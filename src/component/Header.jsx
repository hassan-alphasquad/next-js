import React from 'react'
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div id="header" className=" items-center h-16">
        <header className='flex items-center'>
          <Image className="p-4 ml-4" src="/icons/back.svg" width={50} height={50} alt="image not found" />
          <input className="rounded-lg ml-auto h-9 border border-zinc-300 outline-0 placeholder:text-zinc-300 " type="Search" name="search" id="search" placeholder="Search..." > </input>
          <div>
            <Image className="p-4 ml-auto" src="/icons/bell.svg" width={50} height={50} alt=" image not found " />
          </div>
        </header>
      </div>
    </div>
  )
}

export default Header
