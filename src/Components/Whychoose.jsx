import React from 'react'
import { FaGlobe, FaAnchor, FaHourglassHalf, FaDatabase, FaUpload, FaCamera } from 'react-icons/fa';

function Whychoose() {
    return (
        <section>
      {/* Why choose us section */}
            <div className="bg-form"></div>
            <div className="star-field">
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
            </div>

            <div className="feat bg-gray pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="section-head col-sm-12">
                            <h4><span className='text-light'>Why Choose</span> Us?</h4>
                            <p className=''>When you choose us, you'll feel the benefit of 10 years' experience of Web Development. Because we know the digital world and we know how to handle it. With working knowledge of online, SEO, and social media.</p>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="item"> <span className="icon feature_box_col_one"><FaGlobe /></span>
                                <h6>Modern Design</h6>
                                <p>We use the latest technology for the latest world because we know the demand of peoples.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="item"> <span className="icon feature_box_col_two"><FaAnchor /></span>
                                <h6>Creative Design</h6>
                                <p>We are always creative and always listen to our customers, and we mix  these two things and make the best design.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="item"> <span className="icon feature_box_col_three"><FaHourglassHalf /></span>
                                <h6>24 x 7 User Support</h6>
                                <p>If our customer has any problem and any query, we are always demand of peoples. happy to help them.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="item"> <span className="icon feature_box_col_four"><FaDatabase /></span>
                                <h6>Business Growth</h6>
                                <p>Everyone wants to live on top of the mountain, but all the happiness and growth occur while you're climbing it.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="item"> <span className="icon feature_box_col_five"><FaUpload /></span>
                                <h6>Market Strategy</h6>
                                <p>Holding back technology to preserve broken business models is like to veto combustion engine to protect their horseshoes.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="item"> <span className="icon feature_box_col_six"><FaCamera /></span>
                                <h6>Affordable cost</h6>
                                <p>Love is a special word, and I use it only when I mean it. You say the word too much and it becomes cheap.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Whychoose