import React, { Component } from "react";

const PartStack = ({ overstack, github }) => {
  return (
    <div class="h-49 p-5 my-2 tx-light bg-dark rounded-3">
      <h2 className="font-text-bold">Project Stack</h2>
      <p>{overstack}</p>
      <a
        href={github}
        target="blank"
        class="my-3 button-secondary font-link-regular"
        type="button"
      >
        View on github
      </a>
    </div>
  );
};
export default PartStack;
