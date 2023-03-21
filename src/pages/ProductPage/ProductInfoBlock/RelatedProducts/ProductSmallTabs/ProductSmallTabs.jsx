import React from 'react';
import classes from './ProductSmallTabs.module.css'
import ProductPageTabsAndUpSallesButton
    from "../../../../../components/UIUX/FontsButtons/Buttons/ProductPageTabsAndUpSallesButton/ProductPageTabsAndUpSallesButton";

const ProductSmallTabs = ({changeActive, activeTab}) => {

    return (
        <div className={classes.productSmallTabs}>
            <ProductPageTabsAndUpSallesButton change={changeActive} isActive={activeTab}>Похожие</ProductPageTabsAndUpSallesButton>
            <ProductPageTabsAndUpSallesButton change={changeActive} isActive={!activeTab}>Комплектующие</ProductPageTabsAndUpSallesButton>
        </div>
    );
};

export default ProductSmallTabs;