import React, { Component } from "react";
import data from "../AppUtilz/files/featuredProjects.json";
import Work from "../Components/Work";
import AnimationEffect from "../Components/AnimationEffect";

class Comingsoon extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    activeTab: "All",
    buttons: [
      { name: "All" },
      { name: "Backend" },
      { name: "Frontend" },
      { name: "Mobile" },
    ],
  };
  render() {
    return (
      <div className="portfolio-page bg-primary-dark">
        <div className="bucket">
          <div className="content">
            <div className="content-head">
              <h1 className="size-h3-mini font-text-bold tx-primary">
                {"/Portfolio/" + this.state.activeTab}{" "}
              </h1>
              <p className="size-h4 tx-light cta font-text-regular">
                These are solo projects, for which I have had to cook up designs
                on Lunacy, and then figured out how to code the backend,
                frontend and for some cases the mobile apps.
              </p>
            </div>
            <div className="content-menu">
              {this.state.buttons.map((i, key) => {
                return (
                  <AnimationEffect delay={key % 2 == 0 ? 0.5 : 0.8}>
                    <button
                      className={this.getButtonClass(i.name)}
                      onClick={() => {
                        this.setState({ activeTab: i.name });
                      }}
                    >
                      {this.state.activeTab != i.name
                        ? i.name
                        : `${i.name} (${this.getList().length})`}
                    </button>
                  </AnimationEffect>
                );
              })}
            </div>
            <AnimationEffect delay={0.8}>
              <div className="content-works">
                <div className="content-grid">
                  {this.getList().map((item, k) => {
                    return <Work key={k} project={item} />;
                  })}
                </div>
              </div>
            </AnimationEffect>
          </div>
        </div>
      </div>
    );
  }

  getButtonClass = (item) => {
    let tab = this.state.activeTab;

    if (item == tab) {
      return "menu-projects filter-active font-text-bold size-h3-mini tx-accent";
    } else {
      return "menu-projects font-text-bold size-h3-mini tx-accent";
    }
  };

  getList = () => {
    let tab = this.state.activeTab;
    if (tab == "Backend") {
      return data.Library.filter((i) => i.backend);
    } else if (tab == "Frontend") {
      return data.Library.filter((i) => i.frontend);
    } else if (tab == "Mobile") {
      return data.Library.filter((i) => i.mobile);
    }
    return data.Library;
  };
}

export default Comingsoon;
