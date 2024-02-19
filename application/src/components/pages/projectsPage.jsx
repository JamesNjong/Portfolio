import React, { Component } from "react";
import data from "../../assets/files/featuredProjects.json";
import Work from "../compounds/Work";
import Footer from "../compounds/footer";
import AnimationEffect from "../../components/supports/AnimationEffect";

class Projects extends Component {
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
      <div className="portfolio-page bg-primary-dark flex flex-col justify-between">
        <div className="flex flex-col justyfy-center items-center gap-11 h-full"><div className="bucket">
          <div className="content">
            <div className="content-head">
              <h1 className="text-2xl md:text-5xl font-ultrabold tx-primary">
                {"/Portfolio/" + this.state.activeTab}{" "}
              </h1>
              <p className="size-h4 tx-light cta font-regular">
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
        <Footer/>
        </div>
      </div>
    );
  }

  getButtonClass = (item) => {
    let tab = this.state.activeTab;

    if (item == tab) {
      return "menu-projects filter-active font-extrabold text-2xl md:text-4xl tx-accent";
    } else {
      return "menu-projects font-extrabold text-2xl md:text-4xl tx-accent";
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

export default Projects;
