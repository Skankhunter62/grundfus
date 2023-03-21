import React from "react";
import classes from "./HeaderMenuLinks.module.css";
import { NavLink } from "react-router-dom";

const HeaderMenuLinks = ({ children, link }) => {
  return (
    //
    <NavLink to={link} className={classes.myHeaderMenuSingleLink}>
      {children}
    </NavLink>
  );
};

export default HeaderMenuLinks;
