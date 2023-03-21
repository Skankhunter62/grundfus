import React from 'react';
import classes from './AttributeBlock.module.css'

const AttributeBlock = ({singleProduct}) => {
    return (
        <div className={classes.attributesBlock}>
            <div className={classes.singleAttribute}>
                <div className={classes.attributesText}>Артикул:</div>
                <div className={classes.attributesText}>{singleProduct.sku}</div>
            </div>
            {
                singleProduct.attributes.map((element, index) =>
                    index === 0 || index === 1
                        ? <div className={classes.singleAttribute} key={element.name}> <div className={classes.attributesText}>{element.name}</div> <div className={classes.attributesText}>{element.options[0]}</div> </div>
                        : <p key={element.name}/>
                )
            }
        </div>
    );
};

export default AttributeBlock;