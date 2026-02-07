import React from "react"
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router";
import errorImage from '../../assets/error-404.png'

const ErrorPage = () => {
return (
        <>
        <Navbar />
        <section className="flex flex-col justify-center items-center p-20  lg:p-30">
            <img src={errorImage} alt="moveImage" className=" animate-moveImage "/>
            <h1 className=" text-#[001931] text-[28px] md:text-[48px] mt-6">
                Oops, page not found!
            </h1>
            <p className="text-[#627382] text-[20px]">The page you are looking for is not available.</p>
            <button className="mt-6 text-5xl md:text-7xl active-btn"> 
            <Link to="/"  > Back To Home </Link>
            </button>
        </section>
        <Footer />

        </>
    )
}

export default ErrorPage;