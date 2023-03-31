import React, { useState, useEffect } from "react";
import classes from "./ProductCatalog.module.css";
import CatalogItemsLoop from "./CatalogItemsLoop/CatalogItemsLoop";
import { useTypedSelector } from "../../store/hooks/useTypedSelector";
import { useActions } from "../../store/hooks/useActions";
import CatalogTopMenu from "./CatalogTopMenu/CatalogTopMenu";
import { useSortingProductInCatalog } from "../../WC_WP_API/CustomHooksAndFunctions/wc_hooks/wc_hooks";
import {
  addProductsFromCategoryRequest,
  addAllProducts,
} from "../../custom_functions/ProductsFunctions/ProductsFunctions";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const ProductCatalog = () => {
  const locationState = useLocation();
  const params = useParams();

  /*get redux store functions*/
  const { addProducts, addProductsAttributes, removeAllProducts } =
    useActions();
  /*get from redux store lists*/
  const {
    categories,
    goodsList,
    singleCategory,
    productsList,
    filterProductsList,
  } = useTypedSelector((state) => state);
  /*create double of products list*/
  const [productArray, setProductArray] = useState([]);
  /*pagination function*/
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(12);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  /*create loader flag*/
  const [loading, setLoading] = useState(true);
  /*loader callback function*/

  const changeLoading = (value) => setLoading(value);
  /*change product layout*/
  const [grid, setGrid] = useState(true);
  const changeGrid = (value) => {
    setGrid(value);
  };
  /*sorting element in catalog*/
  const [selectedSort, setSelectedSort] = useState("nameTop");
  /*initialize products lists from all goods list or category product list*/

  let stateProps = [];
  let fromCalc = false;
  let fromSearch = false;
  if (
    locationState.state !== null &&
    (locationState.state.fromCalc || locationState.state.fromSearch)
  ) {
    fromCalc = true;
    stateProps = locationState.state;
    if (locationState.state.fromSearch) {
      fromCalc = false;
      fromSearch = true;
    }
  } else {
    fromSearch = false;
    fromCalc = false;
  }

  useEffect(() => {
    if (productsList.length === 0) {
      setLoading(true);
      addAllProducts(addProducts, stateProps, setLoading);
    }
  }, []);

  // rerenders products 2nd time only for search inside a catalog
  useEffect(() => {
    setLoading(true);
    removeAllProducts();
    addAllProducts(addProducts, stateProps, setLoading);
  }, [fromSearch]);

  useEffect(() => {
    /*check is categories list are loaded*/
    if (categories.length !== 0 && !fromCalc && !fromSearch) {
      setLoading(true);
      /*call function which get products from category list*/
      removeAllProducts();
      addProductsFromCategoryRequest(
        singleCategory,
        addProducts,
        addProductsAttributes,
        changeLoading
      );
    }
  }, [singleCategory]);

  useEffect(() => {
    // console.log("params", params);
    // setLoading(true);
  }, [params]);

  useEffect(() => {
    if (filterProductsList.length !== 0) {
      setProductArray([...filterProductsList]);
      setLoading(false);
    } else if (productsList.length !== 0) {
      setProductArray([...productsList]);
      setLoading(false);
    }
  }, [productsList, filterProductsList]);

  const sorting = useSortingProductInCatalog(productArray, selectedSort);

  const currentRecords = sorting.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(productArray.length / recordsPerPage);

  return (
    <div className={classes.catalogMainContent}>
      <Helmet>
        <title>
          {singleCategory
            ? `${singleCategory[0]?.yoast_head_json?.title}`
            : "Насосы Grundfos в Москве с доставкой"}
        </title>
        <meta name="theme-color" content="#FFFFFF" />
        <meta
          property="og:title"
          content={
            singleCategory
              ? `${singleCategory[0]?.yoast_head_json?.title}`
              : "Насосы Grundfos в Москве с доставкой"
          }
        />
        <meta
          name="description"
          content={`${singleCategory[0]?.acf?.category_meta_description}`}
        />
        <meta
          property="og:locale"
          content={`${singleCategory[0]?.yoast_head_json?.og_locale}`}
        />
        <meta
          property="og:site_name"
          content={`${singleCategory[0]?.yoast_head_json?.og_site_name}`}
        />
        <meta
          property="og:description"
          content={`${singleCategory[0]?.acf?.category_meta_description}`}
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href={`${singleCategory?.yoast_head_json?.canonical}`}
        />
      </Helmet>
      <CatalogTopMenu
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
        changeGrid={changeGrid}
        grid={grid}
      />
      <CatalogItemsLoop
        grid={grid}
        currentRecords={currentRecords}
        loading={loading}
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ProductCatalog;
