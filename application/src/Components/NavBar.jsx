import React, { Component } from "react";
import about from "../AppUtilz/Iconography/navigatoricons/about.svg";
import background from "../AppUtilz/Iconography/navigatoricons/background.svg";
import services from "../AppUtilz/Iconography/navigatoricons/services.svg";
import portfolio from "../AppUtilz/Iconography/navigatoricons/portfolio.svg";
import contact from "../AppUtilz/Iconography/navigatoricons/contact.svg";
import download from "../AppUtilz/Iconography/navigatoricons/download.svg";
import ItemIcon from "./ItemIcon";
import LogoImage from "./LogoImage";
import NavItem from "./NavItem";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    menuItems: [
      { sectionName: "Stack", sectionLink: "#stack", sectionIcon: background },
      {
        sectionName: "Background",
        sectionLink: "#background",
        sectionIcon: about,
      },
      {
        sectionName: "Services",
        sectionLink: "#services",
        sectionIcon: services,
      },
      {
        sectionName: "Portfolio",
        sectionLink: "#portfolio",
        sectionIcon: portfolio,
      },
      { sectionName: "Contact", sectionLink: "#contact", sectionIcon: contact },
    ],
    activeItem: "",
  };
  handleClicks = (item) => {
    this.setState({ activeItem: item });
  };

  render() {
    return (
      <div className="App-Navbar bg-primary-dark">
        <div className="bucket">
          <div className="AppNavbar-content">
            <div className="navbar-branding">
              <LogoImage height={40} width={40} />{" "}
            </div>
            <div className="navbar-menu">
              <div className="navbar-items">
                {this.state.menuItems.map((item, key) => {
                  return (
                    <NavItem
                      sectionName={item.sectionName}
                      sectionLink={item.sectionLink}
                      sectionIcon={item.sectionIcon}
                      sectionCLass={
                        item.sectionName == this.state.activeItem
                          ? "nav-link active-tab font-link-regular bg-primary-light tx-light"
                          : "nav-link  font-link-regular tx-primary"
                      }
                      key={key}
                      handleClicks={this.handleClicks}
                    />
                  );
                })}
              </div>
              <div className="navbar-resume">
                <a
                  href="https://drive.google.com/u/1/uc?id=1Vd-yt0_SzrGPXspmTEKAbcJcgZpq0uWF&export=download"
                  download
                  type="button"
                  className="buttonResume tx-primary font-link-regular bg-primary-dark "
                >
                  <ItemIcon
                    icon={download}
                    alt={"download logo"}
                    className="downloadButton-icon"
                  />

                  <span className="downloadButton-text">Get Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
