import React from 'react'
import capital from '../Assets/img/capital.jpg'
import list from "../Assets/img/list.png";
import account from "../Assets/img/account.png";
import process from "../Assets/img/process.png";
import calendar from "../Assets/img/calendar.png";
import { Link } from 'react-router-dom';



export default function Capital() {
  return (
    <div>
      <div className="bg-green-1 text-white p-1">
        <div className="container">
          <div className="row align-items-center g-3 py-3 text-center ">
            <h4 className='heading4 text-white'>Why Choose <span className='heading4' style={{ color: "#900c3f" }}> Us?</span></h4>

            <div className="col-md-4">
              <img src={capital} alt="" className='img-fluid' />

            </div>
            <div className="col-md-8 text-dark">
              <div className="row gy-3">
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card mb-3" data-aos='zoom-out'>
                    < i class="bi bi-ticket fs-2 m-2 " style={{ "color": "#c00937" }}></i>
                    {/* <img src={fintech} className='mb-2' alt="https://maticz.com/assets/images/home/fintech.webp" /> */}
                    <p className='secondary-text mb-0  text-center heading2'>Big Ticket Loans</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card  pt-2" data-aos='zoom-out' data-aos-duration='500'>
                    <i className="bi bi-lightning-fill fs-3 m-2" style={{ "color": "#c00937" }}></i>
                    {/* <img src={healthcare} className='mb-2' alt="https://maticz.com/assets/images/home/healthcare.webp" /> */}
                    <p className='secondary-text mb-1  text-center  heading2'>Competitive Rates</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                    <i className="bi bi-credit-card fs-3 m-2" style={{ "color": "#c00937" }}></i>
                    {/* <img src={education} className='mb-2' alt="https://maticz.com/assets/images/home/graduation-cap.webp" /> */}
                    <p className='secondary-text mb-1 text-center  heading2'>Flexible Repayment

                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                  <i class="bi bi-person-circle fs-4" style={{ "color": "#c00937" }}></i>
                    {/* <img src={insurance} className='mb-2' alt="https://maticz.com/assets/images/home/life-insurance.webp" /> */}
                    <p className='secondary-text mb-3 mt-2  text-center  heading2'>Expert Support</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                    <i className="bi bi-joystick fs-3 m-2" style={{ "color": "#c00937" }}></i>
                    {/* <img src={restaurant} className='mb-2' alt="https://maticz.com/assets/images/home/fintech.webp" /> */}
                    <p className='secondary-text mb-1  text-center heading2'>Fast Approvals</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                    <i className="bi bi-file-check-fill fs-3 m-2" style={{ "color": "#c00937" }}></i>
                    {/* <img src={shopping} className='mb-2' alt="https://maticz.com/assets/images/home/shopping.webp" /> */}
                    <p className='secondary-text mb-1  text-center heading2'>Collateral Options</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                    <i className="bi bi-cart-plus fs-3 m-2" style={{ "color": "#c00937" }}></i>
                    {/* <img src={shopping} className='mb-2' alt="https://maticz.com/assets/images/home/shopping.webp" /> */}
                    <p className='secondary-text mb-1 text-center heading2'>Business Focus</p>
                  </div>
                </div>
                <div className="col-6 col-md-5 col-lg-3">
                  <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                    <i className="bi bi-hand-thumbs-up fs-3 m-2" style={{ "color": "#c00937" }}></i>
                    {/* <img src={shopping} className='mb-2' alt="https://maticz.com/assets/images/home/shopping.webp" /> */}
                    <p className='secondary-text mb-1 text-center heading2'>Trust &amp; Security</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="">
        <div className="container business1-bg business2-bg">
        <div className=''>
        <h1 className='heading4 fs-4 mt-5 text-center'>Bussiness Loan</h1> 
          <div className="row justify-content-around  p-3">
      
            <div className="col-md-5 ">
              <div className="text-black-75 mt-5 pt-5">
               
                <h3 className='heading4 fs-5'>Take your business to great heights</h3>
                <p className="pt-4 heading3">
                  Presenting Business Loans by <span className='heading4 fs-6' style={{ color: "900c3f" }}>IDFC FIRST</span> Bank
                </p>
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-start align-items-md-center pt-4">
                  <div className='col-md-4 py-2 heading3 btn1'>
                    <button>
                    <Link to={"contact"}>Conatct us</Link>
                    </button>
                  </div>
                  <div className='col-md-4 py-2 heading3 btn1'>
                   <button>
                   <Link to={"business"}>Deatil us</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 ">
              <div className="text-black-50 mt-5 p-3">
                <div className="mt-3 mt-md-4">
                  <div className="d-flex align-items-center shadow bg-opacity-25 rounded-4">
                    <div className="px-4">
                      <img
                        src={list}
                        className=""
                        alt=""
                        style={{ width: "30px", height: "30px" }}
                      />
                    </div>
                    <p className=" mt-2 heading3 text-dark">
                      Collateral-free funding up to ₹1 Cr for self-employed
                      individuals and businesses
                    </p>
                  </div>
                </div>
                <div className="mt-3 mt-md-4">
                  <div className="d-flex align-items-center bg-white bg-opacity-25 rounded-4">
                    <div className="px-4">
                      <img
                        src={account}
                        className=""
                        alt=""
                        style={{ width: "30px", height: "30px" }}
                      />
                    </div>
                    <p className="heading3 mt-2 text-dark">
                      Quick funding up to ₹50 lacs based on your current account
                      statement
                    </p>
                  </div>
                </div>
                <div className="mt-3 mt-md-4">
                  <div className="d-flex align-items-center bg-white bg-opacity-25 rounded-4">
                    <div className="px-4">
                      <img
                        src={process}
                        className=""
                        alt=""

                        style={{ width: "30px", height: "30px" }}
                      />
                    </div>
                    <p className="heading3 mt-2 text-dark">
                      Loan up to ₹50 lacs based on your GST returns
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        </div>
      </section>



    </div>

  )
}
