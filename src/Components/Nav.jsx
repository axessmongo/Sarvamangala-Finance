import React from "react";
import perumal from "../Assets/img/hero-banner/perumal.jpg";
// import perumal2 from "../Assets/img/hero-banner/tirupathi full 1.jpg"
// import perumal3 from "../Assets/img/hero-banner/tirupati.webp"
import logo from "../Assets/img/hero-banner/sarvamangala-logo.png";
import png from "../Assets/img/hero-banner/10578814.png";
import list from "../Assets/img/list.png";
import account from "../Assets/img/account.png";
import process from "../Assets/img/process.png";
import calendar from "../Assets/img/calendar.png";

import Capital from "./Captial";
import Ournature from "./Ournature";
import Clarification from "./Clarification";
import Whychooseus from "./Whychoose";
import Contact from "./Contact";
import Financial from "./Financial";
import Footer from "./Footer";
import Testimonal from "./Testimonal";

function Nav() {
  return (
    <>
      <section className="nav-banner nav-bg ">
        <nav
          className="navbar navbar-expand-lg m-auto align-items-center d-flex justify-content-center  "
          id="home"
        >
          <div className="text-center px-5">
            <img src={logo} className="logo px-3" alt="Logo" />
          </div>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <nav class="navbar navbar-expand-lg">
              <div class="container-fluid">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav heading3">
                    <li class="nav-item">
                      <a
                        class="nav-link active text-white"
                        aria-current="page"
                        id="name-nav"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#" id="name-nav">
                        Features
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#" id="name-nav">
                        Why choose us
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#" id="name-nav">
                        Our Sucess
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#" id="name-nav">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </nav>
      </section>

      <div className="bg-form"></div>
      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>
      <section className=" overflow-x-hidden">
        {/* Hero */}
        <div className="hero">
          <div className="hero-opacity text-white"></div>
        </div>
      </section>
      {/* <section class="container-fluid mt-3">
  <div>
    <div class="row justify-content-center">
      <div class="col-md-4 mt-3">
        <div class="blue-card text-center animated-card">
          <p class="px-3 pt-4 fs-3 fw-semibold text-white">Private Finance & Business</p>
          <p class="px-5 fs-1 text-white">Service</p>
        </div>
      </div>
      <div class="col-md-4 mt-3">
        <div class="red-card text-center animated-card">
          <p class="px-3 pt-4 fs-3 fw-semibold text-white">Private Investment Data</p>
          <p class="px-5 fs-1 text-white">Analysis</p>
        </div>
      </div>
      <div class="col-md-4 mt-3">
        <div class="orange-card text-center animated-card">
          <p class="px-3 pt-4 fs-3 fw-semibold text-white">Customer Strategy &</p>
          <p class="px-5 fs-1 text-white">Marketing</p>
        </div>
      </div>
    </div>
  </div>
</section> */}
      <section className="business1-bg">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-5 ">
              <div className="text-black-75 mt-5 pt-5">
                <h1>Take your business to great heights</h1>
                <p className="pt-4">
                  Presenting Business Loans by IDFC FIRST Bank
                </p>
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center pt-4">
                  <button className="primary-btn mb-3 mb-md-0">
                    Contact Us
                  </button>
                  <button className="primary-btn">Details Us</button>
                </div>
              </div>
            </div>

            <div className="col-md-4 ">
              <div className="text-black-50   mt-5 p-3">
                <div className="mt-3 mt-md-5">
                  <div className="d-flex align-items-center bg-white bg-opacity-25 rounded-4">
                    <div className="px-3">
                      <img
                        src={list}
                        className=""
                        alt=""
                        style={{ width: "30px", height: "30px" }}
                      />
                    </div>
                    <p className="fw-semibold ml-3">
                      Collateral-free funding up to ₹1 Cr for self-employed
                      individuals and businesses
                    </p>
                  </div>
                </div>
                <div className="mt-3 mt-md-5">
                  <div className="d-flex align-items-center bg-white bg-opacity-25 rounded-4">
                    <div className="px-3">
                      <img
                        src={list}
                        className=""
                        alt=""
                        style={{ width: "30px", height: "30px" }}
                      />
                    </div>
                    <p className="fw-semibold ml-3">
                      Quick funding up to ₹50 lacs based on your current account
                      statement
                    </p>
                  </div>
                </div>
                <div className="mt-3 mt-md-5">
                  <div className="d-flex align-items-center bg-white bg-opacity-25 rounded-4">
                    <div className="px-3">
                      <img
                        src={list}
                        className=""
                        alt=""
                        style={{ width: "30px", height: "30px" }}
                      />
                    </div>
                    <p className="fw-semibold ml-3">
                      Loan up to ₹50 lacs based on your GST returns
                    </p>
                  </div>
                </div>
                <div className="mt-3 mt-md-5">
                  <div className="d-flex align-items-center bg-white bg-opacity-25 rounded-4">
                    <div className="px-3">
                      <img
                        src={list}
                        className=""
                        alt=""
                        style={{ width: "30px", height: "30px" }}
                      />
                    </div>
                    <p className="fw-semibold ml-3">Fast & seamless process</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Ournature />
      <Capital />
      <Financial />
      {/* <Whychooseus /> */}
      <Clarification />
      <Testimonal />
      <Footer />
    </>
  );
}

export default Nav;
