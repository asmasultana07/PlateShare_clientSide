import React from "react"
import MyContainer from "./MyContainer"

const HowWorks = () => {

    return (
        <div>
            <MyContainer className="">

                    <div className="p-10 sm:p-20 text-center">
                        <div>
                            <h2 className="font-bold text-bb text-4xl md:text-5xl my-10"> How It Works</h2>
                            <p className="text-pp text-[18px] md:text-xl"> From posting surplus food to collecting it safely, PlateShare makes food sharing easy and impactful.
                            </p>
                        </div>
                        {/* works card */}
                        <div className="grid md:grid-cols-3 md:gap-12 ">
                            <div className="bg-gray-200 rounded-2xl shadow-md p-8 my-10 ">
                                <p className="font-bold text-3xl text-pp"> 01</p>
                                <p className="text-[50px]">🍽️</p>
                                <p className="text-[28px] font-semibold my-3">Post Food</p>
                                <p className="text-pp font-semibold">Share details about surplus food including quantity, location, and availability</p>
                            </div>
                            <div className="bg-gray-200 rounded-2xl shadow-md p-8 my-10 ">
                                <p className="font-bold text-3xl text-pp"> 02</p>
                                <p className="text-[50px]">🔎</p>
                                <p className="text-[28px] font-semibold my-3">Find Food</p>
                                <p className="text-pp font-semibold">Browse available food posts nearby and choose what you need</p>
                            </div>
                            <div className="bg-gray-200 rounded-2xl shadow-md p-8 my-10 ">
                                <p className="font-bold text-3xl text-pp"> 03</p>
                                <p className="text-[50px]">🍱</p>
                                <p className="text-[28px] font-semibold my-3">Collect Food</p>
                                <p className="text-pp font-semibold">Get the food safely from the donor and help reduce food waste</p>
                            </div>
                        </div>
                    </div>

            </MyContainer>
        </div>
    )
}

export default HowWorks