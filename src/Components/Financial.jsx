import React from 'react'
import financialimg1 from '../Assets/img/financial1.jpg'
import financialimg2 from '../Assets/img/finanical2.jpg'

function Financial() {
    return (
        <section>

            <div className="heros">
                <div className='container'>
                    <div className='row pt-3'>
                        <div className='col-md-6 pt-3 fin-section1'>
                            <div className='d-flex justify-content-center'>
                                <img src={financialimg1} alt="" className='img-fluid rounded-3 w-75' />
                            </div>
                        </div>
                        <div className='col-md-6 pt-3 d-flex justify-content-center align-items-center fin-section2'>
                            <div className=''>
                                <h4 className='nature-primary1 '>Financial Planning</h4>
                                <h1 className='text-light pt-3 display-5 '>Empower Your Financial Future with Sarvamangala Financial Planning</h1>
                                <p className='nature-primary1 pt-3'>At Sarvamangala Financial Services, we believe that a secure financial future is a foundation upon which you can build your dreams.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>

            </div>



        </section>
    )
}

export default Financial