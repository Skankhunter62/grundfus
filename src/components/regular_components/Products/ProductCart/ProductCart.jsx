import React, {useState} from 'react';
import classes from './ProductCart.module.css'
import {useTypedSelector} from "../../../../store/hooks/useTypedSelector";
import CartItems from "./CartItems/CartItems";
import MyBreadCrumbs from "../../../UIUX/MyBreadCrumbs/MyBreadCrumbs";
import MyEmptyComponent from "../../../UIUX/MyBlocks/MyEmptyComponent/MyEmptyComponent";
import MySuccessOrder from "../../../UIUX/MyForms/MySuccessOrder/MySuccessOrder";

const ProductCart = () => {
    const {cart} = useTypedSelector(state => state)
    const [orderAnswer, setOrderAnswer] = useState({})
    const backSetOrderAnswer = (answer) => { setOrderAnswer(answer) }

    return (
        <div className={classes.cartContentMain}>
            <MyBreadCrumbs url='/cart' title='Корзина' />
            {
                cart.length !== 0
                    ? <CartItems backSetOrderAnswer={backSetOrderAnswer} orderAnswer={orderAnswer}/>
                    : Object.keys(orderAnswer).length === 0
                        ? <MyEmptyComponent pageTitle='Корзина пуста' />
                        : <MySuccessOrder orderId={orderAnswer.id} />
            }
        </div>
    );
};

export default ProductCart;