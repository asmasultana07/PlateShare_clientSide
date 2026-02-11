import React from "react";
import MyContainer from "../components/MyContainer"
import { Link } from "react-router";
import { FiUsers } from "react-icons/fi";
import { Calendar, ExternalLink, MapPinned } from "lucide-react";

const FoodCard = () => {
  // const {_id, food_name, food_image, food_quantity,pickup_location, expire_date, user_id, food_status} = food;
  
    return (
      <MyContainer>
        <div className="grid bg-[#cef8d5e6] group overflow-hidden  transition-transform hover:scale-[1.02] hover:shadow-[0_0_20px_lightblue] rounded-2xl">
            <div className="relative h-50 w-full overflow-hidden">
              <img src="" alt="food_name" className="w-full h-full rounded-lg object-cover "/>
              <div className="absolute inset-0  flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to="" className="w-full ">
                      <button className=" inline-flex justify-center items-center gap-2 w-full card-btn
                                    ">View Details 
                                    <ExternalLink color="#ffffff" className="w-5 h-5" />
                      </button>
                  </Link>
              </div>    
            </div>
            <div className="flex flex-col gap-2 p-4">
                    <div  className="flex justify-between items-center">
                      <h3 className=" text-green-800 text-2xl font-semibold">Title</h3>
                      <p className="font-bold text-green-800 flex gap-2">
                        <span className="inline-block bg-green-200 border-2 border-green-800 rounded p-1">
                        <FiUsers className="w-4 h-4" /></span> quantity-6 </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-pp flex items-center gap-2">
                        <MapPinned color="#157b15" className="w-5 h-5" /> location</p>
                      <p className="font-semibold text-pp flex items-center gap-2 p-1"> 
                      <Calendar color="#157b15" className="w-5 h-5" />Exp:</p> 
                    </div>     
            </div>
              <hr />
            <div className="p-2 ml-2 flex items-center gap-2">
                <img src="" alt="" />
                <p className="font-semibold text-bb"> Donar name </p>
            </div>
        </div>

      </MyContainer>
  
  );
};

export default FoodCard;