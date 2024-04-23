import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/img/logo1.png";
import Footer from "../Components/Footer";
import Scroll from '../Components/Scroll'
function Blog2() {
  return (
    <div>
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
                        href="home"
                      >
                        Home
                      </a>
                    </li>

                    <li class="nav-item">
                      <Link className="nav-link" to="goals">
                        Goals
                      </Link>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#" id="chooseus">
                        ChooseUs
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#" id="services">
                         Services
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#" id="plans">
                        Plans
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#" id="contact">
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
      <section className=" overflow-x-hidden mt-5 mt-lg-0" data-aos="fade-down">
        {/* <div className="fall fall1">
          <img src={coins} alt={coins} />
        </div>
        <div className="fall fall2">
          <img src={coins} alt={coins} />
        </div> */}
        <div className="hero" id="home1">
          {/* <div className=" py-5 heading3 btn1">
            <button>
              <Link to={"/"}>Back To Home</Link>
            </button>
          </div> */}
          {/* <div className="hero-opacity text-white"></div> */}
        </div>
      </section>
      <div>
        <h3 className="text-center display-4 fw-semibold text-danger">
          Oru Blogs
        </h3>
      </div>
      <section className="bg-body-secondary p-5">
        <div className="container">
          <div class=" blog-card">
            <div class="card-blog">
              <div class="card__header">
                <Link to={"/blogin"}>
                  {" "}
                  <img
                    src="https://source.unsplash.com/600x400/?computer"
                    alt="card__image"
                    class="card__image"
                    width="600"
                  />
                </Link>
              </div>
              <div class="card__body">
                <span class="tag tag-blue">Business Loan</span>
                <h4 className="heading3">
                  Debt Capital: Definition, Advantage & Disadvantage
                </h4>
                <p className="heading3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perferendis molestiae non nemo doloribus.
                </p>
              </div>
            </div>
            <div class="card-blog">
              <div class="card__header">
              <Link to={"/blogin"}>
                  {" "}<img
                  src="https://source.unsplash.com/600x400/?food"
                  alt="card__image"
                  class="card__image"
                  width="600"
                /></Link>
              </div>
              <div class="card__body">
                <span class="tag tag-brown">Business Loan</span>
                <h4 className="heading3">
                  GST on MRP - Meaning, Rules & Calculation
                </h4>
                <p className="heading3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perferendis molestiae non nemo doloribus.
                </p>
              </div>
            </div>
            <div class="card-blog">
              <div class="card__header">
              <Link to={"/blogin"}>
                  {" "}  <img
                  src="https://source.unsplash.com/600x400/?car,automobile"
                  alt="card__image"
                  class="card__image"
                  width="600"
                /></Link>
              </div>
              <div class="card__body">
                <span class="tag tag-red">Business Loan</span>
                <h4 className="heading3">
                  Venture Capital: What Is VC and How Does It Work?{" "}
                </h4>
                <p className="heading3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perferendis molestiae non nemo doloribus.
                </p>
              </div>
            </div>
          </div>
          <div class=" blog-card">
            <div class="card-blog">
              <div class="card__header">
              <Link to={"/blogin"}>
                  {" "}  <img
                  src="https://source.unsplash.com/600x400/?car,automobile"
                  alt="card__image"
                  class="card__image"
                  width="600"
                /></Link>
              </div>
              <div class="card__body">
                <span class="tag tag-blue">Business Loan</span>
                <h4 className="heading3">
                  GST on MRP - Meaning, Rules & Calculation
                </h4>
                <p className="heading3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perferendis molestiae non nemo doloribus.
                </p>
              </div>
            </div>
            <div class="card-blog">
              <div class="card__header">
              <Link to={"/blogin"}>
                  {" "}  <img
                  src="https://source.unsplash.com/600x400/?car,automobile"
                  alt="card__image"
                  class="card__image"
                  width="600"
                /></Link>
              </div>
              <div class="card__body">
                <span class="tag tag-brown">Business Loan</span>
                <h4 className="heading3">
                  Debt Capital: Definition, Advantage & Disadvantage
                </h4>
                <p className="heading3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perferendis molestiae non nemo doloribus.
                </p>
              </div>
            </div>
            <div class="card-blog">
              <div class="card__header">
              <Link to={"/blogin"}>
                  {" "}  <img
                  src="https://source.unsplash.com/600x400/?car,automobile"
                  alt="card__image"
                  class="card__image"
                  width="600"
                /></Link>
              </div>
              <div class="card__body">
                <span class="tag tag-red">Business Loan</span>
                <h4 className="heading3">
                  Venture Capital: What Is VC and How Does It Work?{" "}
                </h4>
                <p className="heading3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perferendis molestiae non nemo doloribus.
                </p>
              </div>
            </div>
          </div>
          <div class=" blog-card">
            <div class="card-blog">
              <div class="card__header">
              <Link to={"/blogin"}>
                  {" "}  <img
                  src="https://source.unsplash.com/600x400/?car,automobile"
                  alt="card__image"
                  class="card__image"
                  width="600"
                /></Link>
              </div>
              <div class="card__body">
                <span class="tag tag-blue">Business Loan</span>
                <h4 className="heading3">
                  GST on MRP - Meaning, Rules & Calculation
                </h4>
                <p className="heading3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perferendis molestiae non nemo doloribus.
                </p>
              </div>
            </div>
            <div class="card-blog">
              <div class="card__header">
              <Link to={"/blogin"}>
                  {" "}  <img
                  src="https://source.unsplash.com/600x400/?car,automobile"
                  alt="card__image"
                  class="card__image"
                  width="600"
                /></Link>
              </div>
              <div class="card__body">
                <span class="tag tag-brown">Business Loan</span>
                <h4 className="heading3">
                  Venture Capital: What Is VC and How Does It Work?
                </h4>
                <p className="heading3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perferendis molestiae non nemo doloribus.
                </p>
              </div>
            </div>
            <div class="card-blog">
              <div class="card__header">
              <Link to={"/blogin"}>
                  {" "}  <img
                  src="https://source.unsplash.com/600x400/?car,automobile"
                  alt="card__image"
                  class="card__image"
                  width="600"
                /></Link>
              </div>
              <div class="card__body">
                <span class="tag tag-red">Business Loan</span>
                <h4 className="heading3">
                  Venture Capital: What Is VC and How Does It Work?{" "}
                </h4>
                <p className="heading3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perferendis molestiae non nemo doloribus.
                </p>
              </div>
            </div>
          </div>
          <div class=" blog-card">
            <div class="card-blog">
              <div class="card__header">
              <Link to={"/blogin"}>
                  {" "}  <img
                  src="https://source.unsplash.com/600x400/?car,automobile"
                  alt="card__image"
                  class="card__image"
                  width="600"
                /></Link>
              </div>
              <div class="card__body">
                <span class="tag tag-blue">Business Loan</span>
                <h4 className="heading3">
                  GST on MRP - Meaning, Rules & Calculation
                </h4>
                <p className="heading3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perferendis molestiae non nemo doloribus.
                </p>
              </div>
            </div>
            <div class="card-blog">
              <div class="card__header">
              <Link to={"/blogin"}>
                  {" "}  <img
                  src="https://source.unsplash.com/600x400/?car,automobile"
                  alt="card__image"
                  class="card__image"
                  width="600"
                /></Link>
              </div>
              <div class="card__body">
                <span class="tag tag-brown">Business Loan</span>
                <h4 className="heading3">
                  GST on MRP - Meaning, Rules & Calculation
                </h4>
                <p className="heading3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perferendis molestiae non nemo doloribus.
                </p>
              </div>
            </div>
            <div class="card-blog">
              <div class="card__header">
              <Link to={"/blogin"}>
                  {" "}  <img
                  src="https://source.unsplash.com/600x400/?car,automobile"
                  alt="card__image"
                  class="card__image"
                  width="600"
                /></Link>
              </div>
              <div class="card__body">
                <span class="tag tag-red">Business Loan</span>
                <h4 className="heading3">
                  Venture Capital: What Is VC and How Does It Work?{" "}
                </h4>
                <p className="heading3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perferendis molestiae non nemo doloribus.
                </p>
              </div>
            </div>
          </div>
          <div class=" blog-card">
            <div class="card-blog">
              <div class="card__header">
              <Link to={"/blogin"}>
                  {" "}  <img
                  src="https://source.unsplash.com/600x400/?car,automobile"
                  alt="card__image"
                  class="card__image"
                  width="600"
                /></Link>
              </div>
              <div class="card__body">
                <span class="tag tag-blue">Business Loan</span>
                <h4 className="heading3">
                  GST on MRP - Meaning, Rules & Calculation
                </h4>
                <p className="heading3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perferendis molestiae non nemo doloribus.
                </p>
              </div>
            </div>
            <div class="card-blog">
              <div class="card__header">
              <Link to={"/blogin"}>
                  {" "}  <img
                  src="https://source.unsplash.com/600x400/?car,automobile"
                  alt="card__image"
                  class="card__image"
                  width="600"
                /></Link>
              </div>
              <div class="card__body">
                <span class="tag tag-brown">Business Loan</span>
                <h4 className="heading3">Delicious Food</h4>
                <p className="heading3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perferendis molestiae non nemo doloribus.
                </p>
              </div>
            </div>
            <div class="card-blog">
              <div class="card__header">
              <Link to={"/blogin"}>
                  {" "}  <img
                  src="https://source.unsplash.com/600x400/?car,automobile"
                  alt="card__image"
                  class="card__image"
                  width="600"
                /></Link>
              </div>
              <div class="card__body">
                <span class="tag tag-red">Business Loan</span>
                <h4 className="heading3">Race to your heart </h4>
                <p className="heading3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perferendis molestiae non nemo doloribus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Scroll />
    </div>
  );
}

export default Blog2;
