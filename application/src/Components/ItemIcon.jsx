import React from "react";

const itemIcon = ({ icon, alt }) => {
  return (
    <img
      src={icon}
      className="item-iconImage"
      alt={alt}
      width={22}
      height={22}
      aria-label="Bootstrap"
    />
  );
};
export default itemIcon;
