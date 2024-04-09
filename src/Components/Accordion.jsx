import React from 'react'
import  img1 from '../Assets/img/image1.png'
import  img2 from '../Assets/img/image2.png'
import  img3 from '../Assets/img/image3.png'
import  img4 from '../Assets/img/image4.png'
import  img5 from '../Assets/img/image5.png'
import  img6 from '../Assets/img/image6.png'
import  img7 from '../Assets/img/image7.png'


export default function Accordion() {
  return (
    <div  >
        <div class="container overflow-hidden acc-bg " id="placement-accordion">
      <div class="accordion" id="accordionExample">
        <div class="row justify-content-center ">
          <div class="col-md-6" data-aos="fade-left" data-aos-duration="600">
            <div class="accordion-item">
              <h2 class="accordion-header ">
                <button
                  class="accordion-button collapsed shadow-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <div class="pe-2 col-2">
                    <img
                      src={img1}
                      class="rounded-2"
                      width="40px"
                      height="40px"
                    />
                  </div>
                  <div>Skill Assessment and Salary Discussion</div>
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    We begin by assessing your skills and discussing your salary
                    expectations. We will explain the Pay After Placement
                    program how it suits your specific aspirations as an
                    Automation Testing, Full Stack, or DevOps enthusiast.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed shadow-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <div class="pe-2 col-2">
                    <img
                      src={img2}
                      class="rounded-2"
                      width="40px"
                      height="40px"
                    />
                  </div>
                  <div>Affordable Training Investment</div>
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    To kickstart your journey, we require Minimal Initial
                    Charges (5% to 10%) for Job-Oriented Training and
                    Application Processing. Remaining 90% after Placement. If,
                    within 6 months after completing the training, we don't
                    secure a job for you, we'll refund this fee.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed shadow-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <div class="pe-2 col-2">
                    <img
                      src={img3}
                      class="rounded-2"
                      width="40px"
                      height="40px"
                    />
                  </div>
                  <div>Comprehensive Training</div>
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Our program includes a 3-month training period, consisting
                    of 45 days of online training and 45 days of hands-on live
                    project experience in an offline setting. We ensure you're
                    well-prepared for your future career in automation Testing,
                    Full Stack Development, or DevOps.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6" data-aos="fade-right" data-aos-duration="600">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed shadow-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFourth"
                  aria-expanded="false"
                  aria-controls="collapseFourth"
                >
                  <div class="pe-2 col-2">
                    <img
                      src={img4}
                      class="rounded-2"
                      width="40px"
                      height="40px"
                    />
                  </div>
                  <div>Income Sharing Agreement</div>
                </button>
              </h2>
              <div
                id="collapseFourth"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    After the successful completion of the comprehensive
                    training for 3 months, you'll sign an Income Sharing
                    Agreement. This agreement outlines that you'll pay us 35% of
                    your annual CTC immediately after receiving the job offer
                    letter. If you choose to finance your training through our
                    loan partners, the payment increases to 45% of your annual
                    CTC.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed shadow-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  <div class="pe-2 col-2">
                    <img
                      src={img5}
                      class="rounded-2"
                      width="40px"
                      height="40px"
                    />
                  </div>
                  <div>Elevate Your Profile</div>
                </button>
              </h2>
              <div
                id="collapseFive"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    We'll help you create an impressive resume, provide
                    interview practice, and offer communication training. We'll
                    also assist in scheduling interviews, ensuring you're
                    well-prepared to crack the interview and get an offer.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed shadow-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  <div class="pe-2 col-2 ">
                    <img
                      src={img6}
                      class="rounded-2"
                      width="40px"
                      height="40px"
                    />
                  </div>
                  <div  className='head'>Securing Your Job</div>
                </button>
              </h2>
              <div
                id="collapseSix"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body ">
                  <p>
                    Once you receive a job offer, we'll assist you in either
                    proceeding with the loan process or making the agreed-upon
                    payment as per the Income Sharing Agreement.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-md-6 mt-md-4"
            data-aos="fade-down"
            data-aos-duration="700"
          >
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed shadow-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  <div class="pe-2 col-2">
                    <img
                      src={img7}
                      class="rounded-2"
                      width="40px"
                      height="40px"
                    />
                  </div>
                  <div>Optional Job Support - Up to 3 months</div>
                </button>
              </h2>
              <div
                id="collapseSeven"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    After landing your job, you can choose to receive job
                    support from ATIT. This is an optional offline-only service
                    for an additional charge.
                  </p>
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
