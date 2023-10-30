import React, { Component } from "react";

import profile from "../AppUtilz/images/Profile.png";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="App-Home" id="home">
        <div className="bucket">
          <div className="AppHome-Content">
            <h1 className="tx-primary font-text-bold size-h6">
              this is James.
            </h1>
            <h1 className="tx-light font-text-bold size-h2">
              The versatile problem solver for your product or growth teams.
            </h1>
            <p className="size-h4 tx-light content-desc">
              Add an eloquent, versatile and proactive problem solver to help
              drive value creation on your team. James offers expertise in
              fullstack software development, data engineering, and mobile
              application development.
            </p>

            <div className="button-group">
              <button className="button-primary mx-4">Schedule a call</button>
              <button className="button-secondary">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
