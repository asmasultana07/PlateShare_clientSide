import { Link } from "react-router";
import bannerImage1 from "../assets/banner-2.png"
import bannerImage2 from "../assets/banner-3.webp"
import bannerImage3 from "../assets/banner-4.webp"
import bannerImage4 from "../assets/banner-5.webp"
import bannerImage5 from "../assets/banner-6.webp"
import MyContainer from "./MyContainer";
import { useEffect, useState } from "react";


const Banner = () => {

    const bannerImages = [bannerImage1, bannerImage2, bannerImage3, bannerImage4, bannerImage5];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % bannerImages.length)
        }, 2000);
        return () => clearInterval(interval);
    }, [bannerImages.length]);

    return (
        <section className="relative bg-cover bg-center min-h-screen transition-all duration-2000" style={{ backgroundImage: `url(${bannerImages[current]})` }}>
            <div className="absolute inset-0 bg-black/50">
                <MyContainer className="relative z-10 p-20 text-center text-gray-200 flex flex-col gap-6 ">

                    <div>
                        <h2 className="font-bold text-4xl md:text-7xl text-green-200  my-10"> A Plate of Food,
                            <br/> <span className="block sm:mt-4">A Deed of Sadaqah</span></h2>
                        <p className="sm:px-20 text-white text-xl md:text-2xl"> To build a society where no one goes hungry, food is not wasted, and every act of sharing is a source of reward (Sadaqah Jariyah) in the sight of Allah.
                            Reduce food waste as encouraged in Islam
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center md:mt-6">
                        <Link to="/available-foods" className="donate-btn">View All Foods</Link>
                        <Link to="/add-foods" className="donate-btn">Donate Food</Link>
                    </div>
                </MyContainer>
            </div>
        </section>

    )
}

export default Banner;
