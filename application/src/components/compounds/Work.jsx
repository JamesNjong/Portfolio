import React, { Component } from "react";

import { Link } from "react-router-dom";
import github from "../../assets/images/Github.svg"; 
import arrow from "../../assets/images/arrowup.svg"; 

function Work  ({ project })   {
  const about = project.name;

  return (
    <div className="work-item bg-accent">
      <div className="work-content">
        <div className="work-header bg-dark  ">
          <h1 className="size-h3-mini font-extrabold tx-primary work-heading">
            {`/ ${project.name.toLowerCase()}`}
          </h1>
          <p className="work-item_tools tx-accent">
            {project.tools.map((i, k) => {
              return (
                <span className="work-item_tools-item font-link-regular">
                  {i}
                </span>
              );
            })}
          </p>
          <p className="work-item_project button-secondary tx-light">
            {project.type}
          </p>
        </div>

        <div className="work-body">
          <p className="font-regular tx-light work-description">
            {project.desc}
          </p>
        </div>
        <div className="work-footer">
          <div className="work-footer_left">
            <Link
              to={{
                pathname: `/portfolio/projects/${project.dlink}`,
                query: { backurl: about },
              }}
              className="font-regular tx-light flex justify-center items-center"
            >
              <span>Learn More</span>
              <img src={arrow} height={24} width={24} alt="" />
            </Link>
          </div>
          <a
            href={project.github}
            target="blank"
            className="work-github font-regular"
          >
            <img src={github} height={30} width={30} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
