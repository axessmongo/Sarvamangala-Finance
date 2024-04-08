import React from 'react'
import logo from '../Assets/img/logo.png'

function Footer() {
    return (
        <footer className="footer-section">
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
                                    <div class="social-icons">

                                        <div class="social-buttons">
                                            <a href="https://web.whatsapp.com/" target="blank" class="social-margin">
                                                <div class="social-icon whatsapp">
                                                    <i class="bi bi-whatsapp" aria-hidden="true"></i>
                                                </div>
                                            </a>
                                            <a href="http://www.facebook.com" target="blank" class="social-margin">
                                                <div class="social-icon facebook">
                                                    <i class="bi bi-facebook"></i>
                                                </div>
                                            </a>
                                            <a href="https://www.youtube.com/" target="blank" class="social-margin">
                                                <div class="social-icon youtube">
                                                <i class="bi bi-youtube"></i>
                                                </div>
                                            </a>

                                            <a href="http://twitter.com/" target="blank" class="social-margin">
                                                <div class="social-icon twitter">
                                                    <i class="bi bi-twitter"></i>
                                                </div>
                                            </a>
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