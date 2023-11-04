import React, { Component } from "react";
import about from "../AppUtilz/Iconography/navigatoricons/about.svg";
import background from "../AppUtilz/Iconography/navigatoricons/background.svg";
import services from "../AppUtilz/Iconography/navigatoricons/services.svg";
import portfolio from "../AppUtilz/Iconography/navigatoricons/portfolio.svg";
import contact from "../AppUtilz/Iconography/navigatoricons/contact.svg";
import hamburger from "../AppUtilz/Iconography/hamburger.svg";
import hamburger_close from "../AppUtilz/Iconography/hamburger_close.svg";
import ItemIcon from "./ItemIcon";
import LogoImage from "./LogoImage";
import NavItem from "./NavItem";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    menuItems: [
      {
        sectionName: "02. Services",
        sectionLink: "#services",
        sectionIcon: background,
      },
      {
        sectionName: "03. Stack",
        sectionLink: "#stack",
        sectionIcon: about,
      },
      {
        sectionName: "04. Portfolio",
        sectionLink: "#portfolio",
        sectionIcon: services,
      },
      {
        sectionName: "05. Background",
        sectionLink: "#background",
        sectionIcon: portfolio,
      },
      {
        sectionName: "06. Contact",
        sectionLink: "#contact",
        sectionIcon: contact,
      },
    ],
    activeItem: "",
    hamburger: false,
  };
  handleClicks = (item) => {
    this.setState({ activeItem: item, hamburger: false });
  };

  render() {
    return (
      <div className="App-Navbar bg-primary-dark">
        <div className="bucket">
          <div className="AppNavbar-content">
            <div className="navbar-branding">
              <LogoImage height={40} width={40} />{" "}
              <div className="navbar-ham ">
                <a
                  href="https://drive.google.com/u/1/uc?id=1Vd-yt0_SzrGPXspmTEKAbcJcgZpq0uWF&export=download"
                  download
                  type="button"
                  className="buttonResume font-link-bold tx-primary"
                >
                  <span className="buttonResume-span  font-text-bold  ">
                    Get Resume
                  </span>
                </a>

                <button
                  onClick={() => {
                    let val = this.state.hamburger;
                    this.setState({ hamburger: !val });
                  }}
                >
                  <img
                    src={this.state.hamburger ? hamburger_close : hamburger}
                    alt=""
                    className="ham-image img-fluid"
                  />
                </button>
              </div>
            </div>
            <div
              className={
                this.state.hamburger
                  ? "navbar-menu open-ham"
                  : "navbar-menu close-ham"
              }
            >
              <div className="navbar-items">
                {this.state.menuItems.map((item, key) => {
                  return (
                    <NavItem
                      sectionName={item.sectionName}
                      sectionLink={item.sectionLink}
                      sectionCLass={
                        item.sectionName == this.state.activeItem
                          ? "nav-link active-tab font-text-bold bg-primary-light tx-light"
                          : "nav-link  font-text-bold tx-primary"
                      }
                      key={key}
                      handleClicks={this.handleClicks}
                    />
                  );
                })}
              </div>
              <a
                href="https://drive.google.com/u/1/uc?id=1Vd-yt0_SzrGPXspmTEKAbcJcgZpq0uWF&export=download"
                download
                type="button"
                className="buttonResume inMenuResume font-link-bold tx-primary"
              >
                <span className="buttonResume-span  font-text-bold  ">
                  Get Resume
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  toggleDrawer = () => {
    let val = this.state.hamburger;
    this.setState({ hamburger: !val });
  };
}

export default NavBar;
