import React, { Component } from 'react';

import calabot from "../../assets/images/preview_calabot.png"; 
import nkolo from "../../assets/images/preview_nkolo.png";
import zeword from "../../assets/images/preview_zeword.png";  
import { Link } from 'react-router-dom';


function Projects() {
    return ( <section className="  allprojects bg-dark">
        <div className="bucket dark-bg tx-light mt-11 mb-11">
            <div className=" projects-cta  flex flex-col xl:flex-row justify-center items-center gap-11">
                <div className="projects-cta_left">
                    <h2 className="font-extrabold text-4xl md:text-7xl">Beyond what was featured !</h2>
                </div>
                <div className="">
                <div className="hero-cta flex flex-col gap-4 justify-around items-start">
              <div className="font-regular">
                <p className="text-xl">There is a larger reservoir of exciting projects for stacks that most certainly include yours. Some of these projects have never been released and you would be one in a select group of people who've seen this magic. </p>
              </div>
              <div className="flex justify-center items-center gap-3">
                <div className="flex justify-center gap-2">
                  <img src={nkolo} alt="" className="preview"  />
                  <img src={calabot} alt="" className="preview" />
                  <img src={zeword} alt="" className="preview" />
                </div>
                <button 
                  className="inline-flex  button-primary  transition-all flex justify-center items-center flex-col"
                >
                  <p className="font-ultrabold font-regular">
                    <Link to="/portfolio"><span>View all projects</span></Link>
                  </p>
                </button>
              </div>
            </div>
                </div>
            </div>
        </div>
    </section> );
}

export default Projects;