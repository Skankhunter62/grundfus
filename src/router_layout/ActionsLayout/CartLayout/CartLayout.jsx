import React from 'react';
import classes from './CartLayout.module.css'
import ProductCart from "../../../components/regular_components/Products/ProductCart/ProductCart";
import PopularGoods from "../../../components/regular_components/Products/PopularGoods/PopularGoods";
import ProductLoopAside from "../../../components/main_components/ProductLoopAside/ProductLoopAside";
import PostsPagesTitle from "../../../components/UIUX/FontsButtons/Titles/PostsPagesTitle/PostsPagesTitle";

const CartLayout = () => {
    return (
        <div className={classes.actionsLayoutBlock}>
            <div className={classes.contentAsideAndSection}>
                <div className={classes.pageTitle}>
                    <PostsPagesTitle isPageTitle={true}> Корзина </PostsPagesTitle>
                </div>
                <div className={classes.contentWrapper}>
                    <ProductLoopAside isCatalog={false}/>
                    <div className={classes.contentSection}>
                        <ProductCart />
                    </div>
                </div>
            </div>
            <div className={classes.popularGood}>
                <PopularGoods/>
            </div>
        </div>
    );
};

export default CartLayout;