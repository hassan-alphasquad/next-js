import React from 'react'
import Sidebar2 from '@/component/Sidebar2'
import Header from '@/component/Header'
import Modal from '@/component/Modal'
const page = () => {
  return (

    <div className="flex h-dvh">
      <Sidebar2 />
      <div id="right side" className=" w-screen">
        <Header />
        <Modal />
      </div>
    </div>

  )
}

export default page

