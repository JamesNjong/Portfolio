import React, { Component } from "react";
import { Link } from "react-router-dom";
import github from "../AppUtilz/Iconography/socials/Github.svg";
import live from "../AppUtilz/Iconography/live.svg";
import arrow from "../AppUtilz/Iconography/arrowup.svg";
import AnimationEffect from "../Components/AnimationEffect";

const Work = ({ project }) => {
  const about = project.name;

  return (
    <div className="work-item bg-accent">
      <div className="work-content">
        <div className="work-header bg-dark  ">
          <h1 className="size-h3-mini font-text-bold tx-primary work-heading">
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
          <p className="font-text-regular tx-light work-description">
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
              className="font-link-regular tx-light"
            >
              <span>Learn More</span>
              <img src={arrow} height={24} width={24} alt="" />
            </Link>
          </div>
          <a
            href={project.github}
            target="blank"
            className="work-github font-link-regular"
          >
            <img src={github} height={30} width={30} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
