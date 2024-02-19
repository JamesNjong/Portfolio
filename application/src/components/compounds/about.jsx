import React, { Component } from 'react';


function About() {
    return ( 
        <section className="aboutme-container bg-dark tx-light">
          <div className="bucket">
          <div className="aboutme-content py-11 md:py-1 "> 
        <div className="about-header border-line gap-4">
          <h2
            className="font-ultrabold text-l "
          >
            02. About me
          </h2>

          <h2 className="font-extrabold   text-4xl md:text-8xl">Not the most but the only.</h2>
          
        </div>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 font-regular size-h4">
          
            <div className="whour ab-item">
              <p className="text-regular">
                Hello, my name is James, and I am{" "}
                <span className="font-bold tx-primary">creative</span> mathematician with a
                passion for crafting solutions to every day business challenges for people and organizations with audacious goals.
              </p>
            </div>

            <div className="whatudo ab-item">
              <p className="font-regular">
              Today, I get to blend these two worlds seamlessly, crafting
                programmable solutions that address real-world business needs. I
                thrive in collaborative environments where my analytical mind
                and technical skills can contribute to a shared vision.
              </p>
            </div>

            <div className="whatudo ab-item">
              <p className="text-regular">
                My early love for mathematics laid the foundation for my logical
                thinking and <span className="font-bold tx-primary">problem-solving</span>{" "}
                gallantry, while my passion for technology led me to the world of
                <span className="font-bold tx-primary"> full-stack</span> development.
                
              </p>
            </div>
            
            <div className="whatuwant ab-item">
              <p className="text-regular">
                At the moment, I am keen on teams solving problems at the heart
                of business and technology, and with needs in either:{" "}
                <span className="font-bold tx-primary">mobile development</span>,
                <span className="font-bold tx-primary"> frontend web development</span>,
                <span className="font-bold tx-primary"> backend web development</span> or,{" "}
                <span className="font-bold tx-primary">
                  quality assurance engineering.
                </span>
              </p>
            </div>

        </div> 
      </div>
          </div>
        </section>
     );
}

export default About;