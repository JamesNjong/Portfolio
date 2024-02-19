import React, { Component } from 'react';


function Stack() {
    let tools = ["Java","Python","Kotlin","Swift","Dart", "TypeScript","NextJS","Angular","Django","Springboot","Flutter","ReactNative","Firebase","MongoDB","Github", "Android Studio", "Android Jetpack", "Compose", "Jest","Mocha","Cypress","Selenium","Dagger-Hilt","Room","SQL","Retrofit"]
    return (    <div className="stack-container lg:my-11 lg:py-11 flex flex-col justify-center items-center">
      <div className="bucket">
      <div className="stack-content py-11">
      <div className="stack-content-header flex flex-col items-start lg:px-8">
        <h3 className="font-ultrabold text-l text-start"> 
          <span className='shade-text text-xl'>2.1 Tech Stack</span>
        </h3>
        <div className="py-11">
        <h2 className="font-extrabold tx-light text-2xl md:text-5xl lg:text-7xl">
                Stress-free onboarding.
            </h2>
            <p className="font-regular tx-light text-l md:text-2xl">powered by experience with the tools you use</p>
        </div>
        
      </div>
      <div className="stack-content-body flex gap-2 justify-center items-center">
        {
            tools.map((item, key)=>{return (
                <div className="sc-body_grid-item bg-dark">
                    <div className="font-bold text-center text-center text-sm md:text-3xl shade-text p-3 md:p-8"
                    key={key}>{item}</div>
                </div>
            )})
        }
      </div>
    </div>
      </div>
  </div>  );
}

export default Stack;