import React from "react"
import logoImage from "../assets/logo.png"
import { Link } from "react-router"
import MyContainer from "./MyContainer"

const Footer = () => {


    return (
        <footer className="flex flex-col justify-between bg-[#074f32] ">
            <div>
                <MyContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 text-[#b4bfb4]  p-10">

                    <div className="col-span-2 mr-6 mb-4">
                        <Link to='/'>
                            <div className="flex justify-start items-center mb-2 hover:scale-105">
                                {/* <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                    fill-rule="evenodd" clip-rule="evenodd" className="fill-current"
                                ></svg> */}
                                <img src={logoImage} alt="" className="w-12 h-12" />
                                <p className="font-semibold text-[24px] md:text-[28px]  bg-gradient-to-r from-[#4feb59] to-[#315805] bg-clip-text text-transparent">
                                    PlateShare
                                </p>
                            </div>
                        </Link>

                        <p className="font-semibold text-[18px] text-green-200  my-2"> A Plate of Food, A Deed of Sadaqah</p>
                        <p className="text-gray-400"> To build a society where no one goes hungry, food is not wasted, and every act of sharing is a source of reward (Sadaqah Jariyah) in the sight of Allah.
                            Reduce food waste as encouraged in Islam <span className="font-semibold">(“Do not waste—Allah does not like the wasteful” – Qur’an 7:31)</span>
                        </p>
                    </div>
                    <div>
                        <h6 className="footer-title text-[18px] text-green-200">Services</h6>
                        <div className="flex flex-col gap-2 mt-4 text-gray-400">
                            <a className="link link-hover">Food Sharing</a>
                        <a className="link link-hover">Food Donation</a>
                        <a className="link link-hover">Community Support</a>
                        <a className="link link-hover">Volunteer Program</a>
                        </div>
                    </div>
                    <div>
                        <h6 className="footer-title text-[18px] text-green-200">Explore</h6>
                        <div className="flex flex-col gap-2 mt-4 text-gray-400">
                        <Link to='/' className="link link-hover">Home</Link>
                        <Link to='/available-foods' className="link link-hover">Available Foods</Link>
                        <Link className="link link-hover">Donate Foods</Link>
                        <Link className="link link-hover">Food Request</Link>
                        </div>
                    </div>
                    <div>
                        <h6 className="footer-title text-[18px] text-green-200 my-4">Social Links</h6>

                        <div className="flex flex-wrap gap-2">
                            <a href="https://x.com/" className="border border-gray-400 rounded-sm p-1"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-label="X" >  <path d="M17.53 3H21.5L14.19 11.38L22.5 21H15.96L10.9 14.94L5.42 21H1.45L9.21 12.07L1.25 3H7.96L12.53 8.39L17.53 3ZM16.14 18.73H18.26L6.79 5.17H4.52L16.14 18.73Z" />
                            </svg>
                            </a>
                            <a href="https://x.com/" className="border border-gray-400  rounded-sm p-1"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                            </a>
                            <a href="https://x.com/" className="border border-gray-400  rounded-sm p-1"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"> <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                            </a>
                            <a href="https://x.com/" className="border border-gray-400  rounded-sm p-1"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className=" fill-current" aria-label="LinkedIn" > <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v16h-4V8zM8.5 8h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-8.5c0-2.03-.04-4.63-2.82-4.63-2.82 0-3.26 2.2-3.26 4.48V24h-4V8z" />
                            </svg>
                            </a>
                            <a href="https://x.com/" className="border border-gray-400  rounded-sm p-1"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className=" fill-current" aria-label="Instagram" >  <path d="M7.75 2h8.5C19.99 2 22 4.01 22 6.75v10.5C22 19.99 19.99 22 16.25 22h-8.5C4.01 22 2 19.99 2 17.25V6.75C2 4.01 4.01 2 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm5.25-.9a1.15 1.15 0 1 1-2.3 0a1.15 1.15 0 0 1 2.3 0Z" />
                            </svg>
                            </a>
                        </div>
                    </div>


                </MyContainer>
            </div>
            <div className="footer sm:footer-horizontal footer-center bg-[#3f583c] text-white font-semibold p-4">
                <p>Copyright © 2026 - All right reserved by PlateShare Platform</p>
            </div>
        </footer>

    )
}

export default Footer