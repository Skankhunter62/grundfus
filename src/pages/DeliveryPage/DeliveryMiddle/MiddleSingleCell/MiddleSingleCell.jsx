import React from 'react';
import classes from './MyMiddleSingleCell.module.css'
import ProductTitleFilterAttributeTitle
    from "../../../../components/UIUX/FontsButtons/Titles/ProductTitleFilterAttributeTitle/ProductTitleFilterAttributeTitle";
import DefaultText from "../../../../components/UIUX/FontsButtons/Texts/DefaultText/DefaultText";

const MiddleSingleCell = ({post}) => {
    return (
        <div className={classes.single_post}>
            <div className={classes.single_post_title_block}>
                <ProductTitleFilterAttributeTitle>{post.title}</ProductTitleFilterAttributeTitle>
            </div>
            <div>
                <DefaultText>{post.body}</DefaultText>
            </div>
            {post.sub_body
                ? <p className={classes.sub_body_post_component}>{post.sub_body}</p>
                : <></>
            }
        </div>
    );
};

export default MiddleSingleCell;