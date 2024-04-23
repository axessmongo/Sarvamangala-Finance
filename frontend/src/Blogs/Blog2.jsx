import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/img/logo1.png";
import Footer from "../Components/Footer";
import Scroll from '../Components/Scroll'
import {
  slice, concat,
} from 'lodash';
const LENGTH = 50;
const DATA = [...Array(LENGTH).keys()];
const IMAGE_SRC = "https://source.unsplash.com/600x400/?car,automobile"
const LIMIT = 3;

function Blog2() {

  const [showMore, setShowMore] = useState(true);
  const [list, setList] = useState(slice(DATA, 0, LIMIT));
  const [index, setIndex] = useState(LIMIT);

  // Function to load more items
  const loadMore = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < (LENGTH - 1);
    const newList = concat(list, slice(DATA, index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  }


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
        <h4
          className="heading4 text-dark text-center mb-3 mt-4"
          data-aos="zoom-in"
          data-aos-duration="700"
        >
          Our  <span className="heading4 business-step">Blogs</span>
        </h4>
      </div>
      <section className="bg-body-secondary p-5">
        <div className="container">
          <div className="blog-card">
            {list.map((item, index) => (
              <div className="card-blog" key={index}>
                <div className="card__header">
                  <Link to={"/blogin"}>
                    <img
                      src={IMAGE_SRC}
                      alt="card__image"
                      className="card__image"
                      width="600"
                    />
                  </Link>
                </div>
                <div className="card__body">
                  <span className="tag tag-blue">Business Loan</span>
                  <h4 className="heading3">
                    Sample Blog Title
                  </h4>
                  <p className="heading3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                    perferendis molestiae non nemo doloribus.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Load more button */}
        <div className="py-0 py-lg-5 heading3 btn1">
         
            {showMore && <button onClick={loadMore}> Load More </button>}
        
        </div>

      </section>
      <Footer />
      <Scroll />
    </div>
  );
}

export default Blog2;
