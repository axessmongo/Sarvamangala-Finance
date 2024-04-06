import React from 'react'



export default function Capital() {
  return (
    <section className='capital'>
      <div className='container'>
        <div className='row align-items-center g-5'>
          <div className='col-md-3 capital-heading'>Why Open Capital?</div>
          <div className='col-md-9'>
            <div className='row mb-5'>
              <div className='col-md-4 feature mt-3 d-flex'>
                <div className="icon-background">
                  <i className="bi bi-clock-fill icon-blue "></i>
                </div>
                <p>Apply in few minutes</p>
              </div>
              <div className='col-md-4 feature mt-3 d-flex'>
                <div className="icon-background">
                  <i className="bi bi-lightning-fill icon-blue "></i>
                </div>
               <p> Fast Approval</p>
              </div>
              <div className='col-md-4 feature mt-3 d-flex'>
                <div className="icon-background">
                  <i className="bi bi-clock-history icon-blue "></i>
                </div>
                    <p>Tenure up to 60 months</p>
              </div>
            </div>
            <div className="col-md-8 text-white">
              <div className="row gy-3">
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card" data-aos='zoom-out'>
                    < i class="bi bi-alarm fs-3" style={{ "color": "#b5c6c4" }}></i>
                    {/* <img src={fintech} className='mb-2' alt="https://maticz.com/assets/images/home/fintech.webp" /> */}
                    <p className='secondary-text mb-0  text-center'>Apply in few Minutes</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                    <i className="bi bi-lightning-fill fs-3" style={{ "color": "#b5c6c4" }}></i>
                    {/* <img src={healthcare} className='mb-2' alt="https://maticz.com/assets/images/home/healthcare.webp" /> */}
                    <p className='secondary-text mb-0  text-center'>Fast Approval</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                    <i className="bi bi-clock-history fs-3" style={{ "color": "#b5c6c4" }}></i>
                    {/* <img src={education} className='mb-2' alt="https://maticz.com/assets/images/home/graduation-cap.webp" /> */}
                    <p className='secondary-text mb-0 text-center'>Tenure up to 60 months

                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                    <i className="bi bi-cash fs-3" style={{ "color": "#b5c6c4" }}></i>
                    {/* <img src={insurance} className='mb-2' alt="https://maticz.com/assets/images/home/life-insurance.webp" /> */}
                    <p className='secondary-text mb-0  text-center'>Get money in 2-4 working days</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                    <i className="bi bi-geo-alt-fill fs-3" style={{ "color": "#b5c6c4" }}></i>
                    {/* <img src={restaurant} className='mb-2' alt="https://maticz.com/assets/images/home/fintech.webp" /> */}
                    <p className='secondary-text mb-0  text-center'>No Branch Visit</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                    <i className="bi bi-file-check-fill fs-3" style={{ "color": "#b5c6c4" }}></i>
                    {/* <img src={shopping} className='mb-2' alt="https://maticz.com/assets/images/home/shopping.webp" /> */}
                    <p className='secondary-text mb-0  text-center'>An ISO certified company</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                    <i className="bi bi-cart-plus fs-3" style={{ "color": "#b5c6c4" }}></i>
                    {/* <img src={shopping} className='mb-2' alt="https://maticz.com/assets/images/home/shopping.webp" /> */}
                    <p className='secondary-text mb-0  text-center'>Customized Solution</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                    <i className="bi bi-cart-plus fs-3" style={{ "color": "#b5c6c4" }}></i>
                    {/* <img src={shopping} className='mb-2' alt="https://maticz.com/assets/images/home/shopping.webp" /> */}
                    <p className='secondary-text mb-0  text-center'>Client-Centric Approach</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
   
    </section>


  )
}
