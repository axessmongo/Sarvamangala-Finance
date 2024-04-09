import React from 'react'
import avatar1 from '../Assets/img/avatar1.avif'
import avatar2 from '../Assets/img/avatar2.avif'
import avatar3 from '../Assets/img/avatar3.avif'

export default function Testimonal() {
    return (
        <div>
            <div class="container testing mt-4 py-5 text-center">
            <h4 className='nature-primary1 heading4 text-white'>Success of  <span  style={{color:"#900c3f"}}>Stories</span> </h4>

                <div class="row mt-5">
                    <div class="col-lg-4">
                        <div class="card ">
                            <div class="face front-face">
                                <img src={avatar1}
                                    alt="" class="profile img-fluid" />
                                <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                                    Priya Sharma
                                </div>
                                <div class="designation heading3  text-dark fs-6 ">Homebuyer</div>
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
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="face front-face">
                                <img src={avatar2}
                                    alt="" class="profile img-fluid" />
                                <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                                Murthy Iyer
                                </div>
                                <div class="designation heading3  text-dark fs-6">Retiree</div>
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
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="face front-face">
                                <img src={avatar3}
                                    alt="" class="profile img-fluid" />
                                <div class="pt-3 text-uppercase name heading5 fs-6 test-head">
                                    Issac Maxwell
                                </div>
                                <div class="designation heading3 text-dark fs-6">Finance Director</div>
                            </div>
                            <div class="face back-face">
                                <span class="fas fa-quote-left"></span>
                                <div class="testimonial heading3 text-white">
                                   <p> Account keeper is the most valuable business research we have EVER purchased. Without
                                    electrician, we would ahave gone bankrupt by now.</p>
                                </div>
                                <span class="fas fa-quote-right"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
