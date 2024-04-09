import React from 'react'
import "../Assets/Css/Businessloan.css"
import carousel from "../Assets/img/carousel_img_2.svg"
import carousel1 from "../Assets/img/carousel_img_3.svg"
import carousel2 from "../Assets/img/carousel_img_4.svg"
import Footer from './Footer'

function Businessloan() {
    return (

        <div>

            <div className="business-bg  d-flex justify-content-center align-items-center">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner container">
                        <div class="carousel-item active">
                            <img src={carousel} alt="" />
                        </div>
                        <div class="carousel-item">
                            <img src={carousel1} alt="" />
                        </div>
                        <div class="carousel-item">
                            <img src={carousel2} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <section className=' bg-warning-subtle business mt-2'>
                <div className='container'>
                    <div className='business_para'>
                        <h2 className='text-center bus_texts' >WHAT IS A BUSINESS LOAN?</h2>
                        <p>A business loan is a financial product designed to provide companies with the capital they need for various purposes such as expansion, purchasing inventory or equipment, managing cash flow, or funding new projects. These loans are typically offered by banks, credit unions, or online lenders and can come in different forms such as term loans, lines of credit, equipment financing, or specialized loans like SBA loans. Businesses repay these loans over time with interest, helping them to access the funds necessary to grow and thrive.</p>
                        <p>Business loans play a crucial role in supporting the financial health and growth of companies across industries. They enable businesses to make strategic investments, seize opportunities, and navigate challenges by providing access to much-needed capital. By securing a business loan, companies can strengthen their operations, improve competitiveness, and achieve their long-term objectives.</p>
                    </div>

                    <div className='business_eligi mt-5'>
                        <h3 className='bus_texts'>BUSINESS LOAN ELIGIBILITY CRITERIA</h3>
                        <table class="table mt-4 shadow ">
                            <thead>
                                <tr>
                                    <th scope="col">Parameter</th>
                                    <td>Description</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className='' scope="row">Mandatory Documents</th>
                                    <td>
                                        <ul style={{ listStyleType: "square" }}>
                                            <li>Duly filled application form</li>
                                            <li>PAN Card</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th className='' scope="row">Proof of Identity</th>
                                    <td>
                                        <ul style={{ listStyleType: "square" }}>
                                            <li>Voter ID Card/ Photo ID issued by GOI/Passport/ Driving Licence/Aadhaar Card</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th className='' scope="row">Proof of Address</th>
                                    <td>
                                        <ul style={{ listStyleType: "square" }}>
                                            <li>Aadhaar Card/ Voter ID Card/ Property Tax Receipt/ Driving Licence/ Utility Bill/ Registry Copy/Property Tax Receipt/ Lease or Rent Agreement</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th className='' scope="row">Business Continuity Proof</th>
                                    <td>
                                        <ul style={{ listStyleType: "square" }}>
                                            <li>VAT/ Excise/ Sales Tax/ Service Tax Registration</li>
                                            <li>Trade License/ Copy of partnership deed/ Registration Certificate issued by RBI or SEBI/ Certificate of Practice</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th className='' scope="row">Signature Proof</th>
                                    <td>
                                        <ul style={{ listStyleType: "square" }}>
                                            <li>Banker's Verification/ Passport/ PAN Card</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th className='' scope="row">Proof of Income</th>
                                    <td>
                                        <ul style={{ listStyleType: "square" }}>
                                            <li>Latest ITR</li>
                                            <li>GST returns for the financial year</li>
                                            <li>Latest audited financials</li>
                                            <li>Last 6 months bank statement</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th className='' scope="row">Other Documents (if applicable)</th>
                                    <td>
                                        <ul style={{ listStyleType: "square" }}>
                                            <li>List of Directors</li>
                                            <li>Shareholding patterns</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='business_eligi_2 mt-5'>
                        <h3 className='bus_texts'>DOCUMENTS REQUIRED FOR A BUSINESS LOAN</h3>
                        <table class="table mt-4 shadow ">
                            <thead>
                                <tr>
                                    <th scope="col">Parameter</th>
                                    <td>Description</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className='' scope="row">Mandatory Documents</th>
                                    <td>
                                        <ul style={{ listStyleType: "square" }}>
                                            <li>Duly filled application form</li>
                                            <li>PAN Card</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th className='' scope="row">Proof of Identity</th>
                                    <td>
                                        <ul style={{ listStyleType: "square" }}>
                                            <li>Voter ID Card/ Photo ID issued by GOI/Passport/ Driving Licence/Aadhaar Card</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th className='' scope="row">Proof of Address</th>
                                    <td>
                                        <ul style={{ listStyleType: "square" }}>
                                            <li>Aadhaar Card/ Voter ID Card/ Property Tax Receipt/ Driving Licence/ Utility Bill/ Registry Copy/Property Tax Receipt/ Lease or Rent Agreement</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th className='' scope="row">Business Continuity Proof</th>
                                    <td>
                                        <ul style={{ listStyleType: "square" }}>
                                            <li>VAT/ Excise/ Sales Tax/ Service Tax Registration</li>
                                            <li>Trade License/ Copy of partnership deed/ Registration Certificate issued by RBI or SEBI/ Certificate of Practice</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th className='' scope="row">Signature Proof</th>
                                    <td>
                                        <ul style={{ listStyleType: "square" }}>
                                            <li>Banker's Verification/ Passport/ PAN Card</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th className='' scope="row">Proof of Income</th>
                                    <td>
                                        <ul style={{ listStyleType: "square" }}>
                                            <li>Latest ITR</li>
                                            <li>GST returns for the financial year</li>
                                            <li>Latest audited financials</li>
                                            <li>Last 6 months bank statement</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th className='' scope="row">Other Documents (if applicable)</th>
                                    <td>
                                        <ul style={{ listStyleType: "square" }}>
                                            <li>List of Directors</li>
                                            <li>Shareholding patterns</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
      
    )
}

export default Businessloan
