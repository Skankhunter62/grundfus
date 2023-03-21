import React from 'react';
import {useParams} from "react-router-dom";
import SimpleBreadCrumbs from "./SimpleBreadCrumbs/SimpleBreadCrumbs";
import SlugBreadCrumbs from "./SlugBreadCrumbs/SlugBreadCrumbs";

const MyBreadCrumbs = ({url, title, isProductPage}) => {
    const params = useParams()

    return (
        <React.Fragment>
            { params.category_slug ? <SlugBreadCrumbs isProductPage={isProductPage} slug={params.slug}/> : <SimpleBreadCrumbs url={url} title={title}/> }
        </React.Fragment>
    );
};

export default MyBreadCrumbs;