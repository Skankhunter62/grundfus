import React from 'react';
import {ReactComponent as ListLogo} from "../../../assets/icons/delivery_icons/dostavka-icon-spisok.svg";
import {ReactComponent as MoneyLogo} from "../../../assets/icons/delivery_icons/dostavka-icon-dengi.svg";
import {ReactComponent as DeliveryLogo} from "../../../assets/icons/delivery_icons/dostavka-icon-dostavka.svg";
import classes from './DeliveryTopPost.module.css'
import img from '../../../assets/img/dostavka-001.webp'
import PostsPagesTitle from "../../../components/UIUX/FontsButtons/Titles/PostsPagesTitle/PostsPagesTitle";
import DefaultText from "../../../components/UIUX/FontsButtons/Texts/DefaultText/DefaultText";


const DeliveryTopPost = () => {
    return (
        <div className={classes.top_post}>
            <div className={classes.top_post_info}>
                <div className={classes.top_post_info_text}>
                    <PostsPagesTitle isPageTitle={true}>Доставка</PostsPagesTitle>
                    <DefaultText>
                        Курьерская доставка продукции осуществляется по Москве и Московской области, а также Санкт-Петербургу. Средний срок исполнения заказа - 1-2 дня. Для доставки Вы можете выбрать любой день, но время согласуется отделом доставки за день до отправки товара. В случае, если по каким-либо причинам Вы отказываетесь от наших услуг или хотите что-то поменять – сообщите, пожалуйста, нам за день до предварительной даты исполнения заказа.
                    </DefaultText>
                </div>
                <div className={classes.top_post_info_icon}>
                    <ListLogo className={classes.logo_styles}/>
                    <MoneyLogo className={classes.logo_styles}/>
                    <DeliveryLogo className={classes.logo_styles}/>
                </div>
            </div>
            <div className={classes.img_block}>
                <img src={img} alt="Изображение способов безконтактной доставки" width={550} height={550} className={classes.post_img}/>
            </div>
        </div>
    );
};

export default DeliveryTopPost;