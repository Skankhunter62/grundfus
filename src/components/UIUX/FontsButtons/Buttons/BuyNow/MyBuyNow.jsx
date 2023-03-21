import React, {useEffect, useState} from 'react';
import classes from './MyBuyNow.module.css'
import {Link} from "react-router-dom";
import {useActions} from "../../../../../store/hooks/useActions";
import {useTypedSelector} from "../../../../../store/hooks/useTypedSelector";
import MyAddToCartAlert from "../MyAddToCart/MyAddToCartAlert/MyAddToCartAlert";

const MyBuyNow = ({product, children, quantity = 1}) => {
    const {addItem} = useActions();
    const {cart} = useTypedSelector(state => state);
    const [alertOpen, setAlertOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])
    const handleClick = () => {
        setAlertOpen(true)
    };
    const openChange = (value) => {
        setAlertOpen(value)
    }

    return (
        <>
            <Link to={`/cart`}
                  className={classes.muBuyNowButton}
                  onClick={() => {
                      addItem({...product, quantity: quantity})
                      handleClick()
                  }
                  }>
                {children}
            </Link>
            <MyAddToCartAlert alertOpen={alertOpen} openChange={openChange}/>
        </>
    );
};

export default MyBuyNow;