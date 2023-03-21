import React, {useState} from 'react';
import classes from './ProductLoopAsideFilterAttribute.module.css'
import MyFilterAttributeTitle from "../../../../UIUX/FontsButtons/Texts/Filter/FilterTitle/MyFilterAttributeTitle";
import ProductLoopAsideFilterOption from "./ProductLoopAsideFilterOption/ProductLoopAsideFilterOption";

const ProductLoopAsideFilterAttribute = ({productFilterAttributes, checkTest, activeAttributeList}) => {
    /*toggle display category list*/
    const [displayList, setDisplayList] = useState(activeAttributeList.map(item => item.attrName).includes(productFilterAttributes.name))
    /*callback function by toggle effect*/
    const checkVisibleList = () => setDisplayList(!displayList)

    return (
        <div className={displayList ? classes.ProductLoopAsideAttributes : classes.ProductLoopAsideAttributesVisible}>
            <MyFilterAttributeTitle isAttribute={true} checkVisibleList={checkVisibleList} displayList={displayList}>{productFilterAttributes.name}</MyFilterAttributeTitle>
            <ul className={displayList ? classes.ProductLoopAsideAttributesList : classes.ProductLoopAsideAttributesListDisable}>
                {
                    productFilterAttributes.options.map(singleOption => (
                        <ProductLoopAsideFilterOption
                            key={Math.random()+productFilterAttributes.id}
                            attributeName={productFilterAttributes.name}
                            active = {activeAttributeList.some(item => item.option === singleOption) || false}
                            checkTest={checkTest}
                        >{singleOption}</ProductLoopAsideFilterOption>
                    ))
                }
            </ul>
        </div>
    );
};

export default ProductLoopAsideFilterAttribute;