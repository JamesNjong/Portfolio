import React, { Component } from "react";

import shot1 from "../AppUtilz/images/shot.jpg";
import shot2 from "../AppUtilz/images/shot1.jpg";

class Stacks extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="App-Stack " id="stack">
        <div className="bucket">
          <div className="AppStack-Content">
            <p className="font-text-bold size-h2 tx-light py-4 my-2">
              02. Stack
            </p>
            <div className="AppStack-Grid">
              <div className="stack-col-1">
                <div className="sc-1_top">
                  <img
                    src={shot2}
                    alt=""
                    className="img-fluid img-rounded img-span"
                  />
                </div>
                <div className="sc-1_bottom bg-mprimary">
                  <p className="font-text-bold size-h3">Languages</p>
                  <p className="font-text-regular size-h4">
                    Java, Kotlin, Swift, JavaScript, TypeScript, Python,
                    Dart,SQL.
                  </p>
                </div>
              </div>
              <div className="stack-col-2">
                <div className="sc-2_top bg-dark tx-light">
                  <p className="font-text-bold size-h3">Productivity</p>
                  <p className="font-text-regular size-h4">
                    Slack, Trello, ClickUp, Asana, Notion, Dropbox, Google Apps,
                    Pitch, Canva.
                  </p>
                </div>
                <div className="sc-2_bottom ">
                  <img
                    src={shot1}
                    alt=""
                    className="img-fluid img-rounded img-span"
                  />
                </div>
              </div>
              <div className="stack-col-3">
                <div className="sc-3_top bg-gradient tx-light">
                  <p className="font-text-bold size-h3">Frameworks and tools</p>
                  <p className="font-text-regular size-h4">
                    Bootstrap, React,Angular, Node, Express, Sass, Flutter,
                    Redux, NPM, Firebase, Git & GitHub, Android Jetpack, Android
                    Compose, UI-Kit, SwiftUi, AppScript, Airflow, Looker, RDBMS,
                    Apache Spark, Kafka, Shell Scripting, Hadoop, Mongodb,
                    Django, Springboot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stacks;
