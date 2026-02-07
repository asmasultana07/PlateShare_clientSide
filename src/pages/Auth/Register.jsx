import React, { useContext } from "react";
import { Link } from "react-router";
import usePageTitle from "../../hook/usePageTitle";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Register = () => {
  usePageTitle("Register");
  const { registerWithEmailPassword } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;

    registerWithEmailPassword(email, pass)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name, photoURL: photoUrl,
        })
          .then(() => {
           console.log(userCredential.user);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="p-8 card bg-base-100 shadow-2xl ">
          <form onSubmit={handleSubmit} className="card-body ">
            <div className=" lg:w-90">
              <label className="label font-bold text-lg">Name</label>
              <input
                name="name"
                type="text"
                className="input input-bordered  outline-none w-full"
                placeholder="Full Name"
                
              />
            </div>
            <div className=" lg:w-90">
              <label className="label font-bold text-lg">Email</label>
              <input
                name="email"
                type="email"
                className="input input-bordered outline-none w-full"
                placeholder="example@gmail.com"
                
              />
            </div>
            <div className=" lg:w-90">
              <label className="label font-bold text-lg">Password</label>
              <input
                name="password"
                type="password"
                className="input input-bordered  outline-none w-full"
                placeholder="@1234N"
                
              />
            </div>
            <div className=" lg:w-90">
              <label className="label font-bold text-lg">Photo-URL</label>
              <input
                name="photoUrl"
                type="text"
                className="input input-bordered outline-none w-full"
                placeholder="Your Photo Url"
                // required
              />
            </div>

            <button type="submit" className="active-btn mt-4">Register </button>
            <p className="text-center font-semibold"> or </p>
            <button className="my-btn">Continue with Google </button>
            <p>
              Already have an account?
              <Link to="/login">
                <span className="font-semibold text-green-600 "> Login</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
