import React, { Component } from "react";

import shot1 from "../AppUtilz/images/shot.jpg";
import shot2 from "../AppUtilz/images/shot1.jpg";

class Help extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="App-Stack " id="services">
        <div className="bucket">
          <div className="AppStack-Content">
            <p className="font-text-bold size-h2 tx-light py-4 my-2">
              04. Services
            </p>
            <div className="AppStack-Grid">
              <div className="stack-col-1">
                <div className="sc-1_top">
                  <img
                    src={shot2}
                    alt=""
                    className="img-fluid img-rounded img-span"
                  />
                </div>
                <div className="sc-1_bottom bg-mprimary">
                  <p className="font-text-bold size-h3-mini">Web Development</p>
                  <p className="font-text-regular size-h4">
                    Develop and maintain both the front-end and back-end
                    components of web applications.
                  </p>
                </div>
              </div>
              <div className="stack-col-2">
                <div className="sc-2_top bg-dark tx-light">
                  <p className="font-text-bold size-h3-mini">
                    Software Testing
                  </p>
                  <p className="font-text-regular size-h4">
                    Establish, document, and execute test cases for web and
                    mobile applications.
                  </p>
                </div>
                <div className="sc-2_bottom ">
                  <img
                    src={shot1}
                    alt=""
                    className="img-fluid img-rounded img-span"
                  />
                </div>
              </div>
              <div className="stack-col-1">
                <div className="sc-1_top">
                  <img
                    src={shot2}
                    alt=""
                    className="img-fluid img-rounded img-span"
                  />
                </div>
                <div className="sc-1_bottom bg-mprimary">
                  <p className="font-text-bold size-h3-mini">
                    Mobile Development
                  </p>
                  <p className="font-text-regular size-h4">
                    Develop and maintain native or hybrid mobile applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Help;
