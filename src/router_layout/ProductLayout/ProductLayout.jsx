import React from 'react';
import classes from './ProductLayout.module.css'
import Header from "../../components/main_components/SiteHeader/Header";
import Footer from "../../components/main_components/footer/Footer";
import {Outlet} from 'react-router-dom';
import PopularGoods from "../../components/regular_components/Products/PopularGoods/PopularGoods";
import ProductLoopAside from "../../components/main_components/ProductLoopAside/ProductLoopAside";

const ProductLayout = () => {


    return (
        <div className={classes.mainBlockLayout}>
            <Header />
            <div className={classes.twoColumnLayout}>
                <ProductLoopAside isCatalog={false}/>
                <div className={classes.mainContent}>
                    <Outlet />
                </div>
            </div>
            <div className={classes.container}>
                <PopularGoods/>
            </div>
            <Footer />
        </div>
    );
};

export default ProductLayout;