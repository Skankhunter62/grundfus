import React from "react";
import classes from "./SimpleBreadCrumbs.module.css";
import { NavLink } from "react-router-dom";

const SimpleBreadCrumbs = ({ url, title }) => {
  return (
    <div className={classes.breadCrumbsLayout}>
      <NavLink to="/">Главная</NavLink>
      <div>{">"}</div>
      <NavLink to={url}>{title}</NavLink>
    </div>
  );
};

export default SimpleBreadCrumbs;
