import React from 'react'
import logo from '../Assets/img/logo.png'

function Footer() {
    return (
        <footer className="footer-section mt-4">
            <div className="container">
                <div className="footer-cta pb-5 pt-5 ">
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
                                <div className="footer-logo">
                                    <a href="index.html"><img src={logo} className="img-fluid" alt="logo" /></a>
                                </div>
                                <div className="footer-text">
                                    <p className='heading3'>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                        elit,Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="footer-social-icon">
                                    <span className='heading5'>Follow us</span>
                                    <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                    <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                    <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
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
                                    <li><a href="#">about</a></li>
                                    <li><a href="#">services</a></li>
                                    <li><a href="#">portfolio</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Our Services</a></li>
                                    <li><a href="#">Expert Team</a></li>
                                    <li><a href="#">Contact us</a></li>
                                    <li><a href="#">Latest News</a></li>
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
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Email Address" className='heading3' />
                                        <button><i className="fab fa-telegram-plane"></i></button>
                                    </form>
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