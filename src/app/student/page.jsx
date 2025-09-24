import React from 'react'
import Sidebar2 from '@/component/Sidebar2'
import Header from '@/component/Header'
import Main from '@/component/Main'
const page = () => {
  return (
    
  <div className="flex overflow-y-hidden">
  <Sidebar2 />
    <div id="right side" className=" w-screen">
      <Header/>
      <Main/>
    </div>
  </div>

  )
}

export default page

