import React, { useEffect, useState } from "react";
import classes from "./TestProductLoopAsideCategories.module.css";
import MyFilterAttributeTitle from "../../../UIUX/FontsButtons/Texts/Filter/FilterTitle/MyFilterAttributeTitle";
import { useTypedSelector } from "../../../../store/hooks/useTypedSelector";
import CategoriesText from "../../../UIUX/FontsButtons/Texts/CtegoriesText/CategoriesText";
import { useActions } from "../../../../store/hooks/useActions";
import { setSingleCategory } from "../../../../custom_functions/CategoriesFunctions/CategoriesFunctions";
import { Link, useParams } from "react-router-dom";

const TestProductLoopAsideCategories = () => {
  /*get category slug by url address and chose single category by slug*/
  const urlParams = useParams();
  /*get categories list*/
  const { categories } = useTypedSelector((state) => state);
  /*check single category*/
  const { singleCategoryAddItem } = useActions();
  /*toggle display category list*/
  const [displayList, setDisplayList] = useState(true);
  /*callback function by toggle effect*/
  const checkVisibleList = () => setDisplayList(!displayList);
  /*when we get slug from url we start chose new single category*/
  useEffect(() => {
    /*check is category list not empty*/
    if (categories.length !== 0) {
      /*start loop by categories*/
      categories?.map((category) => {
        /*check is category list include url category slug*/
        category.slug === urlParams?.category_slug
          ? setSingleCategory(category, singleCategoryAddItem)
          : console.log("");
      });
    }
  }, [urlParams.category_slug, categories]);

  return (
    <div
      className={
        displayList
          ? classes.ProductLoopAsideCategories
          : classes.ProductLoopAsideCategoriesVisible
      }
    >
      <MyFilterAttributeTitle
        isAttribute={true}
        checkVisibleList={checkVisibleList}
        displayList={displayList}
      >
        Категории
      </MyFilterAttributeTitle>
      <ul
        className={
          displayList
            ? classes.ProductLoopAsideCategoriesList
            : classes.ProductLoopAsideCategoriesListDisable
        }
      >
        {categories.length !== 0 ? (
          categories.map((category) =>
            category.parent === 0 ? (
              <Link
                to={`/catalog/${category.slug}`}
                key={category.id}
                onClick={() =>
                  setSingleCategory(category, singleCategoryAddItem)
                }
              >
                <CategoriesText>{category.name}</CategoriesText>
              </Link>
            ) : (
              <React.Fragment key={Math.random()} />
            )
          )
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </div>
  );
};

export default TestProductLoopAsideCategories;
