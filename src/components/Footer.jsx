import React from "react"
import logoImage from "../assets/logo.png"
import { Link } from "react-router"
import MyContainer from "./MyContainer"

const Footer = () => {


    return (
        <footer className="flex flex-col justify-between bg-[#074f32] ">
            <div>
            <MyContainer className="footer sm:footer-horizontal text-[#b4bfb4]  p-10 md:p-20">
        
                <div>
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        className="fill-current"
                    ></svg>
                    <img src={logoImage} alt="" className="w-8 h-8" />
                    <Link to='/' className="font-medium text-lg text-[#627382]">
                        PlateShare
                    </Link>
                    <p> A Plate of Food, A Deed of Sadaqah</p>
                    <p> To build a society where no one goes hungry, food is not wasted, and every act of sharing is a source of reward (Sadaqah Jariyah) in the sight of Allah.
                        Reduce food waste as encouraged in Islam (“Do not waste—Allah does not like the wasteful” – Qur’an 7:31)
                    </p>
                </div>
                <div>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Food Sharing</a>
                    <a className="link link-hover">Food Donation</a>
                    <a className="link link-hover">Community Support</a>
                    <a className="link link-hover">Volunteer Program</a>
                </div>
                <div>
                    <h6 className="footer-title">Explore</h6>
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/available-foods' className="link link-hover">Available Foods</Link>
                    <Link className="link link-hover">Donate Foods</Link>
                    <Link className="link link-hover">Food Request</Link>
                </div>
                <div>
                    <h6 className="footer-title grid-flow-col gap-4 md:place-self-center md:justify-self-end">Social Links</h6>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"> <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                    </a>
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </a>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"> <path
                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>
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