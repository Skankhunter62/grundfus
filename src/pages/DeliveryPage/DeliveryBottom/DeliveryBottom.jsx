import React from 'react';
import deliveryLogo from '../../../assets/img/dostavka-002.webp'
import classes from './DeliveryBottom.module.css'
import ProductTitleFilterAttributeTitle
    from "../../../components/UIUX/FontsButtons/Titles/ProductTitleFilterAttributeTitle/ProductTitleFilterAttributeTitle";

const DeliveryBottom = () => {
    return (
        <div className={classes.main_section}>
            <div className={classes.text_block}>
                <ProductTitleFilterAttributeTitle isProduct={true}>
                    Рассчитать стоимость доставки в регионы страны вы сможете на сайтах представленных компаний
                </ProductTitleFilterAttributeTitle>
            </div>
            <div className={classes.img_block}>
                <img src={deliveryLogo} alt="Изображение транспортных компаний" width={550} height={450} className={classes.img}/>
            </div>
        </div>
    );
};

export default DeliveryBottom;