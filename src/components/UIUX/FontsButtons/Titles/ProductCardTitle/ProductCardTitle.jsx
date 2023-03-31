import React from "react";
import classes from "./ProductCardTitle.module.css";
import { Link } from "react-router-dom";

const ProductCardTitle = ({ product, popup }) => {
  return !popup ? (
    <div className={classes.titleStyles}>{product.name}</div>
  ) : (
    <Link
      to={`/catalog/${product.categories[0].slug}/${product.slug}`}
      state={{ product }}
      className={classes.titleStyles}
    >
      {product.name}
    </Link>
  );
};

export default ProductCardTitle;
