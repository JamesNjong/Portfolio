import React, { Component } from "react";
import data from "../AppUtilz/files/details.json";
import PartWelcome from "./PartWelcome";
import PartOverview from "./PartOverview";
import PartStack from "./PartStack";
import PartFaqs from "./PartFaqs";
import backarrow from "../AppUtilz/Iconography/backbutton.svg";
import { Link } from "react-router-dom";

class Details extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    const splitUrl = window.location.href.split("/");
    let dataFile = splitUrl[splitUrl.length - 1];
    const dataJson = this.getData(dataFile);

    return (
      <div className="project-home bg-primary-dark">
        <div className="project-home_content py-5">
          <div class="container py-4">
            <header class="pb-3 mb-4 border-bottom">
              <Link
                to="/portfolio"
                className="font-link-regular button-primary"
              >
                <img src={backarrow} alt="" />
                all projects
              </Link>
              <span class="fs-4 font-text-bold tx-light">
                {`./portfolio/projects/${splitUrl[
                  splitUrl.length - 1
                ].toLowerCase()}/details`}
              </span>
            </header>
            <PartWelcome
              projectName={dataJson.projectName}
              projectSummary={dataJson.projectSummary}
              projectButton={dataJson.jumbutton}
            />
            <div class="row align-items-md-stretch">
              <PartOverview
                overview={dataJson.userStories.overview}
                stories={dataJson.userStories.stories}
              />
              <div class="col-md-6 ">
                <PartStack
                  overstack={dataJson.projectStack.overview}
                  github={dataJson.projectStack.github}
                />
                <PartFaqs faqs={dataJson.Faqs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  getData = (project) => {
    switch (project) {
      case "runz":
        return data.runz;
      case "kombimobile":
        return data.kombimobile;
      case "kombiapi":
        return data.kombiapi;
      case "kombiweb":
        return data.kombiweb;
      case "nkolomobile":
        return data.nkolomobile;
      case "nkoloweb":
        return data.nkoloweb;
      case "nkoloapi":
        return data.nkoloapi;
      case "podiumweb":
        return data.podiumweb;
      case "podiummobile":
        return data.podiummobile;
      case "podiumapi":
        return data.podiumapi;
      case "chakka":
        return data.chakka;
      case "linkoutmobile":
        return data.linkoutmobile;
      case "linkoutweb":
        return data.linkoutweb;
      case "linkoutapi":
        return data.linkoutapi;
      default:
        return data.zeword;
    }
  };
}

export default Details;
