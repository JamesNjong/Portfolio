import React, { Component } from "react";
import Accordion from "./Accordion";

const PartFaqs = ({ faqs }) => {
  return (
    <div class="h-49 p-5 my-2 tx-dark bg-light rounded-3">
      <h2 className="font-text-bold">FAQs</h2>
      <div class="accordion  accordion-flush" id="accordionFlushExample">
        {faqs.map((item, index) => {
          return (
            <Accordion
              key={index}
              question={item.question}
              response={item.response}
              idx={item.idx}
            />
          );
        })}
      </div>
    </div>
  );
};
export default PartFaqs;
