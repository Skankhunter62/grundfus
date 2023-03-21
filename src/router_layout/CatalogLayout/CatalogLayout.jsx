import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import classes from "./CatalogLayout.module.css";
import Footer from "../../components/main_components/footer/Footer";
import Header from "../../components/main_components/SiteHeader/Header";
import MyCatalogBanner from "../../components/UIUX/MyBlocks/MyCatalogBanner/MyCatalogBanner";
import PopularGoods from "../../components/regular_components/Products/PopularGoods/PopularGoods";
import ProductLoopAside from "../../components/main_components/ProductLoopAside/ProductLoopAside";

const CatalogLayout = () => {
  /*flag by filter list are empty*/
  const [emptyProducts, setEmptyProducts] = useState(false);
  /*callback function to change empty flag*/
  const changeEmptyFlag = () => setEmptyProducts(!emptyProducts);

  return (
    <div className={classes.catalogLayoutBlock}>
      <Header />
      <MyCatalogBanner />
      <div className={classes.contentAsideAndSection}>
        <div className={classes.contentWrapper}>
          <ProductLoopAside
            isCatalog={true}
            changeEmptyFlag={changeEmptyFlag}
            emptyProducts={emptyProducts}
          />
          <div className={classes.contentSection}>
            <Outlet />
          </div>
        </div>
      </div>
      <div className={classes.popularGood}>
        <PopularGoods />
      </div>
      <Footer />
    </div>
  );
};

export default CatalogLayout;
