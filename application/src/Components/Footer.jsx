import React, { Component } from "react";
import github from "../AppUtilz/Iconography/socials/Github.svg";
import linkedin from "../AppUtilz/Iconography/socials/LinkedIN.svg";
import whatsapp from "../AppUtilz/Iconography/socials/WhatsApp.svg";
import outlook from "../AppUtilz/Iconography/socials/Outlook.svg";
import twitter from "../AppUtilz/Iconography/socials/Twitter.svg";
import logo from "../AppUtilz/Iconography/logo.svg";
import uparrow from "../AppUtilz/Iconography/brokenarrow_up.svg";

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="footer  tx-primary bg-dark">
        <div className="bucket">
          <div className="footer-content">
            <div className="foot-top">
              <h2 className="tx-light font-text-bold size-h3">
                "we are looking for a guy who's going to work hard and work hard
                from day one, and I think such a guy should bring a lot of
                versatility to the team"
              </h2>
              <div className="foot-buttons">
                <button className="button-primary mx-4">Schedule a call</button>
                <button className="button-secondary">Get Resume</button>
              </div>
            </div>
            <div className="foot-container">
              <div className="foot-middle font-text-medium">
                <div className="ft-middle_col-1">
                  <p className="font-text-bold tx-light logo-class">
                    <img src={logo} height={60} width={60} />
                    this is James
                  </p>
                  <p className="tx-light">
                    The versatile problem solver for your team
                  </p>
                  <div className="foot_socials ">
                    <a
                      href="https://github.com/JamesNjong/"
                      className="social_nav"
                      target="_blank"
                    >
                      {" "}
                      <img
                        src={github}
                        width="30"
                        alt=""
                        className="img-fluid social_icon m-2 "
                      />{" "}
                    </a>
                    <a
                      href="https://www.linkedin.com/in/james-jr-njong/"
                      target="_blank"
                      className="social_nav"
                    >
                      {" "}
                      <img
                        src={linkedin}
                        width="30"
                        alt=""
                        className="img-fluid social_icon m-2 "
                      />{" "}
                    </a>
                    <a
                      href="https://twitter.com/James_J_Njong"
                      target="_blank"
                      className="social_nav"
                    >
                      {" "}
                      <img
                        src={twitter}
                        width="30"
                        alt=""
                        className="img-fluid social_icon m-2"
                      />{" "}
                    </a>
                    <a
                      href="mailto:njongjames@outlook.com"
                      target="_blank"
                      className="social_nav"
                    >
                      {" "}
                      <img
                        src={outlook}
                        width="30"
                        alt=""
                        className="img-fluid social_icon m-2"
                      />{" "}
                    </a>
                    <a
                      aria-label="Chat on WhatsApp"
                      href="https://wa.me/+237674811226"
                      target="_blank"
                      rel="noreferrer"
                      className="social_nav"
                    >
                      {" "}
                      <img
                        src={whatsapp}
                        width="30"
                        alt=""
                        className="img-fluid social_icon m-2"
                      />{" "}
                    </a>
                  </div>
                </div>
                <div className="ft-middle_col-2">
                  <p className="">Navigate</p>
                  <a
                    href="#stack"
                    className="footer_nav tx-light font-link-regular "
                  >
                    Stack
                  </a>{" "}
                  <a
                    href="#background"
                    className="footer_nav  tx-light font-link-regular"
                  >
                    Background
                  </a>
                  <a
                    href="#services"
                    className="footer_nav  tx-light font-link-regular"
                  >
                    Services
                  </a>
                  <a
                    href="#stack"
                    className="footer_nav  tx-light font-link-regular"
                  >
                    Portfolio
                  </a>
                </div>
                <div className="ft-middle_col-3">
                  <p className="">Github</p>
                  <a href="" className="footer_nav  tx-light font-link-regular">
                    Podium
                  </a>{" "}
                  <a href="" className="footer_nav  tx-light font-link-regular">
                    Nkolo
                  </a>
                  <a href="" className="footer_nav  tx-light font-link-regular">
                    Kombi
                  </a>
                </div>
              </div>
              <hr />
              <div className="foot-bottom ">
                <span className="cta font-text-bold tx-light">
                  © James J. Njong 2023
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
