import React, { useState } from "react";
import classes from "./MyCategoriesList.module.css";
import { useTypedSelector } from "../../../store/hooks/useTypedSelector";
import CategoryItem from "./CategoryItem/CategoryItem";

const CategoriesList = () => {
  const { categories } = useTypedSelector((state) => state);
  let index = 0;
  return (
    <div className={classes.categories_list_block}>
      <ul className={classes.categories_list}>
        {categories.map((category) =>
          category?.acf?.main_category ? (
            <CategoryItem
              category={category}
              key={Math.random()}
              index={index++}
            />
          ) : (
            <React.Fragment key={Math.random()} />
          )
        )}
      </ul>
    </div>
  );
};

export default CategoriesList;
