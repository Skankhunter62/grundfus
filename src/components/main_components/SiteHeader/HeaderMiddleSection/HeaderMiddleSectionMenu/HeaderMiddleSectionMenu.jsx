import React, { useState } from "react";
import classes from "./HeaderMiddleSectionMenu.module.css";
import HeaderMenuLinks from "../../../../UIUX/FontsButtons/Links/HeaderMenuLinks/HeaderMenuLinks";
import { menuArray } from "../../../../../WC_WP_API/local_db/local_db";
import { FaBars, FaTimes } from "react-icons/fa";
import HeaderMiddleSectionMenuCatalog from "./HeaderMiddleSectionCatalog/HeaderMiddleSectionCatalog";

const HeaderMiddleSectionMenu = () => {
  const [isMobile, setIsMobile] = useState(false);
  const showNavbar = () => {
    setIsMobile(!isMobile);
  };
  return (
    <>
      <ul
        className={
          isMobile
            ? `${classes.headerMiddleSectionMenuList} ${classes.HeaderMiddleSectionResponsiveMenu}`
            : classes.headerMiddleSectionMenuList
        }
      >
        <HeaderMiddleSectionMenuCatalog
          categories={menuArray.slice(1)}
          onClick={showNavbar}
          link={menuArray[0].link}
        >
          {menuArray[0].title}
        </HeaderMiddleSectionMenuCatalog>
        {menuArray.slice(1).map((item) => (
          <li key={item.id} onClick={showNavbar}>
            <HeaderMenuLinks link={item.link}>{item.title}</HeaderMenuLinks>
          </li>
        ))}
        <button
          className={`${classes.HeaderMiddleSectionMenuOpenBtn} ${classes.HeaderMiddleSectionMenuCloseBtn}`}
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </ul>
      <button
        className={classes.HeaderMiddleSectionMenuOpenBtn}
        onClick={showNavbar}
      >
        <FaBars />
      </button>
    </>
  );
};

export default HeaderMiddleSectionMenu;
