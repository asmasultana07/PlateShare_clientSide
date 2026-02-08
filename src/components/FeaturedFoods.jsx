import React from "react"
import { Link } from "react-router";
import LoadingSpinner from "./LoadingSpinner";
import FoodCard from "./FoodCard";

const FeaturedFood = () => {

    // const { loading } = useApps();
    // const showFood = apps.slice(0,8); 

    // if (loading) return (  <LoadingSpinner />);

    return ( 
         <div className="bg-[#f3f3f3] p-10 md:p-20">
        <div className="text-center">
            <h1 className="text-bb font-bold text-4xl md:text-5xl">Feature Foods</h1>
            <p className="text-pp text-xl mt-5">Explore All nutritious meals shared by generous donors in your area. </p>
        </div>
        {/* cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 ">
           <FoodCard></FoodCard>
            {/* { */}
                {/* FoodCard.map((food) => ( */}
                    {/* <FoodCard key={food._id} food={food}> </FoodCard> */}
                {/* )) */}
            {/* } */}
        </div>
        <div className="flex justify-center items-center mt-12 ">
            <Link to="/available-foods" className="active-btn  ">
            Show all</Link>
        </div>
    </div>
    )
}

export default FeaturedFood