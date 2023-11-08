import React, { Component } from "react";
import Details from "../Components/Details";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

class ProjectPage extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="project-page">
        <div className="bucket-custom">
          <Details />
          <Footer />
        </div>
      </div>
    );
  }
}

export default ProjectPage;
