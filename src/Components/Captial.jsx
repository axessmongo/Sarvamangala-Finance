import React from 'react'
import capital from '../Assets/img/capital.jpg'



export default function Capital() {
  return (
    <div>
      <div className="bg-green-1 text-white p-1">
        <div className="container">
          <div className="row align-items-center g-5 py-5">
            <h1 className='secondary-header text-center' data-aos='fade-up'>Why choose capital</h1>

            <div className="col-md-4">
              <img src={capital} alt="" className='img-fluid'/>

            </div>
            <div className="col-md-8 text-white">
              <div className="row gy-3">
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card mb-3" data-aos='zoom-out'>
                    < i class="bi bi-alarm fs-3 m-2 " style={{ "color": "#b5c6c4" }}></i>
                    {/* <img src={fintech} className='mb-2' alt="https://maticz.com/assets/images/home/fintech.webp" /> */}
                    <p className='secondary-text mb-0  text-center heading2'>Apply in few Minutes</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card  pt-2" data-aos='zoom-out' data-aos-duration='500'>
                    <i className="bi bi-lightning-fill fs-3 m-2" style={{ "color": "#b5c6c4" }}></i>
                    {/* <img src={healthcare} className='mb-2' alt="https://maticz.com/assets/images/home/healthcare.webp" /> */}
                    <p className='secondary-text mb-1  text-center  heading2'>Fast Approval</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                    <i className="bi bi-clock-history fs-3 m-2" style={{ "color": "#b5c6c4" }}></i>
                    {/* <img src={education} className='mb-2' alt="https://maticz.com/assets/images/home/graduation-cap.webp" /> */}
                    <p className='secondary-text mb-1 text-center  heading2'>Tenure up to 60 months

                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                    <i className="bi bi-cash fs-3 m-2" style={{ "color": "#b5c6c4" }}></i>
                    {/* <img src={insurance} className='mb-2' alt="https://maticz.com/assets/images/home/life-insurance.webp" /> */}
                    <p className='secondary-text mb-1  text-center  heading2'>Get money in 2-4 working days</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                    <i className="bi bi-geo-alt-fill fs-3 m-2" style={{ "color": "#b5c6c4" }}></i>
                    {/* <img src={restaurant} className='mb-2' alt="https://maticz.com/assets/images/home/fintech.webp" /> */}
                    <p className='secondary-text mb-1  text-center heading2'>No Branch Visit</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                    <i className="bi bi-file-check-fill fs-3 m-2" style={{ "color": "#b5c6c4" }}></i>
                    {/* <img src={shopping} className='mb-2' alt="https://maticz.com/assets/images/home/shopping.webp" /> */}
                    <p className='secondary-text mb-1  text-center heading2'>An ISO certified company</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                    <i className="bi bi-cart-plus fs-3 m-2" style={{ "color": "#b5c6c4" }}></i>
                    {/* <img src={shopping} className='mb-2' alt="https://maticz.com/assets/images/home/shopping.webp" /> */}
                    <p className='secondary-text mb-1 text-center heading2'>Customized Solution</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                    <i className="bi bi-cart-plus fs-3 m-2" style={{ "color": "#b5c6c4" }}></i>
                    {/* <img src={shopping} className='mb-2' alt="https://maticz.com/assets/images/home/shopping.webp" /> */}
                    <p className='secondary-text mb-1 text-center heading2'>Client-Centric Approach</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
