import React, {useEffect, useState} from 'react';
import classes from './ProductLoopAsideFiltersPrice.module.css'
import {useTypedSelector} from "../../../../store/hooks/useTypedSelector";
import {useActions} from "../../../../store/hooks/useActions";
import MyFilterAttributeTitle from "../../../UIUX/FontsButtons/Texts/Filter/FilterTitle/MyFilterAttributeTitle";
import {Slider} from "@mui/material";

const ProductLoopAsideFiltersPrice = () => {
    const {productsList, filterProductsList} = useTypedSelector(state => state)
    const [maxPrice, setMaxPrice] = useState(0)
    const [priceFilterValue, setPriceFilterValue] = useState([0, Math.round(maxPrice)])
    /*function change price in filter*/
    const handlePriceChange = (event, newPriceValue) => {setPriceFilterValue(newPriceValue)}
    /*copy array of products*/
    const [productArray, setProductArray] = useState([])
    /*get function which add items to products filter list*/
    const {addProductsToFilterList} = useActions()

    useEffect(()=>{
        if(filterProductsList.length !== 0){
            setProductArray([...filterProductsList])
        }else if(productsList.length !== 0){
            setProductArray([...productsList])
        }
    }, [productsList, filterProductsList])

    useEffect(()=>{
         if(productArray.length !== 0){
            setMaxPrice(Math.round(Math.max(...productsList.map(product => product.price))))
        }
    }, [productArray])

    useEffect(()=>{ addProductsToFilterList(productsList.filter(product => product.price < priceFilterValue[1] && product.price > priceFilterValue[0])) }, [priceFilterValue])

    useEffect(()=>{ setPriceFilterValue([0, Math.round(maxPrice)])}, [maxPrice])

    return (
        <div className={classes.MyPriceFilter}>
            <MyFilterAttributeTitle isAttribute={false}>Цена</MyFilterAttributeTitle>
            <Slider
                max={Math.round(maxPrice)}
                value={priceFilterValue}
                onChange={handlePriceChange}
                valueLabelDisplay='auto'
            />
            <div className={classes.MyPriceFilterInputsBlock}>
                <p className={classes.MyPriceFilterSpan}>{priceFilterValue[0]}</p>
                <p className={classes.MyPriceFilterSpan}>{priceFilterValue[1]}</p>
            </div>
        </div>
    );
};

export default ProductLoopAsideFiltersPrice;