import React, { Component } from 'react';

import calabot from "../../assets/images/preview_calabot.png"; 
import nkolo from "../../assets/images/preview_nkolo.png";
import zeword from "../../assets/images/preview_zeword.png";  
import headshot from "../../assets/images/headshot.png"; 


function Hero() {
    return ( 

        <section className="hero-container tx-light">
        <div className="bucket">
        <div className="hero-content ">
           <h1 className=" text-center font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl ">
           a problem solver  
            <span className="font-extrabold shade-text"> beyond forgery or imagination.</span>
           </h1>
           <div className="img-wrapper">
            <img src={headshot} alt=". . . " className="" />
           </div>
           <div className="flex w-full justify-between items-center gap-4">
            <div className="hero-starts hidden md:flex gap-11 ">
              <div className="hero-stats_item">
                <div className="font-ultrabold tx-light text-7xl">08</div>
                <div className="font-regular ">Fullstack web projects <br/> completed.</div>
              </div>
              <div className="hero-stats_item">
                <div className="font-ultrabold tx-light text-7xl">05</div>
                <div className="font-regular ">Mobile applications <br/>published</div>
              </div>
            </div>
            <div className="hero-cta flex flex-col gap-4 justify-around items-start">
              <div className="font-regular">
                <p className="font-regular">A problem solver adaptable to the needs of your team, its processes and preferences. Familiar with industry standards and tools for building scalable solutions.</p>
              </div>
              <div className="flex justify-center items-center gap-3">
                <div className="preview-container flex justify-center gap-2">
                  <img src={nkolo} alt="" className="preview" />
                  <img src={calabot} alt="" className="preview" />
                  <img src={zeword} alt="" className="preview" />
                </div>
                <button 
                  className="inline-flex  button-primary  transition-all flex justify-center items-center flex-col"
                >
                  <p className="font-regular tx-dark text-s ">
                    Learn more
                  </p>
                </button>
              </div>
            </div>
           </div>
        </div>
        </div>
      </section>

     );
}

export default Hero;