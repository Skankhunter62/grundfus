import React, {useEffect, useState} from 'react';
import classes from './MyAddToCart.module.css'
import {useActions} from "../../../../../store/hooks/useActions";
import {useTypedSelector} from "../../../../../store/hooks/useTypedSelector";
import MyAddToCartAlert from "./MyAddToCartAlert/MyAddToCartAlert";

const MyAddToCart = ({product, isCatalog = false, quantity = 1}) => {
    const {addItem} = useActions();
    const {cart} = useTypedSelector(state => state);
    const [alertOpen, setAlertOpen] = useState(false);

    useEffect(() => {localStorage.setItem('cart', JSON.stringify(cart))}, [cart])
    const handleClick = () => {setAlertOpen(true)};
    const openChange = (value) => {setAlertOpen(value)}



    return (
        <>
            <button
                className={ isCatalog ? classes.buttonAddToCartCatalog : classes.buttonAddToCartPage }
                onClick={() => {
                    addItem({...product, quantity: quantity})
                    handleClick()
                }}
            >
             В корзину
            </button>
            <MyAddToCartAlert alertOpen={alertOpen} openChange={openChange}/>
        </>
    );
};

export default MyAddToCart;