import React from "react";
import MyContainer from "../../components/MyContainer";

const Login = () => {
  return (
      <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Welcome Back to PlateShare</h1>
              <p className="py-6 text-lg text-pp">
                Back to sharing goodness.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label font-bold text-lg">Email</label>
                  <input type="email" className="input" placeholder="Email" />
                  <label className="label font-bold text-lg">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  {/* <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div> */}
                  <button className="my-btn">Login</button>
                </fieldset>
              </div>
            </div>
          </div>
        
      </div>
 
  );
};

export default Login;
