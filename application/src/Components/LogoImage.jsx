import React from "react";

import logo from "../AppUtilz/Iconography/logo.svg";

const LogoImage = ({ height, width }) => {
  return (
    <img
      src={logo}
      className="logoImage"
      alt="logo"
      width={width}
      height={height}
      aria-label="Bootstrap"
    />
  );
};
export default LogoImage;
