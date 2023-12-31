import React, { Component } from "react";

import profile from "../AppUtilz/images/Profile.png";
import AnimationEffect from "../Components/AnimationEffect";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <AnimationEffect delay={1}>
        <div className="App-Home" id="home">
          <div className="bucket">
            <div className="AppHome-Content">
              <h1 className="tx-light font-text-bold size-h1 tij">
                this is James.
              </h1>
              <h1 className="tx-primary font-text-bold size-h3 content-who">
                a fullstack developer
              </h1>
              <p className="size-h4 tx-light content-desc">
                keen on building enduring native mobile experiences,
                interdisciplinary problem-solving and, leveraging data to drive
                growth or product development.
              </p>

              <div className="button-group">
                <button className="button-primary ">
                  {" "}
                  <a
                    href="https://calendly.com/jamesnjong/30min"
                    className="tx-dark"
                    target="blank"
                  >
                    Schedule a call
                  </a>{" "}
                </button>
                <button className="button-secondary">
                  <a href="#stack" className="tx-primary">
                    Learn more
                  </a>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </AnimationEffect>
    );
  }
}

export default Home;
