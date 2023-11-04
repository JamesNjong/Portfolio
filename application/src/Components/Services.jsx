import React, { Component } from "react";
import { Link } from "react-router-dom";
import arrow from "../AppUtilz/Iconography/arrowup.svg";

class Services extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    return (
      <div className="services-page bg-gradient" id="services">
        <div className="bucket">
          <div className="service-content">
            <div className="service-header">
              <h1 className="tx-light font-text-bold size-h2">02. Services</h1>
            </div>
            <div className="service-grid">
              <div className="service-item fullstack-service">
                <div className="si-top">
                  <p className="font-text-bold size-h3-mini tx-light">
                    Fullstack Web Development
                  </p>
                </div>
                <div className="si-bottom tx-light">
                  <p className="font-text-regular size-h4">
                    Develop and maintain both the front-end and back-end
                    components of web applications.
                  </p>
                </div>
                <div className="si-button bg-primary-dark">
                  <Link to="/portfolio">
                    <button className="button-projects tx-light">
                      View Projects{" "}
                      <img src={arrow} height={30} width={30} alt="up" />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="service-item mobile-service">
                <div className="si-top">
                  <p className="font-text-bold size-h3-mini tx-light">
                    Mobile Application Development
                  </p>
                </div>
                <div className="si-bottom">
                  <p className="font-text-regular tx-light size-h4">
                    Develop and maintain both the front-end and back-end
                    components of web applications.
                  </p>
                </div>
                <div className="si-button bg-primary-dark">
                  <Link to="/portfolio">
                    <button className="button-projects tx-light">
                      View Projects{" "}
                      <img src={arrow} height={30} width={30} alt="up" />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="service-item mobile-service">
                <div className="si-top">
                  <p className="font-text-bold size-h3-mini tx-light">
                    Software Testing
                  </p>
                </div>
                <div className="si-bottom">
                  <p className="font-text-regular tx-light size-h4">
                    Establish, document, and execute test cases for web and
                    mobile applications.
                  </p>
                </div>
                <div className="si-button bg-primary-dark">
                  <Link to="/portfolio">
                    <button className="button-projects tx-light">
                      View Projects{" "}
                      <img src={arrow} height={30} width={30} alt="up" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
