import React, { Component } from 'react';


function Footer() {
    const socilist = [
      { item: "TW", ref: "/twitter", arial: "" },
      { item: "LN", ref: "/linkedin", arial: "" },
      { item: "GH", ref: "/github", arial: "" }, 
    ];
    return (
      <section className="footer-container dark-bg tx-light">
        <div className="footer-content flex flex-col items-center">
          <footer className=" text-gray3 border-gray2 container-space md:pb-[100px] pb-[50px]">
            <ul className="flex items-center justify-center">
              {socilist.map((i, k) => {
                return (
                  <li className="md:mr-[60px] mr-[20px] last:mr-0" key={k}>
                    <a
                      href={i.ref}
                      aria-label={i.arial}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" md:text-[18px] text-[10px] text-dark font-extrabold"
                    >
                      {i.item}
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className="pt-[10px] pb-[20px] text-center md:text-[20px] text-[10px] text-gray4">
              Connect with me{" "}
              <a href="mailto:njongjames@outlook.com" className="underline">
                njongjames@outlook.com
              </a>
            </p>
  
            <div className="border-t border-solid font-extrabold md:text-[16px] text-[8px] flex items-center justify-between md:pt-[50px] pt-[10px] ">
              <div>
                <p className="shade-text">this is James</p>
              </div>
              <small className="shade-text">
                ©2023 - All rights reserved
              </small>
            </div>
          </footer>
        </div>
      </section>
    );
  }
  

export default Footer;