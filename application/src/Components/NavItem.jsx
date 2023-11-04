import React, { useState } from "react";
import ItemIcon from "./ItemIcon";

const NavItem = ({ sectionLink, sectionName, sectionCLass, handleClicks }) => {
  return (
    <a
      className={sectionCLass}
      aria-current="page"
      href={sectionLink}
      onClick={() => handleClicks(sectionName)}
    >
      <span className="nav-link_text tx-light">{sectionName}</span>
    </a>
  );
};
export default NavItem;
