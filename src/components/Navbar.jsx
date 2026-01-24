import React from "react"
import MyContainer from "./MyContainer"
import { Link, NavLink } from "react-router"
import logoImage from "../assets/logo.png"
const Navbar = () => {

    const getNavActive = ({ isActive }) => {
        const navLink = "text-green-700 text-[16px] sm:text-[20px] font-semibold active-btn hover:text-[#4feb59]  bg-clip-text text-transparent";
        const navLinkActive = "text-green-700 text-[16px] sm:text-[20px] font-semibold";

        return isActive ? navLink : navLinkActive;
    };

    return (
        <nav>
            <MyContainer>
                <div className="navbar bg-base-100 shadow-sm ">
                    <div className="navbar-start">

                        <Link to="/" >
                            <div className="flex justify-center items-center hover:scale-105">
                                <img src={logoImage} alt="" className="w-12 h-12" />
                                <p className="btn border-none p-1 text-[20px] md:text-[28px]  bg-gradient-to-r from-[#4feb59] to-[#315805] bg-clip-text text-transparent">
                                    PlateShare
                                </p>
                            </div>
                        </Link>

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="flex gap-6">
                            <li> <NavLink to="/" className={getNavActive}>  Home </NavLink>
                            </li>
                            <li>  <NavLink to="/available-foods" className={getNavActive}>  AvailableFoods </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="navbar-end  gap-3">
                        <div className="navbar-end  hidden lg:flex">
                            <a href="" target="_blank"
                                className="my-btn">
                                Register</a>
                            <a href="" target="_blank"
                                className="my-btn ml-3">
                                Login</a>
                        </div>

                    

                        {/* // small device */}
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow  "
                            >
                                <li>
                                    <NavLink to="/" className={getNavActive}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/available-foods" className={getNavActive}>
                                        Available Foods
                                    </NavLink>
                                </li>
                                {/* <li>
               <NavLink to="/installation" className={getNavActive}> 
                      Installation
                </NavLink>
              </li> */}
                            </ul>
                        </div>

                    </div>
                </div>
            </MyContainer>
        </nav>
    )
}

export default Navbar