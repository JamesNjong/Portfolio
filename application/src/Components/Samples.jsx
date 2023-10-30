import React, { Component, useState } from "react";

import data from "../AppUtilz/files/featuredProjects.json";
import folder from "../AppUtilz/Iconography/folder_open.svg";

class Samples extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    itemClass: "library-item bg-dark",
  };
  render() {
    return (
      <div className="bg-primary-dark libraryPage">
        <div className="bucket">
          <div className="App-Scroll-Container">
            <div className="github-grid">
              {data.Library.map((lib, key) => {
                return this.Item(lib, key);
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  setItemClass = (klas) => {
    this.setState({ itemClass: klas });
  };

  Item = (item, keyz) => {
    return (
      <div className={this.state.itemClass} key={keyz}>
        <img src={folder} height={30} width={30} alt="folder image" />
        <div className="li-name">
          <p className="size-h4 tx-primary">{item.name}</p>
        </div>
        <div className="li-desc">
          <p className="tx-light ">{item.desc}</p>
        </div>
        <div className="li-tools">
          {item.tools.map((tool, index) => {
            return (
              <div
                className="li-tools_item bg-primary-dark tx-light"
                key={index}
              >
                {tool}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
}

export default Samples;
