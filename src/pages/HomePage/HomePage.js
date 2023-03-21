import React from 'react';
import classes from './MyHomePage.module.css'
import CategoriesList from "./categories_list/CategoriesList";
import MainAboutBlock from "./main_block_banner/MainAboutBlock";
import NewGoods from "./news_goods/NewGoods";
import SimpleMap from "./map_block/MapBlock";
import BottomPosts from "./posts_component/bottom_posts/BottomPosts";
import PopularGoods from "../../components/regular_components/Products/PopularGoods/PopularGoods";
import SimplePost from "./posts_component/SimplePost/SimplePost";
import TopSlideWrapper from "../../components/regular_components/Sliders/TopSlideWrapper/TopSlideWrapper";
import {Helmet} from "react-helmet";
import GridProductCardPopup from '../../components/UIUX/MyBlocks/GridProductCard/GridProductCardPopup/GridProductCardPopup';
import {exampleProduct} from "../../dataArrays"

const HomePage = () => {

    return (
        <div>
            <Helmet>
                <title>Grundfos-Moscow - интернет-магазин. Лучшие цены на насосы с доставкой по Москве!</title>
                <meta data-hid="name::description" name="description" content="Интернет-магазин Grundfos-Moscow - низкие цены на лучшие насосы! Быстрая доставка на дом, в пункты выдачи или почтоматы."/>
                <meta name="og:description" content="Интернет-магазин Grundfos-Moscow - низкие цены на лучшие насосы! Быстрая доставка на дом, в пункты выдачи или почтоматы."/>
                <meta name="og::type" content="website"/>
                <meta name="og::url" content="https://rusgetter.store"/>
                <meta name="robots" content="noodp, noyaca, noarchive"/>
                <meta name="google" content="notranslate"/>
                <link href='https://rusgetter.store' rel="canonical"/>
            </Helmet>
            <TopSlideWrapper />
            <div className={classes.main_container}>
                <CategoriesList />
                <PopularGoods />
                <SimplePost />
                <MainAboutBlock />
                <NewGoods />
            </div>
            <SimpleMap />
            <div className={classes.main_container}>
                <BottomPosts />
            </div>
        </div>
    );
};

export default HomePage;