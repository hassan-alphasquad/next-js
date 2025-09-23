import Sidebar from "@/component/Sidebar";
import Header from "@/component/Header";
import Content from "@/component/Content";
const page = () =>{
    return (
  <div className="flex overflow-y-hidden">
  <Sidebar />
    <div id="right side" className=" w-screen">
      <Header/>
   <Content/>
    </div>
  </div>
    )
};

export default page