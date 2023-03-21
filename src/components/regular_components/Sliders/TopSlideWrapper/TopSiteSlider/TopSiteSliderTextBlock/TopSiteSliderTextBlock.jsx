import React from 'react';
import classes from './TopSiteSliderTextBlock.module.css'
import CatalogOrderEmptyButton from "../../../../../UIUX/FontsButtons/Buttons/CatalogOrderEmptyButton/CatalogOrderEmptyButton";

const TopSiteSliderTextBlock = ({post}) => {
    return (
        <div className={classes.TopSiteSliderTextBlock}>
            <p className={classes.TopSiteSliderTextBlockTitle}>
                {post?.title?.rendered}
                <span className={classes.TopSiteSliderTextBlockSpan}>{post?.acf?.second_part_of_title}</span>
            </p>
            <p className={classes.TopSiteSliderTextBlockText}>{post?.content?.rendered}</p>
            <CatalogOrderEmptyButton link={'/catalog'}>Перейти в каталог</CatalogOrderEmptyButton>
        </div>
    );
};

export default TopSiteSliderTextBlock;