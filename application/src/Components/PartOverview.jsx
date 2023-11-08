import React, { Component } from "react";
import UserStory from "./UserStory";

const PartOverview = ({ overview, stories }) => {
  return (
    <div class="col-md-6">
      <div class="h-100 p-5  rounded-3 bg-mprimary">
        <h2 className="font-text-bold ">Overview</h2>
        <p>{overview}</p>
        <div className="user-stories my-4">
          {stories.map((item, key) => {
            return (
              <UserStory
                storyHead={item.storyHead}
                storyTale={item.storyTale}
                key={key}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default PartOverview;
