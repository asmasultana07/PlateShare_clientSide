import React from "react";
import MyContainer from "../components/MyContainer"
import { Link } from "react-router";
import iconView from "../assets/icon-view.png"

const FoodCard = () => {
  // const {_id, food_name, food_image, food_quantity,pickup_location, expire_date, user_id, food_status} = food;
  
    return (
      <MyContainer>
          <div className="grid bg-[#cef8d5e6] border-2 group overflow-hidden border-green-600 transition-transform hover:scale-[1.02] hover:shadow-[0_0_20px_lightblue] rounded-2xl">
              <div className="relative h-50 w-full overflow-hidden">
                <img src="" alt="food_name" className="w-full h-full rounded-lg object-cover "/>
                <div className="absolute inset-0  flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to="" className="w-full ">
                      <button className=" inline-flex justify-center items-center gap-2 w-full card-btn
                                    ">View Details
                        <img src={iconView} className="w-5 h-5" alt="icon"/>
                      </button>
                    </Link>
                </div>    
              </div>
              <div className="grid grid-cols-2 gap-2 p-4">
                    <h3 className=" text-green-800 text-2xl font-semibold">Title</h3>
                    <p><span className="inline-block bg-green-200 border-2 rounded-full p-1 mt-2">♻️</span>  quantity-6 </p>
                    <p> location</p>
                    <p> expiredate-date</p>      
              </div>
              <div className="">
                <p> Donar name </p>
              </div>
          </div>

      </MyContainer>
  
  );
};

export default FoodCard;