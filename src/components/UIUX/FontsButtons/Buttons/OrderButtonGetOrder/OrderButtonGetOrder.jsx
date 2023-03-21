import React from 'react';
import classes from './OrderButtonGetOrder.module.css'
import axios from "axios";
import {data} from '../../../../../WC_WP_API/woocommerce.api'

const OrderButtonGetOrder = ({children, order = false, changeEmptyFields, newOrder, setIsOrderVisible, backSetOrderAnswer, changeSetLoading}) => {
    const requestOrder = async (newOrder) => {
        changeSetLoading()
        await axios.post(`https://mybackend.rusgetter.store/wp-json/wc/v3/orders`, newOrder, data)
            .then((response) => { backSetOrderAnswer(response.data)})
    }

    return (
        <button
            className={classes.getOrderButton}
            onClick={()=>{
                setIsOrderVisible(true)
                if(order){
                    if(newOrder.billing.first_name!=='' && newOrder.billing.email!=='' && newOrder.billing.phone!==''){
                        requestOrder(newOrder)
                    }else{
                        changeEmptyFields()
                    }
                }
            }}
        >
            {children}
        </button>
    );
};

export default OrderButtonGetOrder;