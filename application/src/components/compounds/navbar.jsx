import * as React from "react";
import { Component } from "react";  
import logo from "../../assets/images/logo.svg"; 
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <nav aria-label="Main menu" className="nav-container bg-primary-dark tx-light">
      <div className="bucket">
      <div id="nav-main" className="nav-main">
        <div className="flex items-center">
          <div>
          <img src="/logo.svg" className="flex" height={44} width={44} alt="" />
          </div>
        </div>

        <div className="flex justify-center h-full p-2">
          <div className="flex items-center gap-3 h-full">

            <div className="opentowork hidden md:inline-flex items-center gap-2">
              <div className="sketch">
                <svg width="33.500244px" height="7px" viewBox="0 0 33.500244 7" version="1.1"  xmlns="http://www.w3.org/2000/svg">
                  <g id="Group-2">
                    <path d="M0 3.5C0 1.567 1.63208 0 3.64535 0C5.65862 0 7.2907 1.567 7.2907 3.5C7.2907 5.433 5.65862 7 3.64535 7C1.63208 7 0 5.433 0 3.5Z" id="Oval-3" fill="#e6ac7d" fill-rule="evenodd" stroke="none" />
                    <path d="M3.64551 3.5L33.0002 3.5" id="Line" fill="none" fill-rule="evenodd" stroke="#e6ac7d" stroke-width="1" stroke-linecap="square" />
                  </g>
                </svg>
              </div>
              <p className="">open to work</p></div>
             
            <button 
              className="hidden md:inline-flex button-secondary  transition-all flex justify-center items-center flex-col"
            >
              <Link to="/portfolio"><span className="font-regular text-dark">View projects</span></Link>
            </button>

            <button 
              className="inline-flex  button-primary  transition-all flex justify-center items-center flex-col"
            >
              <Link to="https://drive.google.com/u/1/uc?id=1Vd-yt0_SzrGPXspmTEKAbcJcgZpq0uWF&export=download">
                <span className="font-regular tx-dark">Get Résumé</span></Link>
  
            </button>

          </div>
        </div>
      </div> 
      </div>
    </nav>
  );
}

export default NavBar;
