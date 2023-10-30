import React, { Component } from "react";

import data from "../AppUtilz/files/featuredProjects.json";
import hub from "../AppUtilz/Iconography/uparrow.svg";
import { Link } from "react-router-dom";

class Featured extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    section: "Portfolio",
    heading: "05. Featured Projects",
  };
  getImage = (image) => {
    return require("../AppUtilz/images/" + image);
  };

  getClass = (key) => {
    if (key != 2) {
      return "portfolio-item portfolio-item-single";
    }
    return "portfolio-item portfolio-item-span";
  };
  render() {
    return (
      <section className="portfolios-page" id="portfolio">
        <div className="bucket">
          <div className="portfolio-content-container">
            <div className="pcc-headings my-3 py-3">
              <h3 className="tx-light size-h3 font-text-bold">
                {this.state.heading}{" "}
              </h3>
            </div>
            <div className="scroll-container">
              <div className="pcc-body">
                {data.featured.map((item, key) => {
                  return (
                    <div className={item.classnames}>
                      <div className="pcc-item_top">
                        <p className="font-text-medium size-h3">
                          {item.heading}
                        </p>
                        <p className="font-text-regular size-h4 my-4">
                          {item.desc}
                        </p>

                        <div className="livelinks">
                          <div className="livelinks-item web-link">
                            <a
                              href={item.livelink}
                              className="live_link tx-dark font-link-bold"
                              target="_blank"
                            >
                              Download APK
                            </a>
                            <img src={hub} />
                          </div>
                          <div className="livelinks-item github-link">
                            <a
                              href={item.github}
                              className="live_link tx-dark font-link-bold"
                              target="_blank"
                            >
                              View on Github
                            </a>

                            <img src={hub} />
                          </div>
                        </div>
                      </div>

                      <img
                        src={this.getImage(item.image)}
                        alt=""
                        height={300}
                        width={300}
                        className="img-fluid img-rounded img-span shadow-sm"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Featured;
