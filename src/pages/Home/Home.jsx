import React from "react"
import usePageTitle from "../../hook/usePageTitle"
import Banner from "../../components/Banner"
import HowWorks from "../../components/HowWorks"
import OurMoto from "../../components/OurMoto"

const Home = () => {
    usePageTitle("Home")

    return (
        <div className="bg-base-200">
            <Banner></Banner>
            <HowWorks></HowWorks>
            <OurMoto></OurMoto>
        </div>
    )
}

export default Home