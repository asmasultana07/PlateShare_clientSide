import React from "react";
import MyContainer from "./MyContainer";

const OurMoto = () => {
  return (
    <div>
      <MyContainer className="">
        <div className="flex flex-col justify-center items-center text-center gap-6 p-10 sm:p-20">
          <h2 className="font-bold text-bb text-4xl md:text-5xl">
            {" "}
            Our Mission
          </h2>
          <p className="w-90  bg-green-200 text-green-600 text-[17px] font-semibold rounded-md">
            Turning surplus food into shared hope
          </p>
          <p className="md:px-75 text-pp text-[16px] md:text-xl">
            Through our community-driven platform, we’ve helped reduce food
            waste while supporting people in need. Every shared meal strengthens
            local connections, promotes sustainability, and creates real
            change—one basket at a time.
          </p>
          <div className="card bg-base-100 w-110 shadow-lg card-body ">
            <h2 className="card-title text-[20px]">What drives our platform</h2>
            <ul className="place-items-start text-[18px]">
              <li><span className="inline-block bg-green-200 rounded-lg p-1 mt-2">♻️</span>  Reduce food waste</li>
              <li><span className="inline-block bg-green-200 rounded-lg p-1 mt-2">🤝</span>  Support local communities</li>
              <li><span className="inline-block bg-green-200 rounded-lg p-1 mt-2">🍽️</span>  Share surplus food responsibly</li>
              <li><span className="inline-block bg-green-200 rounded-lg px-1.5 py-1 mt-2">💡 </span> Promote sustainability</li>
            </ul>
          </div>
          
        </div>
        <div></div>
      </MyContainer>
    </div>
  );
};

export default OurMoto;
