import React from "react";
import { Link } from "react-router";
import usePageTitle from "../../hook/usePageTitle";

const Login = () => {
    usePageTitle("Login")


  return (
      <div className="hero bg-base-200 min-h-screen">
        
          <div className="hero-content flex-col lg:flex-row ">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl font-bold">Welcome Back!</h1>
              <p className="md:py-2 text-lg text-pp">
                Let’s keep sharing goodness.
              </p>
            </div>
            <div className="p-4 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body">
                  <div>
                    <label className="label font-bold text-lg">Email</label>
                    <input type="email" className="input input-bordered w-full outline-none" placeholder="Email" />
                  </div>
                  <div>
                    <label className="label font-bold text-lg">Password</label>
                  <input type="password"  className="input input-bordered w-full outline-none"  placeholder="Password"  />
                  {/* <div> <a className="link link-hover">Forgot password?</a> </div> */}
                  </div>
                  <button type="submit" className="active-btn mt-6">Login</button>
                    <p className="text-center font-semibold"> or </p>
                  <button className="my-btn">Continue with Google  </button>
                  <p>Don't Have an Account? 
                    <Link to="/registration"><span className="font-semibold text-green-600 "> Register</span></Link>
                  </p>
              </form>
              
            </div>
          </div>
        
      </div>
 
  );
};

export default Login;
