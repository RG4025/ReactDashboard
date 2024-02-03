import React, { useState,useContext,createContext } from "react";


const setNavbar = createContext();

export default function FirstNavbar() {



    const [toggle,toggleNav] = useState('navarToggle');
    

  return (
    <>
      <section className="sectionFirst">
        <div className="container-fluid bg-dark text-light ">
          <div className="row">
            <div className="col-12 col-md-2">
              <div className="d-flex justify-content-around align-items-center">
                <div>
                <strong className="fs-4"> <a href="#" className="main_logo">&lt; R_<span
                                        className="text-danger main_logo">G</span> &gt; </a></strong>
                </div>

                <div className={toggle} >
                  <div className="justifuItem"></div>
                  <div className="justifuItem"></div>
                  <div className="justifuItem"></div>
                </div>
              </div>
            </div>
            <div className="col-10 d-none d-md-block  secNav_wrapper">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p>other links new</p>
                </div>
                <div>
                  <p>other links</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
