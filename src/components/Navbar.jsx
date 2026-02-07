import React, { useContext } from "react";
import MyContainer from "./MyContainer";
import { Link, NavLink } from "react-router";
import logoImage from "../assets/logo.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, loading } = useContext(AuthContext);

  const getNavActive = ({ isActive }) => {
    const navLink = "text-green-700 text-[20px] font-semibold active-btn";
    const navLinkActive = "text-green-700 text-[20px] font-semibold";

    return isActive ? navLink : navLinkActive;
  };

  return (
    <nav>
      <MyContainer>
        <div className="navbar bg-base-100 shadow-sm ">
          <div className="navbar-start">
            <Link to="/">
              <div className="flex justify-center items-center hover:scale-105">
                <img src={logoImage} alt="" className="w-12 h-12" />
                <p className="btn border-none p-1 text-[24px] md:text-[28px]  bg-gradient-to-r from-[#4feb59] to-[#315805] bg-clip-text text-transparent">
                  PlateShare
                </p>
              </div>
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center gap-6">
              <li>
                {" "}
                <NavLink to="/" className={getNavActive}>
                  {" "}
                  Home{" "}
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to="/available-foods" className={getNavActive}>
                  {" "}
                  Foods{" "}
                </NavLink>{" "}
              </li>
            </ul>
          </div>

          <div className="navbar-end gap-3">
            {loading ? (
              <LoadingSpinner />
            ) : user ? (
              <div className="navbar-end  hidden lg:flex">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                      <img
                        alt="Profile picture"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-[#eef5ed]  items-start rounded-box z-1 my-2 w-52 p-2 "
                  >
                    <li>  <NavLink to="/" className="my-btn">  Profile  </NavLink>  </li>
                    <li> <NavLink to="/create-food" className="my-btn">  Add Food </NavLink> </li>
                    <li> <NavLink to="/manage-food" className="my-btn">  Manage My Foods </NavLink>  </li>
                    <li> <NavLink to="/food-request" className="my-btn">  My Food Requests  </NavLink>  </li>
                    <li className="my-btn"> Logout </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="navbar-end  hidden lg:flex">
                <Link to={"/registration"} className="my-btn">
                  {" "}
                  Register
                </Link>
                <Link to={"/login"} className="my-btn ml-3">
                  {" "}
                  Login
                </Link>
              </div>
            )}

            {/* // small device */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-5 w-5 stroke-current"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-[#eef5ed]  items-start rounded-box z-1 my-2 w-52 p-2 "
              >
                <li>  <NavLink to="/" className="my-btn">  Profile  </NavLink>  </li>
                    <li> <NavLink to="/create-food" className="my-btn">  Add Food </NavLink> </li>
                    <li> <NavLink to="/manage-food" className="my-btn">  Manage My Foods </NavLink>  </li>
                    <li> <NavLink to="/food-request" className="my-btn">  My Food Requests  </NavLink>  </li>
                    <li className="my-btn"> Logout </li>
                  </ul>
            </div>
          </div>
        </div>
      </MyContainer>
    </nav>
  );
};

export default Navbar;
