import React from "react"
import { Link } from "react-router";
import usePageTitle from "../../hook/usePageTitle";

const Register = () => {

 usePageTitle("Register")
  return (
      <div className="hero bg-base-200 min-h-screen">
         <div className="hero-content flex-col lg:flex-row ">
            <div className="card bg-base-100 shadow-2xl">              
              <form className="card-body"> 
                  <div>
                    <label className="label font-bold text-lg">Name</label>
                    <input type="name" className="input input-bordered  outline-none" placeholder="Your Full Name" required />
                  </div>
                  <div>
                    <label className="label font-bold text-lg">Email</label>
                    <input type="email" className="input input-bordered outline-none" placeholder="Your Email" required/>
                  </div>
                  <div>
                    <label className="label font-bold text-lg">Password</label>
                  <input type="password"  className="input input-bordered  outline-none"  placeholder="Your Password" required />
                  </div>
                  <div>
                    <label className="label font-bold text-lg">Photo-URL</label>
                  <input type="photo"  className="input input-bordered  outline-none"  placeholder="Your Photo Url"  required/>
                  </div>
                  
                  <button type="submit" className="active-btn mt-4">Register</button>
                    <p className="text-center font-semibold"> or </p>
                  <button className="my-btn">Continue with Google  </button>
                  <p>Already have an account? 
                    <Link to="/registration"><span className="font-semibold text-green-600 "> Login</span></Link>
                  </p>
              </form>
              
            </div>
          </div>
        
      </div>
 
  );
}

export default Register