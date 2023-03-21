import React from 'react';
import MyQuantity from "../../../../regular_components/Products/ProductQuantity/MyQuantity";

const ProductCartItemQtn = (props) => {
    return (
        <div>
            <MyQuantity
                product={props.product}
                counter={props.counter}
                countIncrease={props.counterIncrease}
                countDecrease={props.counterDecrease} />
        </div>
    );
};

export default ProductCartItemQtn;