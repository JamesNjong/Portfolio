import React, { useState } from "react";
import ItemIcon from "./ItemIcon";

const NavItem = ({
  sectionLink,
  sectionName,
  sectionIcon,
  sectionCLass,
  handleClicks,
}) => {
  return (
    <a
      className={sectionCLass}
      aria-current="page"
      href={sectionLink}
      onClick={() => handleClicks(sectionName)}
    >
      <ItemIcon icon={sectionIcon} alt={sectionName} />
      <span className="nav-link_text">{sectionName}</span>

    </a>
  );
};
export default NavItem;
