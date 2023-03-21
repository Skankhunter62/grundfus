import React from 'react';
import classes from './WishListLayout.module.css'
import MyBreadCrumbs from "../../../components/UIUX/MyBreadCrumbs/MyBreadCrumbs";
import PopularGoods from "../../../components/regular_components/Products/PopularGoods/PopularGoods";
import WishlistPage from "../../../pages/WishlistPage/WishlistPage";
import ProductLoopAside from "../../../components/main_components/ProductLoopAside/ProductLoopAside";
import PostsPagesTitle from "../../../components/UIUX/FontsButtons/Titles/PostsPagesTitle/PostsPagesTitle";

const WishListLayout = () => {
    return (
        <div className={classes.actionsLayoutBlock}>
            <div className={classes.contentAsideAndSection}>
                <div className={classes.pageTitle}>
                    <PostsPagesTitle isPageTitle={true}> Избранное </PostsPagesTitle>
                </div>
                <div className={classes.contentWrapper}>
                    <ProductLoopAside isCatalog={false}/>
                    <div className={classes.contentSection}>
                        <MyBreadCrumbs url='/wishlist' title='Избранное'/>
                        <WishlistPage />
                    </div>
                </div>
            </div>
            <div className={classes.popularGood}>
                <PopularGoods/>
            </div>
        </div>
    );
};

export default WishListLayout;