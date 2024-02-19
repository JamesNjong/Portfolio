import React, { Component } from "react";

const Accordion = ({ question, response, idx }) => {
  return (
    <div class="relative mb-3">
    <h6 class="mb-0">
      <button
        class="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
        data-collapse-target="collapse-1"
      >
        <span>{question}</span>
        <i class="absolute right-0 pt-1 text-xs fa fa-plus group-open:opacity-0"></i>
        <i class="absolute right-0 pt-1 text-xs opacity-0 fa fa-minus group-open:opacity-100"></i>
      </button>
    </h6>
    <div
      data-collapse="collapse-1"
      class="h-0 overflow-hidden transition-all duration-300 ease-in-out"
    >
      <div class="p-4 text-sm leading-normal text-blue-gray-500/80">
        {response}
      </div>
    </div>
  </div>
  );
};
export default Accordion;
