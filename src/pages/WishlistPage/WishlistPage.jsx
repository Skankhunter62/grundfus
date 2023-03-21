import React from 'react';
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import FullWishlist from "./FullWishlist/FullWishlist";
import MyEmptyComponent from "../../components/UIUX/MyBlocks/MyEmptyComponent/MyEmptyComponent";
import {Helmet} from "react-helmet";

const WishlistPage = () => {
    const {wishlist} = useTypedSelector(state => state)
    return (
        <>
            <Helmet>
                <title>Grundfos-Moscow.ru</title>
                <meta name="theme-color" content="#FFFFFF"/>
                <meta property="og:title" content="Grundfos-Moscow.ru"/>
                <meta property="og:url" content="https://rusgetter.store/wishlist" />
            </Helmet>
            { wishlist.length !== 0 ? <FullWishlist /> : <MyEmptyComponent pageTitle='Список избранного пуст' />}
        </>
    );
};

export default WishlistPage;