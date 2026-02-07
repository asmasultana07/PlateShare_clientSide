import React from "react"
import { Link } from "react-router";
import LoadingSpinner from "./LoadingSpinner";

const FeaturedFood = () => {

    const { loading } = useApps();
    const showFood = apps.slice(0,8); 

    if (loading) return (  <LoadingSpinner />);

    return (
        
      <div className="bg-[#f3f3f3] p-10 md:p-20">
        <div className="text-center">
            <h1 className="text-bb font-bold text-4xl md:text-5xl">Trending Apps</h1>
            <p className="text-pp text-xl mt-5">Explore All Trending Apps on the Market developed by us</p>
        </div>
        {/* cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 ">
            {
                showApps.map((app) => (
                    <ShowApps key={app.id} app={app}> </ShowApps>
                ))
            }
        </div>
        <div className="flex justify-center items-center mt-12 ">
            <Link to="/available-Foods" className="px-12 py-3 font-semibold  rounded-sm text-white text-[16px]   
                                bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:from-pink-500 hover:to-purple-500">
            Show all</Link>
        </div>
    </div>
    )
}

export default FeaturedFood