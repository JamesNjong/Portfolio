import React, { Component } from "react";
import story from "../AppUtilz/Iconography/story.svg";

const UserStory = ({ storyHead, storyTale }) => {
  return (
    <div className="user-story d-flex flex-row gap-2 my-3">
      <img src={story} alt="=>" height={30} />
      <p className="story-text text-dark size-h5 font-link-regular">
        <span className="story-text text-dark font-text-medium">
          {storyHead}
        </span>
        {storyTale}
      </p>
    </div>
  );
};

export default UserStory;
