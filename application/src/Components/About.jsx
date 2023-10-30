import React, { Component } from "react";
import background from "../AppUtilz/files/background.json";

class About extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    currentTab: "Experience",
    selectedTabClass:
      "About-tab_item-selected size-h4 tx-dark bg-light font-text-bold",
    tabClass: "About-tab_item size-h4 tx-light bg-dark font-text-bold",
    tabs: ["Experience", "Education", "Certifications", "Volunteering"],
  };
  render() {
    return (
      <div className="App-About bg-primary-dark" id="about">
        <div className="bucket">
          <div className="AppAbout-Content">
            <h4 className="tx-light size-h2 font-text-bold">About Me !</h4>
            <div className="AppAbout-Content_Grid">
              <div className="col-left">
                <p className="font-text-medium tx-primary size-extra">
                  Tech Stack
                </p>
                <div className="stack-item border-line-top tx-light">
                  <div className="stack-item_category">
                    <p className="size-h4 font-text-medium tx-primary">
                      Languages
                    </p>
                  </div>
                  <div className="stack-item_list">
                    <p className="font-text-regular size-h4">
                      Java, Kotlin, Swift, JavaScript, TypeScript, Python, Dart,
                      HTML, CSS, SQL,
                    </p>
                  </div>
                </div>
                <div className="stack-item border-line-top">
                  <div className="stack-item_category">
                    <p className="size-h4 font-text-medium tx-primary">
                      Frameworks & tools
                    </p>
                  </div>
                  <div className="stack-item_list tx-light">
                    <p className="font-text-regular size-h4">
                      Bootstrap, React,Angular, Node, Express, Sass, Flutter,
                      Redux, NPM, Firebase, Git & GitHub, Android Jetpack,
                      Android Compose, UI-Kit, SwiftUi, AppScript, Airflow,
                      Looker, RDBMS, Apache Spark, Kafka, Shell Scripting,
                      Hadoop, Mongodb
                    </p>
                  </div>
                </div>
                <div className="stack-item border-line-top">
                  <div className="stack-item_category">
                    <p className="size-h4 font-text-medium tx-primary">
                      Productivity
                    </p>
                  </div>
                  <div className="stack-item_list">
                    <p className="font-text-regular size-h4 tx-light">
                      Slack, Trello, ClickUp, Asana, Notion, Dropbox, Google
                      Apps, Pitch, Canva.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-right">
                <p className="tx-primary font-text-medium size-extra">
                  Profile
                </p>
                <p className="size-h4 tx-dark about-text">
                  <span className="about-text-1 tx-light">
                    Eloquent, versatile and proactive problem solver who helps
                    people and organizations create solutions that fast-track
                    growth, by leveraging a vast array of interdisciplinary
                    knowledge ganered through years of training as a
                    mathematician, and years of work in roles including sales,
                    research, android development and program management.
                  </span>{" "}
                  <br /> <br />
                  <span className="about-text-1 tx-light">
                    In recent years, I have focused primarily on process
                    engineering and project management for small integration
                    projects that help optimize sales performance and get the
                    most feedback from sales strategy implementation for an
                    early stage startup. Prior to this, I worked as industry
                    liaison for the African Institute for Mathematical
                    Sciences(AIMS-Cameroon), while also doubling as a research
                    and teaching assistant with focus on finance and statistics.
                  </span>
                  <br /> <br />
                  <span className="about-text-1 tx-light">
                    I am yet to learn the specifics of the challenges holding
                    out your growth, but I am confident that whatever it maybe,
                    I can help get you through.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
