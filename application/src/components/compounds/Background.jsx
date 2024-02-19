import React, { Component } from "react";
import background from "../../assets/files/background.json";
import AnimationEffect from "../supports/AnimationEffect";
class Background extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    currentTab: "Experience",
    selectedTabClass:
      "tb About-tab_item-selected dark-bg  tx-dark  lg:pl-11 font-ultrabold",
    tabClass: "tb About-tab_item  tx-light font-extrabold",
    tabs: ["Experience", "Education", "Certifications", "Volunteering"],
  };
  render() {
    return (
      <div className="AppBackground dark-bg tx-light" id="background">
        <div className="bucket">
          <div className="bg-content ">
            <div className="header my-11">
            <h2 className="text-4xl md:text-7xl font-extrabold ">Background.</h2>
            <p className="font-medium text-2xl">Our claim to skill, knowledge and heart.</p>
            </div>
            <div className="AppBackground-Content ">
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
        {item}
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
          <div className="Tab-Content-item border-line-top ">
          <p className="Tab-Content-item_what  font-extrabold">
            {item.what}{" "}
          </p>
          <a
            href={item.link}
            className="size-h5 font-medium  where-link "
            target="blank"
          >
            {item.where}
          </a>{" "}
          <span className="Tab-Content-item_when  size-h5 font-regular ">
            {item.when}
          </span>
        </div>
        ))}
      </div>
    );
  };
}

export default Background;
