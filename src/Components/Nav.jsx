import React from "react";
import perumal from "../Assets/img/hero-banner/perumal.jpg"
// import perumal2 from "../Assets/img/hero-banner/tirupathi full 1.jpg"
// import perumal3 from "../Assets/img/hero-banner/tirupati.webp"
import logo from "../Assets/img/hero-banner/sarvamangala-logo.png";
import png from "../Assets/img/hero-banner/10578814.png";
import Capital from "./Captial";
import Ournature from './Ournature'
import Clarification from "./Clarification";
import Whychooseus from './Whychoose'
import Contact from "./Contact";
import Footer from "./Footer";

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

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div
            className="collapse navbar-collapse px-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active px-3" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active px-3" href="#service">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active px-3" href="#budget">
                  Why Choose Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active px-3" href="#budget">
                  features
                </a>
              </li>

              {/* <li className="nav-item">
          <a className="nav-link active px-3" href="#types">
            Types
          </a>
        </li> */}
              <li className="nav-item">
                <a className="nav-link active px-3" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
      <section className=" overflow-x-hidden">
        {/* Hero */}
       <div className="hero">
        <div className="hero-opacity text-white">
        <h1> Dreams Come True</h1>

        </div>
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

      
      <Ournature />
      <Capital />
      <Whychooseus/>
      <Clarification/>
      <Footer/>
     
      

    </>
  );
}

export default Nav;
