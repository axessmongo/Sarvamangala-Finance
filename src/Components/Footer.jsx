import React from 'react'
import logo from '../Assets/img/logo1.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer-section mt-4">
            <div className="container">
                <div className="footer-cta pt-5 ">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 mb-30"></div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                        </div>
                    </div>
                </div>
                <div className="footer-content pt-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 ">
                            <div className="footer-widget">
                                <div className="footer-logo nature-1">
                                    <img src={logo} className="img-fluid" alt="logo" />
                                </div>
                                {/* <div className="footer-text">
                                    <p className='heading3'>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                        elit,Lorem ipsum dolor sit amet.</p>
                                </div> */}
                                <div className="footer-social-icon nature-1">
                                    <span className='heading5'>Follow us</span>
                                    <div class="social-icons">

                                        <div class="social-buttons">
                                            {/* <a href="https://web.whatsapp.com/" target="blank" class="social-margin">
                                                <div class="social-icon whatsapp">
                                                    <i class="bi bi-whatsapp" aria-hidden="true"></i>
                                                </div>
                                            </a> */}
                                            <a href="https://www.facebook.com/profile.php?id=61553902680645" target="blank" class="social-margin">
                                                <div class="social-icon facebook">
                                                    <i class="bi bi-facebook"></i>
                                                </div>
                                            </a>
                                            <a href="https://www.instagram.com/sarvamangalafinancialservices/" target="blank" class="social-margin">
                                                <div class="social-icon instagram">
                                                    <i class="bi bi-instagram"></i>
                                                </div>
                                            </a>

                                            {/* <a href="http://twitter.com/" target="blank" class="social-margin">
                                                <div class="social-icon twitter">
                                                    <i class="bi bi-twitter"></i>
                                                </div>
                                            </a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 ">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3 className='heading3'>Useful Links</h3>
                                </div>
                                <ul className='heading3'>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Goals</a></li>
                                    <li><a href="#">services</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Bussiness</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3 className='heading5'>Subscribe</h3>
                                </div>
                                <div className="footer-text">
                                    <p className='heading3'>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div className='heading3 btn2 text-center mt-3'>
                                    <button className='' >
                                        <Link to={"contact"}>Contact Us</Link>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer