import React, { Component } from "react";
import background from "../AppUtilz/files/background.json";
import AnimationEffect from "./AnimationEffect";
class Background extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    currentTab: "Experience",
    selectedTabClass:
      "tb About-tab_item-selected size-h4 tx-primary bg-accent  font-text-bold",
    tabClass: "tb About-tab_item size-h4 tx-light font-text-bold",
    tabs: ["Experience", "Education", "Certifications", "Volunteering"],
  };
  render() {
    return (
      <div className="AppBackground bg-dark" id="background">
        <div className="bucket">
          <div className="bg-content">
            <div className="size-h2 font-text-bold tx-light">Background.</div>
            <div className="AppBackground-Content">
              <div className="scroll-container">
                <div className="Background-tabs">
                  {this.state.tabs.map((item, index) => {
                    return this.ColumnTabs(item, index);
                  })}
                </div>
              </div>
              <div className="Background-tab_Section">
                {this.loadComponent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  switchTab = (tab = "Experience") => {
    this.setState({ currentTab: tab });
  };

  ColumnTabs = (item, index) => {
    return (
      <span
        key={index}
        onClick={() => this.switchTab(item)}
        className={
          this.state.currentTab === item
            ? this.state.selectedTabClass
            : this.state.tabClass
        }
      >
        <AnimationEffect delay={1}>{item}</AnimationEffect>
      </span>
    );
  };

  loadComponent = () => {
    var content = [];
    switch (this.state.currentTab) {
      case "Experience":
        content = background.experience;
        break;
      case "Education":
        content = background.education;
        break;
      case "Certifications":
        content = background.certifications;
        break;
      default:
        content = background.volunteering;
        break;
    }
    return (
      <div className="Tab-Content">
        {content.map((item, index) => (
          <AnimationEffect delay={0.8}>
            <div className="Tab-Content-item border-line-top tx-light">
              <p className="Tab-Content-item_what size-h4 font-text-bold">
                {item.what}{" "}
              </p>
              <a
                href={item.link}
                className="size-h5 font-link-bold tx-primary where-link "
                target="blank"
              >
                {item.where}
              </a>{" "}
              <span className="Tab-Content-item_when  size-h5 font-text-regular ">
                {item.when}
              </span>
            </div>
          </AnimationEffect>
        ))}
      </div>
    );
  };
}

export default Background;
