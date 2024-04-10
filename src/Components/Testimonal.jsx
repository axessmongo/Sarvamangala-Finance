import React from 'react'
import avatar1 from '../Assets/img/avatar1.avif'
import avatar2 from '../Assets/img/avatar2.avif'
import avatar3 from '../Assets/img/avatar3.avif'
export default function Testimonal() {
    return (
        <div>
            <div class="container testing text-center mt-4">
                <h4 className='heading4 text-white'>Success <span className='heading4' style={{ color: "#900c3f" }}> Stories</span></h4>


            </div>
            <div className="contaner-fluid mt-5">
                <div id="carouselExampleControls" class="carousel carousel-dark slide mb-5" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <div class="card-wrapper container-sm d-flex  justify-content-around overflow-hidden">
                                <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center">
                                    <div class="card ">
                                        <div class="face front-face">
                                            <img src={avatar1}
                                                alt="" class="profile" />
                                            <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                                                Priya Sharma
                                            </div>
                                            <div class="designation heading3 fs-6 text-dark ">Homebuyer</div>
                                        </div>
                                        <div class="face back-face">
                                            <span class="fas fa-quote-left"></span>
                                            <div class="testimonial heading3 text-white">
                                                <p>Sarvamangala helped me navigate the complexities of homeownership.
                                                    Their guidance throughout the loan process was invaluable. Now, I'm proud to call my own
                                                    place home!</p>
                                            </div>
                                            <span class="fas fa-quote-right"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center d-none d-md-block">
                                    <div class="card">
                                        <div class="face front-face">
                                            <img src={avatar2}
                                                alt="" class="profile" />
                                            <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                                                Murthy Iyer
                                            </div>
                                            <div class="designation heading3  fs-6 text-dark">Retiree</div>
                                        </div>
                                        <div class="face back-face">
                                            <span class="fas fa-quote-left"></span>
                                            <div class="testimonial heading3 text-white">
                                                Thanks to Sarvamangala's financial planning expertise, I feel confident
                                                about my retirement future. They helped me create a plan that aligns with my goals and
                                                risk tolerance.
                                            </div>
                                            <span class="fas fa-quote-right"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center d-  d-none d-lg-block">
                                    <div class="card">
                                        <div class="face front-face">
                                            <img src={avatar3} alt="" class="profile" />
                                            <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                                                Issac Maxwell
                                            </div>
                                            <div class="designation heading3  fs-6 text-dark">Finance Director</div>
                                        </div>
                                        <div class="face back-face">
                                            <span class="fas fa-quote-left"></span>
                                            <div class="testimonial heading3 text-white text-white">
                                                <p> Account keeper is the most valuable business research we have EVER purchased. Without
                                                    electrician, we would ahave gone bankrupt by now.</p>
                                            </div>
                                            <span class="fas fa-quote-right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card-wrapper container-sm d-flex  justify-content-around overflow-hidden">
                                <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center">
                                    <div class="card ">
                                        <div class="face front-face">
                                            <img src={avatar1}
                                                alt="" class="profile" />
                                            <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                                                Priya Sharma
                                            </div>
                                            <div class="designation heading3 fs-6 text-dark ">Homebuyer</div>
                                        </div>
                                        <div class="face back-face">
                                            <span class="fas fa-quote-left"></span>
                                            <div class="testimonial heading3 text-white">
                                                <p>Sarvamangala helped me navigate the complexities of homeownership.
                                                    Their guidance throughout the loan process was invaluable. Now, I'm proud to call my own
                                                    place home!</p>
                                            </div>
                                            <span class="fas fa-quote-right"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center d-none d-md-block">
                                    <div class="card">
                                        <div class="face front-face">
                                            <img src={avatar2}
                                                alt="" class="profile" />
                                            <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                                                Murthy Iyer
                                            </div>
                                            <div class="designation heading3  fs-6 text-dark">Retiree</div>
                                        </div>
                                        <div class="face back-face">
                                            <span class="fas fa-quote-left"></span>
                                            <div class="testimonial heading3 text-white">
                                                Thanks to Sarvamangala's financial planning expertise, I feel confident
                                                about my retirement future. They helped me create a plan that aligns with my goals and
                                                risk tolerance.
                                            </div>
                                            <span class="fas fa-quote-right"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center d-none d-lg-block">
                                    <div class="card">
                                        <div class="face front-face">
                                            <img src={avatar3} alt="" class="profile" />
                                            <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                                                Issac Maxwell
                                            </div>
                                            <div class="designation heading3  fs-6 text-dark">Finance Director</div>
                                        </div>
                                        <div class="face back-face">
                                            <span class="fas fa-quote-left"></span>
                                            <div class="testimonial heading3 text-white text-white">
                                                <p> Account keeper is the most valuable business research we have EVER purchased. Without
                                                    electrician, we would ahave gone bankrupt by now.</p>
                                            </div>
                                            <span class="fas fa-quote-right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <div class="card-wrapper container-sm d-flex  justify-content-around overflow-hidden">
                                <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center">
                                    <div class="card ">
                                        <div class="face front-face">
                                            <img src={avatar1}
                                                alt="" class="profile" />
                                            <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                                                Priya Sharma
                                            </div>
                                            <div class="designation heading3 fs-6 text-dark ">Homebuyer</div>
                                        </div>
                                        <div class="face back-face">
                                            <span class="fas fa-quote-left"></span>
                                            <div class="testimonial heading3 text-white">
                                                <p>Sarvamangala helped me navigate the complexities of homeownership.
                                                    Their guidance throughout the loan process was invaluable. Now, I'm proud to call my own
                                                    place home!</p>
                                            </div>
                                            <span class="fas fa-quote-right"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center d-none d-md-block">
                                    <div class="card">
                                        <div class="face front-face">
                                            <img src={avatar2}
                                                alt="" class="profile" />
                                            <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                                                Murthy Iyer
                                            </div>
                                            <div class="designation heading3  fs-6 text-dark">Retiree</div>
                                        </div>
                                        <div class="face back-face">
                                            <span class="fas fa-quote-left"></span>
                                            <div class="testimonial heading3 text-white">
                                                Thanks to Sarvamangala's financial planning expertise, I feel confident
                                                about my retirement future. They helped me create a plan that aligns with my goals and
                                                risk tolerance.
                                            </div>
                                            <span class="fas fa-quote-right"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6 col-12 d-flex justify-content-center d-none d-lg-block">
                                    <div class="card">
                                        <div class="face front-face">
                                            <img src={avatar3} alt="" class="profile" />
                                            <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                                                Issac Maxwell
                                            </div>
                                            <div class="designation heading3  fs-6 text-dark">Finance Director</div>
                                        </div>
                                        <div class="face back-face">
                                            <span class="fas fa-quote-left"></span>
                                            <div class="testimonial heading3 text-white text-white">
                                                <p> Account keeper is the most valuable business research we have EVER purchased. Without
                                                    electrician, we would ahave gone bankrupt by now.</p>
                                            </div>
                                            <span class="fas fa-quote-right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
