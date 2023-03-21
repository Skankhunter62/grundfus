import React from 'react';
import {deliveryData} from "../../../dataArrays";
import MiddleSingleCell from "./MiddleSingleCell/MiddleSingleCell";
import classes from './MyDeliveryMiddle.module.css'

const DeliveryMiddlePost = () => {
    return (
        <div className={classes.middle_post_layout}>
            {deliveryData.map(post =>
                <MiddleSingleCell post={post} key={post.id}/>
            )}
        </div>
    );
};

export default DeliveryMiddlePost;