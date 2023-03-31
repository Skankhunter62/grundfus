import React, { useEffect, useState } from "react";
import classes from "./SlugBreadCrumbs.module.css";
import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../../../../store/hooks/useTypedSelector";

const SlugBreadCrumbs = ({ slug }) => {
  const { goodsList, singleCategory } = useTypedSelector((state) => state);
  const [singleProduct, setSingleProduct] = useState({ name: "" });
  const [currentCategory, setCurrentCategory] = useState([
    { slug: "", name: "" },
  ]);
  useEffect(() => {
    if (singleCategory[0] !== undefined) {
      setCurrentCategory(...singleCategory);
    }
    if (goodsList.length !== 0) {
      setSingleProduct(...goodsList.filter((prod) => prod.slug === slug));
    }
  }, [singleCategory, goodsList, slug]);

  return (
    <div className={classes.breadCrumbsLayout}>
      <NavLink to="/">Главная</NavLink>
      <div>{">"}</div>
      <NavLink to="/catalog">Каталог</NavLink>
      <div>{">"}</div>
      <NavLink to={`/catalog/${currentCategory.slug || "cirkulyacionnye"}`}>
        {currentCategory.name}
      </NavLink>
      {slug ? (
        <>
          <div>{">"}</div>
          <NavLink to={`/catalog/${slug}`}>{singleProduct.name}</NavLink>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SlugBreadCrumbs;
