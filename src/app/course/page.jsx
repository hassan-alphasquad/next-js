import React from 'react'
import Sidebar3 from '@/component/Sidebar3'
import Header from '@/component/Header'
import Payment from '@/component/Payment'
const page = () => {
  return (
    <div>
        <div className="flex overflow-y-hidden">
  <Sidebar3/>
    <div id="right side" className=" w-screen">
      <Header/>
      <Payment/>
    </div>
  </div>

    </div>
  )
}

export default page
