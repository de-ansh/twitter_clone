import Image  from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
const FeedCard:React.FC = () => {
    return (
        <div className="gap-3 border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
            <div className="grid grid-cols-12">
            <div className="col-span-1"><Image src="https://avatars.githubusercontent.com/u/72343696?v=4" alt="user- image" height={50} width={50}/></div>
            <div className="col-span-11">
        
                <h5>Ansh Mishra</h5>
                <p>Wow great point to consider.. usually  people  focus on 1st P which is  Paisa .. and they even take a role which is similar  or a level Lower to the current one.</p>
                
                <div className=" flex justify-between mt-5 text-xl items-center p-2 w-[90%] " >
                   <div>
                   <BiMessageRounded/>
                   </div>
                   <div>
                    <FaRetweet/>
                   </div>
                   <div>
                    <AiOutlineHeart/>
                   </div>
                   <div>
                    <BiUpload/>
                   </div>
                </div>
           
                
              
                

            </div>
    </div> 
        </div> );
}
 
export default FeedCard;
