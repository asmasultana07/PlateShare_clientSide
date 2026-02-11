import React from "react"
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router";
import errorImage from '../../assets/error-404.webp'

const ErrorPage = () => {
return (
        <>
        <Navbar />
        <section className="flex flex-col justify-center items-center p-20  lg:p-30">
            <img src={errorImage} alt="moveImage" className=" animate-moveImage "/>
            
            <button className="mt-2 btn btn-soft btn-primary text-2xl border-none"> 
            <Link to="/"  > Back To Home </Link>
            </button>
        </section>
        <Footer />

        </>
    )
}

export default ErrorPage;