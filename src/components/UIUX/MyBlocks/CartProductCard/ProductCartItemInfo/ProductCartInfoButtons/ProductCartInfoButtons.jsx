import React from 'react';
import classes from './ProductCartInfoButtons.module.css'
import {useActions} from "../../../../../../store/hooks/useActions";
import ProductCartActionButton from "./ProductCartActionButton/ProductCartActionButton";

const ProductCartInfoButtons = ({product}) => {
    const {removeItem} = useActions()
    return (
        <div className={classes.addingBtnBlock}>
            <ProductCartActionButton product={product} />
            <div
                className={classes.addingBtn}
                onClick={()=>{
                    removeItem(product)
                }}
            >
                Удалить
            </div>
        </div>
    );
};

export default ProductCartInfoButtons;