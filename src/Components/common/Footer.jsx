import React from 'react'
import '../../styles/components/common/footer.css'

import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { GrNext } from "react-icons/gr";
import { Link } from 'react-router-dom';

import sadhishaLogo from "../../assets/images/common/SADHISHA LOGO 1/2.png";


const Footer = () => {
    return (
        <footer>
            <div className="footer-sec bgGreen p-5">
                <div className="footer-body  flex-row-center row mx-md-5">
                    <div className="footer-news-letter-section bgLightGreen row align-items-center flex-row-center rounded-2 p-md-5 m-md-4 col-md-9">
                        <div className="col-md-6">
                            <h3 className="secTitleGreen fs-4 mt-3 mb-2 text-uppercase">
                                Subscribe Newsletters
                            </h3>
                        </div>
                        <div className="col-md-6 align-items-center flex-row-center">
                            <div className="footer-newsletter-form">
                                <form action="" >
                                    <div className="news-letter-form  flex-row-center">
                                        <input type="text" placeholder='Enter Your Valid-mail' className='message-input' required />
                                        <button className='btn '> Subscribe</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>

                    <div className="flex-row-between row mt-md-5">
                        <div className="col-md-6 mt-5 mt-md-0 d-flex row align-items-center">
                            <ul className="navbar-nav d-flex flex-md-row flex-column gap-3">
                                <li className="nav-item">
                                    <Link className="text-white" to="/">Home</Link>
                                </li>


                                <li className="nav-item">
                                    <Link className="text-white" to="/projects">Projects</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/about" className=" text-white" >
                                        About Us
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="text-white" to="/careers">Careers</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/contact" className=" text-white" >
                                        Contact
                                    </Link>
                                </li>



                            </ul>


                        </div>
                        <div className="col-md-6 mt-3 mt-md-0">
                            <div className="d-flex justify-content-md-end justify-content-start align-items-md-center gap-4 ">

                                <a href='' target='_blank' className='social-media-icons fs-2 paraWhite'><FaLinkedin className='social-icons' /></a>
                                <a href='' target='_blank' className='social-media-icons fs-2 paraWhite'><FaFacebookSquare className='social-icons' /></a>
                                <a href='' target='_blank' className='social-media-icons fs-2 paraWhite'><FaInstagramSquare className='social-icons' /></a>
                                <a href='' target='_blank' className='social-media-icons fs-2 paraWhite'><IoLogoYoutube className='social-icons' /></a>
                            </div>

                        </div>

                    </div>

                    <hr className='hrTag' />

                    <div className="flex-row-between row align-items-end pt-25">
                        <div className="col-md-5 order-md-1 order-2">
                            <p className='paraWhite'>Copyright © 2025 <span style={{ color: "var(--gold)" }}> Sadhisha </span></p>
                        </div>
                        <div className="col-md-2 order-md-1 order-2">
                            <div className="logo-box" >
                                <img src={sadhishaLogo} className='w-100' alt="" />
                            </div>
                        </div>
                        <div className="col-md-5 order-md-3 order-3">
                            <p className='paraWhite text-md-end'>Online Presence Powered By <a href="" className='paraWhite' style={{ textDecoration: "none", color: "var(--gold)" }} target='_blank'>Agam Creative Studio</a></p>

                        </div>
                    </div>

                    <div className="pt-3">
                        <Link style={{ textDecorationColor: "white", textUnderlineOffset: "8px" }} to='/terms-and-conditions'><p className='paraWhite small text-md-start ms-md-3 text-center'>Terms of Use</p></Link>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer