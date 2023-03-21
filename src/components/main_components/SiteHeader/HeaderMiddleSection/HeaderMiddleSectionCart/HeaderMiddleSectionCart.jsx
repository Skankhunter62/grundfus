import React from 'react';
import classes from './HeaderMiddleSectionCart.module.css'
import cartIcon from '../../../../../assets/icons/header_icons/top-header__cart-icon.svg'
import {Link} from "react-router-dom";
import {getNoun} from "../../../../../WC_WP_API/local_db/local_db";
import {useTypedSelector} from "../../../../../store/hooks/useTypedSelector";

const HeaderMiddleSectionCart = () => {
    const {cart} = useTypedSelector(state => state)
    return (
        <Link to='/cart' className={classes.HeaderMiddleSectionCartBlock}>
            <img src={cartIcon} alt="" className={classes.cartIcon}/>
            <div className={classes.HeaderMiddleSectionCartText}>
                <span className={classes.cartSpan}>Корзина</span>
                <p className={classes.cartCount}>{cart.length} {getNoun(cart.length, 'товар', 'товара', 'товаров')}</p>
            </div>
        </Link>
    );
};

export default HeaderMiddleSectionCart;