import React from 'react';
import classes from './HorizontalProductCardAttributes.module.css'
import DefaultText from "../../../../FontsButtons/Texts/DefaultText/DefaultText";

const HorizontalProductCardAttributes = ({attributes}) => {
    return (
        <div className={classes.attributesBlock}>
            {
                attributes?.map(attribute =>
                    <div key={Math.random()} className={classes.attributeRowLayout}>
                        <DefaultText isPayment={true}> {attribute?.name} </DefaultText>
                        <DefaultText isPayment={true}> {attribute?.options[0]} </DefaultText>
                    </div>
                )
            }
        </div>
    );
};

export default HorizontalProductCardAttributes;