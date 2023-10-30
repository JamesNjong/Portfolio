import React, { Component } from "react";
import desktophero from "../AppUtilz/images/image-hero-desktop.png";

class Comingsoon extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="coming-page bg-accent">
        <div className="bucket">
          <div className="content">
            <div className="content-left">
              <h1 className="size-h2 font-text-bold tx-primary">
                Coming Really Soon !
              </h1>
              <p className="size-h4 tx-light font-text-regular">
                To build software that out lives us, we must be intentional
                about every pixel. And since being intentional takes time, we
                are going to need a little more, before you can see this beauty.
                While you wait, you can watch our code branches grow on github.
              </p>
              <div className="button-group ">
                <button className="coming-button github-button font-link-regular ">
                  <a
                    href="https://github.com/JamesNjong"
                    target="blank"
                    className="font-text-link tx-dark gtgh"
                  >
                    View on Github
                  </a>
                </button>
              </div>
            </div>
            <div className="content-right">
              <img
                src={desktophero}
                alt="hero image"
                className="coming-hero img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comingsoon;
