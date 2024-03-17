import Image from "next/image";

import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import FeedCard from "@/components/FeedCard";
import { SlOptions } from "react-icons/sl";



interface TwitterSidebarButton{
  title: string
  icon: React.ReactNode
}

const sideBarMenuItems:TwitterSidebarButton[]= [
  {
    title: "Home",
    icon: <BiHomeCircle />
  },
  {
    title: "Explore",
    icon: <BiHash/>
  },
  {
    title: "Notification",
    icon:<BsBell/>
  },
  {
    title: "Messages",
    icon: <BsEnvelope/>
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark/>
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney/>
  },
  {
    title: "Profile",
    icon: <BiUser/>
  },
  {
    title: "More options",
    icon: <SlOptions/>
  }

] 
export default function Home() {
  return (
    <div >
      <div className=" grid grid-cols-12 h-screen w-screen px-44">
        <div className="pt-2 px-4  col-span-3 ">
          <div className=" text-xl hover:bg-gray-600 rounded-full p-4 h-fit cursor-pointer transition-all px-4 w-fit">       <BsTwitter /></div>
          <div className="mt-4 text-xl  pr-4">
            <ul>
            {sideBarMenuItems.map(item=> <li className="flex justify-start items-center gap-4 hover:bg-gray-600 rounded-full px-5 py-2 w-fit cursor-pointer mt-2 " key={item.title}>
              <span>{item.icon}</span><span>{item.title}</span>
            </li>)}
            </ul>
           <div className="mt-1 py-4">
           <button className="bg-[#1d9bf0] py-2 rounded-full px-2 font-semibold text-lg w-full  "> Tweet</button>
           </div>
          </div>
        </div>
        <div className="col-span-6 border-r-[0.5px] border-l-[0.5px] h-screen overflow-scroll  border-gray-600">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className="col-span-3"></div>
  
</div>
    </div>

  );
}
