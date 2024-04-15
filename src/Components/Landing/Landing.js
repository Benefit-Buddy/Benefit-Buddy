
import "./Landing.css";
import { Link } from "react-router-dom"; 
import Eligibility from ".//Eligibility"; 
import React, { useState } from "react";
import Modal from "react-modal";
import education from "./education";
import agriculture from "./agriculture";
import health from "./health"
import housing from "./housing"

import { Link as ScrollLink } from 'react-scroll';
 

const Landing = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
 
  
const EligibilityAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  }; }
  
  const handleSubmit = () => {
    
  };


 
  




  const [selectedState, setSelectedState] = useState(""); // State to hold the selected state

  const handleStateSelection = (state) => {
    setSelectedState(state);
  }

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
    <div className="website-container">
      <div className="container">
        <div className="row">
          <div className=" scheme col-sm-5">
            <h1 className="heading">Are you confuse ? </h1>

            <h1 className="heading">which Government </h1>

            <h1 className="heading"> Scheme is </h1>
            <h1 className="heading">benificial for you.</h1>
            <br />
            <br />
            <button onClick={openModal} style={{ backgroundColor: '#F9D423', color: 'black', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s',  boxShadow: '8px 8px #000000'  }}>Check Eligibility</button>

            <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    contentLabel="Eligibility Modal"
    style={{
        content: {
            width: '30%', // Adjust the width as needed
            margin: 'auto', // Center the modal horizontally
            maxHeight: '70vh', // Limit the maximum height of the modal to 70% of the viewport height
            overflowY: 'auto', // Add vertical scroll if the content exceeds the maximum height
        }
    }}
>
    <Eligibility />
</Modal>

          </div>
          <div className="img-section col-sm-6">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="img/img1.svg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="img/img2.svg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="img/img3.svg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                </div>
                </div>
              </div>
              
        </div>




         {/*Categories Section*/}

         <div className="top-scheme" id="categories">
          <div className="top-scheme-heading">
            <h1>Categories</h1>
            <h4>Schemes divided into Different Categories</h4>
          </div>
          <div className=" top-scheme-row row">
            <div class="card top-scheme-cards col-3">
              <img
                src="img/Scheme-1.png"
                class="card-img-top ts-img"
                alt="scheme-1"
              />
              <div class="card-body ts-body">
                <Link  to="/education">
                  <h6>Education & Learning</h6>
                </Link>
              </div>
            </div>
            <div class="card top-scheme-cards col-3">
              <img
                src="img/Scheme-2.png"
                class="card-img-top ts-img"
                alt="..."
              />
              <div class="card-body ts-body">
                <Link to="/agriculture">
                  <h6>Agriculture & Rural</h6>
                </Link>
              </div>
            </div>
            <div class="card top-scheme-cards col-3">
              <img
                src="img/Scheme-3.png"
                class="card-img-top ts-img"
                alt="..."
              />
              <div class="card-body ts-body">
                <Link to="/housing">
                  <h6>Housing & Shelter</h6>
                </Link>
              </div>
            </div>
            <div class="card top-scheme-cards col-3">
              <img
                src="img/Scheme-4.png"
                class="card-img-top ts-img"
                alt="..."
              />
              <div class="card-body ts-body">
                <Link to="/health">
                  <h6>Health & Wellness</h6>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* about  */}

        <div className="about" id="about">
          <span className="about-heading">About</span>
          <div className="row about-area">

            <div className="col md-7 about-para">
              <p className="para-text"> Benefit-Buddy is a National Platform that aims to offer one-stop search and discovery of the Government schemes.
                It provides an innovative, technology-based solution to discover scheme information based upon the eligibility of the citizen.
                In which you have to enter the basic details.
                The platform helps the citizen to find the right Government schemes for them. It also guides on how to apply for different Government schemes. Thus no need to visit multiple Government websites.</p>

              <div className="aboutbtn">
              <ScrollLink to="accordionExample" smooth={true} duration={500}>
                <button type="button"  class="btn btn-outline-primary aboutButton">Learn More</button>
                </ScrollLink>
              </div>
            </div>
            <div className="col md-5 about-img">
              <img className="aboutImage" src="img/aboutusimg.svg" alt="" />

            </div>

          </div>
        </div>

        {/* schemes box  */}
        <div className="scheme-box">
          <div className="scheme-box-heading">
            <h1>Scheme Suggestion Box</h1>
          </div>
          <div className=" scheme-box-row row">
            <div className="col-sm selection-box">
              <div className="row">
                <div className="dropdown row scheme-selection-item">
                <button
              className="Scheme-state btn btn-light dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selectedState ? selectedState : "Enter State"}
            </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                    <Link className="dropdown-item" to="#" onClick={() => handleStateSelection("Andhra Pradesh")}>
                    Andhra Pradesh
                  </Link>
                  </li>

                  <li>
                  <Link className="dropdown-item" to="#" onClick={() => handleStateSelection("Arunachal Pradesh")}>
                    Arunachal Pradesh
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#" onClick={() => handleStateSelection("Assam")}>
                    Assam
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#" onClick={() => handleStateSelection("Bihar")}>
                    Bihar
                  </Link>
                </li>
                {/* Add more list items for other states */}
                <li>
                  <Link className="dropdown-item" to="#" onClick={() => handleStateSelection("Chhattisgarh")}>
                    Chhattisgarh
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#" onClick={() => handleStateSelection("Goa")}>
                    Goa
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#" onClick={() => handleStateSelection("Gujarat")}>
                    Gujarat
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#" onClick={() => handleStateSelection("Haryana")}>
                    Haryana
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#" onClick={() => handleStateSelection("Himachal Pradesh")}>
                    Himachal Pradesh
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#" onClick={() => handleStateSelection("Jharkhand")}>
                    Jharkhand
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#" onClick={() => handleStateSelection("Karnataka")}>
                    Karnataka
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#" onClick={() => handleStateSelection("Kerala")}>
                    Kerala
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#" onClick={() => handleStateSelection("Madhya Pradesh")}>
                    Madhya Pradesh
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#" onClick={() => handleStateSelection("Maharashtra")}>
                    Maharashtra
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#" onClick={() => handleStateSelection("Manipur")}>
                    Manipur
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#" onClick={() => handleStateSelection("Meghalaya")}>
                    Meghalaya
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#" onClick={() => handleStateSelection("Mizoram")}>
                    Mizoram
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#" onClick={() => handleStateSelection("Nagaland")}>
                    Nagaland
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#" onClick={() => handleStateSelection("Odisha")}>
                    Odisha
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#" onClick={() => handleStateSelection("Punjab")}>
                    Punjab
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#" onClick={() => handleStateSelection("Rajasthan")}>
                    Rajasthan
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#" onClick={() => handleStateSelection("Sikkim")}>
                    Sikkim
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#" onClick={() => handleStateSelection("Tamil Nadu")}>
                    Tamil Nadu
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#" onClick={() => handleStateSelection("Telangana")}>
                    Telangana
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#" onClick={() => handleStateSelection("Tripura")}>
                    Tripura
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#" onClick={() => handleStateSelection("Uttarakhand")}>
                    Uttarakhand
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#" onClick={() => handleStateSelection("Uttar Pradesh")}>
                    Uttar Pradesh
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#" onClick={() => handleStateSelection("West Bengal")}>
                    West Bengal
                  </Link>
                </li>
                  </ul>
                </div>
                <div className=" scheme-selection-item-2">
  <div className="input-group mb-3">
    <input
      type="text"
      className="form-control"
      placeholder="Enter Your Gender"
      aria-label="Username"
      aria-describedby="basic-addon1"
      required // Add the required attribute here
    />
  </div>
</div>
                <div className="row scheme-selection-item-3">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Occuption"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                       required 
                    />
                  </div>
                </div>
                <div className=" scheme-box-submit">
                <Link
              to={`/StateSchemes`}
              className="btn eligibility btn-outline-primary"
              onClick={handleSubmit}
            >
              Submit
            </Link>
                </div>
              </div>
            </div>
            
            <div className="scheme-box-img col-sm">
              <img src="img/notepad2.svg" alt="" />
            </div>
          </div>
        </div>

       {/* how ro use  */}

        <div className="how-to-use" id="howtouse">
          <h3>How to use </h3>
          <h6 classname="how-to-use-heading">
            Easy steps to apply Governments scheme
          </h6>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card how-to-use-card">
                <div class="card-body how-to-use-card-body">
                  <h5 class="card-title">Enter Details</h5>
                  <img src="img/details.svg" class="card-img-top" alt="..." />
                  <p class="card-text">Start by entering basic details</p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card how-to-use-card">
                <div class="card-body how-to-use-card-body">
                  <h5 class="card-title">Search</h5>
                  <img src="img/search.svg" class="card-img-top" alt="..." />
                  <p class="card-text"> Find the relevant schemes!</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card how-to-use-card">
                <div class="card-body how-to-use-card-body">
                  <h5 class="card-title">Select & Apply</h5>
                  <img src="img/apply.svg" class="card-img-top" alt="..." />
                  <p class="card-text">Choose & apply for the scheme</p>
                </div>
              </div>
            </div>
          </div>
        </div>
       

        {/*FAQ Section*/}

        <div class="accordion faq-section" id="accordionExample">
          <h1>Frequently Asked Questions [FAQ]</h1>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What is Benefit-Buddy?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Benefit-Buddy  is a National Platform that aims to offer one-stop search and discovery of the Government schemes.
                It provides an innovative, technology-based solution to discover scheme information based upon the eligibility of the citizen.
                In which you have to enter the basic details. The platform helps the citizen to find the right Government schemes for them.
                It also guides on how to apply for different Government schemes. Thus no need to visit multiple Government websites.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How to use it properly?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                The procedure is simple. You have to enter the basic details.
                The platform helps the citizen to find the right Government schemes for them.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What basic details are required?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                We need only the basic details like your name, age, income and where you live.
              </div>
            </div>
          </div>
        </div>

        {/* footer */}

        <div className="Footer-pre">
          <span></span>
        </div>
        <div className="Footer-Section">
          <div className="Footer-item container text-center text-md-left">
            <div className="row">
              <div className="footer-link col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <p>

                <ScrollLink to="about" smooth={true} duration={500}>
                  <Link to="/">
                    <b>Contact Us</b>
                  </Link>
                  </ScrollLink>
                </p>
                <p>
                <Link to="/">
                <ScrollLink to="about" smooth={true} duration={500}>
            <b>About Us</b>
          </ScrollLink>
          </Link>
                </p>
                <p>

                <ScrollLink to="accordionExample" smooth={true} duration={500}>
                  <Link to="/">
                    <b>Help</b>
                  </Link>
                  </ScrollLink>
                </p>
              </div>

              <div className="footer-link col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <Link to="/Schemes">
                    <b>Center Schemes</b>
                  </Link>
                </p>
                <p>
                  <Link to="/Schemes">
                    <b>State Schemes</b>
                  </Link>
                </p>
                <p>
                  <Link to="/Feedback">
                    <b>Feedback</b>
                  </Link>
                </p>
              </div>

              <div className="footer-link col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                <p>

                <ScrollLink to="about" smooth={true} duration={500}>
                  <Link to="/">
                    <b>Sitemap</b>
                  </Link>
                  </ScrollLink>
                </p>
              </div>
            </div>
          </div>
          <hr className="hr-line-footer"></hr>
          <div className="footer-link footer-copyright text-center py-3">
            <Link to="/">
              <b>© 2022 Copyright : BenefitBuddy</b>
            </Link>
          </div>
        </div>
      </div>

      </div>
    </>
  );
};

export default Landing;
