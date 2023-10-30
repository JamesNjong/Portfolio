import React, { Component } from "react";
import frontend from "../AppUtilz/Iconography/services/frontend.svg";
import mobile from "../AppUtilz/Iconography/services/mobile.svg";
import de from "../AppUtilz/Iconography/services/de.svg";
import bi from "../AppUtilz/Iconography/services/bi.svg";
import backend from "../AppUtilz/Iconography/services/backend.svg";
import product from "../AppUtilz/Iconography/services/product.svg";

class Services extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    features: [
      {
        name: "Frontend Web Development",
        text: "Build client side applications with Javascript and associated frameworks like React and Angular.",
        classname: "service-item-light shadow-sm",
        image: frontend,
      },
      {
        name: "Mobile App Development",
        text: "Build high performant cross platform or native mobile apps with Java, Swift, Kotlin or Flutter (Dart).",
        classname: "service-item-secondary shadow-lg",
        image: mobile,
      },
      {
        name: "Data Engineering",
        text: "Build and maintain scalable data pipelines to make high quality data readily available for analytics with Python.",
        classname: "service-item-light shadow-sm",
        image: de,
      },
      {
        name: "Business Analytics",
        text: "Use classical analytics tools to fetch facts that imform corporate strategy and/or provide adequate feedback on market dynamics.",
        classname: "service-item-secondary shadow",
        image: bi,
      },

      {
        name: "Backend Web Development",
        text: "Build server side applications with Java, Python or JavaScript using associated frameworks like Springboot, Node, Express or Django.",
        classname: "service-item-secondary shadow",
        image: backend,
      },
      {
        name: "Product Management",
        text: "Leverage research experience to drive growth by prioritizing high impact features on the product roadmap.",
        classname: "service-item-secondary shadow",
        image: product,
      },
    ],
  };

  render() {
    return (
      <section className="services-page" id="services">
        <div className="bucket">
          <div className="services-content-container">
            <div className="scc-head_text">
              <h2 className=" size-h2 font-text-bold tx-light">
                How can I help ?
              </h2>
            </div>
            <div className="App-Scroll-Container">
              <div className="scc-body-row  ">
                {this.state.features.map((item) => {
                  return this.Service(item);
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  Service = (item) => {
    return (
      <div className={"service-item-light"}>
        <div className="service-grid-item_content">
          <img src={item.image} height={50} width={50} alt="service icon svg" />
          <p className="size-h4 font-text-bold  tx-primary">{item.name}</p>
          <p className="size-h5 tx-light">{item.text}</p>
        </div>
      </div>
    );
  };
}

export default Services;
