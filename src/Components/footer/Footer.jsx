import React, { useEffect } from 'react'
import './Footer.css'
import { Link, NavLink } from 'react-router-dom'
import call from '../../Assets/Phone (2).svg'
import add from '../../Assets/Location (1).svg'
import email from '../../Assets/Emai.svg'
import facebook from '../../Assets/Facebook.svg'
import watsaap from '../../Assets/Whatsapp (1).svg'
import linkdin from '../../Assets/Linkedin.svg'
import logo from '../../Assets/jivit-logo.svg'

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
function Footer() {
    useEffect(() => {

    }, [])
    let date = new Date()
    let year = date.getFullYear()
    return (
        <>
            <footer>
                <div className="footer">
                    <div className="form">
                        <img src={logo} alt="" />
                        <p>Is there anything you’d like to discuss?</p>
                       <button>Send Message</button>
                    </div>
                    <div className="links">
                        <h5>Quick Links</h5>
                        <div className="link-nav">
                            <NavLink to={"/"}>Home</NavLink>
                            <NavLink to={"/"}>Gallary</NavLink>
                            <NavLink to={"/"}>Courses</NavLink>
                            <NavLink to={"/"}>About Us</NavLink>
                            <NavLink to={"/"}>Contact Us</NavLink>
                        </div>
                    </div>
                    <div className="touch">
                        <h5>Get In Touch </h5>
                        <div className="address">
                            <div className="touch-img">
                                <img src={add} alt="" />
                            </div>
                            <div className="touch-para">
                                <p>Plot No - 61, Kanchan Nagar, Tal-Dist Jalgaon 741F2C4 Jalgaon,425001</p>
                            </div>
                        </div>
                        <div className="address">
                            <div className="touch-img">
                                <img src={call} alt="" />
                            </div>
                            <div className="touch-para">
                                <p>PHONE:+91-9665450999, +91-9307633246, +91-9021184557, +91-8766579746</p>
                            </div>
                        </div>
                        <div className="address">
                            <div className="touch-img">
                                <img src={email} alt="" />
                            </div>
                            <div className="touch-para">
                                <p>EMAIL : info@jivithealthcare.com</p>
                            </div>
                        </div>
                    </div>
                    <p className='fp'>For complete information on policy terms, conditions, exclusions, and limitations, please consult the policy brochure carefully before finalizing your purchase.</p>
                </div>
               
                <hr />
                <div className="footer-icon">
                    <div className="ficon">
                        <Link to={'/'}><img src={facebook} alt='' /></Link>
                        <Link to={'/'}><img src={watsaap} alt='' /></Link>
                        <Link to={'/'}><img src={email} alt='' /></Link>
                        <Link to={'/'}><img src={linkdin} alt='' /></Link>
                       
                    </div>
                    <div className="term">
                        <Link to={'/'}>Terms & Conditions</Link>
                        <Link to={'/'}>Policy Statement</Link>
                    </div>
                    <div className="copy">
                        <span>Copyright{year}.Jivit-Healthcare</span>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer