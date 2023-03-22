import React, { useState } from "react";
import classes from "./HeaderMiddleSectionMenu.module.css";
import HeaderMenuLinks from "../../../../UIUX/FontsButtons/Links/HeaderMenuLinks/HeaderMenuLinks";
import { menuArray } from "../../../../../WC_WP_API/local_db/local_db";
import { FaBars, FaTimes } from "react-icons/fa";
import HeaderMiddleSectionMenuCatalog from "./HeaderMiddleSectionCatalog/HeaderMiddleSectionCatalog";
import { Link } from "react-router-dom";
const HeaderMiddleSectionMenu = () => {
  const [isMobile, setIsMobile] = useState(false);
  const changeNavbarState = (state) => {
    setIsMobile(false);
  };
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
          isMobile={isMobile}
          changeNavbarState={changeNavbarState}
          // link={menuArray[0].link}
        >
          {menuArray[0].title}
        </HeaderMiddleSectionMenuCatalog>

        {menuArray.slice(1).map((item) => (
          <li key={item.id} onClick={changeNavbarState}>
            <HeaderMenuLinks link={item.link}>{item.title}</HeaderMenuLinks>
          </li>
        ))}
        <button
          className={`${classes.HeaderMiddleSectionMenuOpenBtn} ${classes.HeaderMiddleSectionMenuCloseBtn}`}
          onClick={changeNavbarState}
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
