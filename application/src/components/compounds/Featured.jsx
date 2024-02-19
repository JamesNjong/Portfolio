import React, { Component } from "react";

import data from "../../assets/files/featuredProjects.json"; 
import { Link } from "react-router-dom";

class Featured extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    section: "Portfolio",
    heading: "04. Featured Projects",
  };
  getImage = (image) => {
    return require("../../assets/images/" + image);
  };

  getClass = (key) => {
    if (key != 2) {
      return "portfolio-item portfolio-item-single";
    }
    return "portfolio-item portfolio-item-span";
  };
  render() {
    return (
      <section className="portfolios-page bg-dark tx-light" id="portfolio">
        <div className="bucket">
          <div className="portfolio-content-container">
            <div className="pcc-headings flex flex-col justify-center items-center my-3  py-3 md:py-11">
              <h3 className="text-lg font-ultrabold ">
                {this.state.heading}{" "}
              </h3>
              <h2 className="font-extrabold text-center text-3xl lg:text-7xl">Built to stop a headache, designed to embrace color.</h2>
            </div>
            <div className="scroll-container">
              <div className="pcc-body flex flex-col lg:grid lg:grid-cols-2">
                {data.featured.map((item, key) => {
                  return (
                    <div className={item.classnames}>
                      <div className="pcc-item_top">
                        <p className="font-extrabold tx-dark size-h3">
                          {item.name}
                        </p>
                        <div className="pcc-item_stack tx-dark py-4">
                          {item.tools.map((i, k) => {
                            return <span className="pcc-stack-item font-bold md:py-4">{i}</span>;
                          })}
                        </div>
                        <p className="font-regular tx-dark size-h4 my-4">
                          {item.desc}
                        </p>

                        <div className="livelinks py-8 ">
                          <div className="livelinks-item border-line  web-link size-h4">
                            <Link
                              to={{
                                pathname: `${item.github}`,
                              }}
                              className="live_link tx-dark font-extrabold"
                            >
                              Learn More
                            </Link>  
                          </div>
                        </div>
                      </div>

                      <div className="project-parts  md:inline-flex">
                        <img
                          src={this.getImage(item.image)}
                          alt="image"
                          className="img-fluid img-span "
                        />
                      </div>
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

  singleSpan = (item) => {
    return (
      <div className={item.classnames}>
        <div className="pcc-item_top">
          <p className="font-extrabold size-h3">{item.name}</p>
          <p className="font-regular size-h4 my-4">{item.desc}</p>
        </div>

        <div className="project-parts">
          <img
            src={this.getImage(item.image)}
            alt="image"
            height={400}
            width={600}
            className="img-fluid img-span"
          />
        </div>
      </div>
    );
  };
}

export default Featured;
