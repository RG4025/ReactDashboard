import React, { useState } from "react";
// import FirstCompoBody from "../bodycomponants/FirstCompoBody";
import FirstCompoBody from "../ReactChartStock/FirstCompoBody";
import SecondCompoBody from "../bodycomponants/ReactChart/SecondCompoBody";
import { Link, NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
// import ThirdCompoNotes from "../bodycomponants/ThirdCompoNotes";
import Contact from "../Contact/Contact";
import TradingViewWidget from "../TradingViewWidget";
import ThirdCompoNotes from "../NotesComponants/ThirdCompoNotes";

export default function SecNavbar() {





  const [nav, setNav] = useState(
    "d-none d-xl-block col-12 col-md-12 col-xl-2 sectoin_first_wrapper"
  );

  const [toggle, settoggleNav] = useState("navbarToggle d-block d-xl-none");

  function navChange() {
    if (
      toggle === "navbarToggle d-block d-xl-none" &&
      nav ===
        "d-none d-xl-block col-12 col-md-12 col-xl-2 sectoin_first_wrapper"
    ) {
      settoggleNav("navbarToggle toggle");
      setNav("d-block sectoin_first_wrapper");
    } else {
      settoggleNav("navbarToggle d-block d-xl-none");
      setNav(
        "d-none d-xl-block col-12 col-md-12 col-xl-2 sectoin_first_wrapper"
      );
    }
  }

  return (
    <>
      <section className="position-relative"></section>
      <section className="sectionFirst">
        <div className="container-fluid bg-dark text-light ">
          <div className="row">
            <div className="col-12 col-md-3 col-xl-2 py-1 secNav_wrapper1">
              <div className="d-flex justify-content-around align-items-center py-2">
                <div>
                  <strong className="fs-4">
                    {" "}
                    <a href="#" className="main_logo">
                      &lt; R_<span className="text-danger main_logo">G</span>{" "}
                      &gt;{" "}
                    </a>
                  </strong>
                </div>

                <div className={toggle} onClick={navChange}>
                  <div className="line1"></div>
                  <div className="line2"></div>
                  <div className="line3"></div>
                </div>
              </div>
            </div>
            <div className="col-9 col-xl-10 d-none d-md-block py-2  secNav_wrapper">
              <div className="d-flex justify-content-between align-items-center py-2">
                <div className="FirstNav_links1 d-flex justify-content-center align-items-center">
                  <div>
                    <span>
                      {" "}
                      <NavLink
                        to="/Contact"
                        className="text-decoration-none text-light fw-bold"
                      >
                        Contact
                      </NavLink>{" "}
                    </span>
                  </div>

                  <div className="dropdown ms-3 d-none d-lg-block">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      <small className="m-0 p-0">
                        {" "}
                        <i className="fa-solid fa-user ps-0"></i> Rushi{" "}
                      </small>
                    </button>
                    <ul className="dropdown-menu text-center">
                      <li>
                        <a className="dropdown-item" href="https://rushikeshgurav.netlify.app/" target="_blank">
                          Portfolio
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="./pdf's/Resume_RushiGurav.pdf"
                          target="_blank"
                        >
                          Resume
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://github.com/RG4025"
                          target="_blank"
                        >
                          Github
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex justify-contect-evenly FirstNav_links">
                  <div className="me-3">
                    <span>
                      {" "}
                      <Link
                        to="/"
                        className="text-decoration-none text-light fw-bold"
                      >
                        BSE Sensex Index{" "}
                        <i className="fa-solid fa-arrow-trend-up fs-6 ps-0"></i>
                      </Link>{" "}
                    </span>
                  </div>
                  <div className="me-3">
                    <span>
                      {" "}
                      <Link
                        to="/FirstCompoBody"
                        className="text-decoration-none text-light fw-bold"
                      >
                        Track Stocks{" "}
                        <i className="fa-solid fa-arrow-trend-up fs-6 ps-0"></i>
                      </Link>{" "}
                    </span>
                  </div>
                  <div className="me-3">
                    <span>
                      <Link
                        to="/SecondCompoBody"
                        className="text-decoration-none text-light fw-bold"
                      >
                        Track Crypto{" "}
                        <i className="fa-brands fa-bitcoin fs-6  ps-0"></i>
                      </Link>{" "}
                    </span>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section_main">
        <div className="container-fluid">
          <div className="row">
            <div className={nav}>
              <div className=" pt-4">
                <ul className="navbar_linksMain">
                  

                  <li className="home_span pt-5">
                    <p>
                      <Link to="/">
                        <span>
                          <i className="fa-solid fa-arrow-trend-up fs-6 ps-0"></i>
                          BSE Sensex 
                        </span>
                      </Link>{" "}
                    </p>
                  </li>

                  <li className="home_span">
                    <small>
                      <Link to="/SecondCompoBody">
                        <span>
                          <i className="fa-brands fa-bitcoin fs-6  ps-0"></i>
                          Track Crypto
                        </span>
                      </Link>{" "}
                    </small>
                  </li>
                  <li className="home_span">
                    <p>
                      <Link to="/FirstCompoBody">
                        <span>
                          <i className="fa-solid fa-arrow-trend-up fs-6 ps-0"></i>
                          Track stock
                        </span>
                      </Link>{" "}
                    </p>
                  </li>
                  
                  <li className="home_strong">
                    <strong>
                      {" "}
                      <Link to="/ThirdCompoNotes">
                        <small>
                          {" "}
                          <i className="fa-sharp fa-solid fa-pen fs-0 ps-0"></i>{" "}
                          Save Notes.
                        </small>{" "}
                      </Link>
                    </strong>
                  </li>

                  <li className="home_span">
                    <span>
                      <Link to="/Contact"> Contact</Link>
                    </span>
                    

                  </li>
                 
                  <li className="home_SocialIcon">
                    <span>
                      <a href="https://www.instagram.com/rg_4025/" target="_blank">
                        {" "}
                        <i className="bi bi-instagram"></i>{" "}
                      </a>
                    </span>
                    <span>
                      <a href="https://twitter.com/RG4025" target="_blank">
                        {" "}
                        <i className="bi bi-twitter-x"></i>{" "}
                      </a>
                    </span>
                    <span>
                      <a href="https://www.linkedin.com/in/rushikesh-gurav-2694b0234/"
                                            target="_blank">
                        {" "}
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </span>
                    <br />
                    <span className="mt-2">
                      <a href="https://github.com/RG4025" target="_blank">
                        {" "}
                        <i className="bi bi-github "></i>
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-12  col-xl-10 bg-dark text-light section_first_wrapper2">

              <div className="container mt-5">
                {/* <FirstCompoBody/> */}

                <Routes>
                  <Route
                    path="/"
                    element={<TradingViewWidget />}
                  />
                    
                    <Route path="/FirstCompoBody" element={<FirstCompoBody />} />
                    
                    
                  <Route
                    path="/SecondCompoBody"
                    element={<SecondCompoBody />}
                  />
                  <Route
                    path="/ThirdCompoNotes"
                    element={<ThirdCompoNotes/>}
                  />

                  <Route path="/Contact" element={<Contact />} />

                </Routes>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
