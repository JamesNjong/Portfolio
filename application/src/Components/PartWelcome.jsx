import React, { Component } from "react";

const PartWelcome = ({ projectName, projectSummary, projectButton }) => {
  return (
    <div class="p-md-5 mb-4 bg-accent tx-light justify-content-center rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 font-text-bold">{projectName}</h1>
        <p class="col-md-8 font-text-regular size-h4">{projectSummary}</p>

        <button
          class="button-primary btn-lg my-5 font-link-regular"
          type="button"
        >
          <a href={projectButton.link} className="tx-dark font-link-regular">
            {projectButton.text}
          </a>
        </button>
      </div>
    </div>
  );
};
export default PartWelcome;
