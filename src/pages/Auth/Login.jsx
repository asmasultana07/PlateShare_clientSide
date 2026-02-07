import React, { useContext, useState } from "react";
import { Link } from "react-router";
import usePageTitle from "../../hook/usePageTitle";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../../Provider/AuthProvider";
import auth from "../../firebase/firebase.config";

const Login = () => {
  usePageTitle("Login");
  
  const { setUser, user } =useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;

    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user)
        })
      .catch((error) => {
        console.log(error);
      })
  }
  console.log(user);

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
          <form onSubmit={handleSubmit} className="card-body">
            <div>
              <label className="label font-bold text-lg">Email</label>
              <input name='email'
                type="email"
                className="input input-bordered w-full outline-none"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="label font-bold text-lg">Password</label>
              <input name= 'password'
                type="password"
                className="input input-bordered w-full outline-none"
                placeholder="Password"
              />
              {/* <div> <a className="link link-hover">Forgot password?</a> </div> */}
            </div>
            <button type="submit" className="active-btn mt-6"> Login  </button>
            <p className="text-center font-semibold"> or </p>
            <button className="my-btn">Continue with Google </button>
            <p>  Don't Have an Account?
              <Link to="/registration">
                <span className="font-semibold text-green-600 "> Register</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
