import React, { Component } from "react";

const Accordion = ({ question, response, idx }) => {
  return (
    <div class="accordion-item">
      <h2 class="accordion-header" id={"flush-heading" + idx}>
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#flush-collapse" + idx}
          aria-expanded="false"
          aria-controls={"flush-collapse" + idx}
        >
          {question}
        </button>
      </h2>
      <div
        id={"flush-collapse" + idx}
        class="accordion-collapse collapse"
        aria-labelledby={"flush-heading" + idx}
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">{response}</div>
      </div>
    </div>
  );
};
export default Accordion;
