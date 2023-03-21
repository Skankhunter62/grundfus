import React, {useState} from 'react';
import classes from './RelatedProducts.module.css';
import ProductSmallTabs from "./ProductSmallTabs/ProductSmallTabs";
import RelatedProductsBlock from "../../../../components/regular_components/Products/RelatedProductsBlock/RelatedProductsBlock";
import {api} from "../../../../WC_WP_API/woocommerce.api";
import RelatedProductsLoader from "./RelatedProductsLoader/RelatedProductsLoader";

const RelatedProducts = ({product, related}) => {
    const [activeTab, setActiveTab] = useState(true);
    const [upsell, setUpsell] = useState([]);
    const changeActive = () => {
        setActiveTab(!activeTab)
        if(activeTab === true && upsell.length === 0){
            api.get(`products?include=${product.upsell_ids[0]}, ${product.upsell_ids[1]}`)
                .then(response => { if (response.status === 200) {setUpsell(response.data)} })
                .catch(error => { })
        }

    }

    return (
        <div className={classes.relatedProductInfoProductBlock}>
            <ProductSmallTabs changeActive={changeActive} activeTab={activeTab} prod_id={product.id}/>
            <div className={classes.relatedProductBlock}>
                {
                    activeTab
                        ? related.length === 0 ? [...Array(2)].map((elem, index) => <RelatedProductsLoader key={index} />) : related.map(product => <RelatedProductsBlock product={product} key={product.id}/> )
                        : upsell.length === 0 ? [...Array(2)].map((elem, index) => <RelatedProductsLoader key={index+2} />) : upsell.map(product => <RelatedProductsBlock product={product} key={product.id}/>)
                }
            </div>
        </div>
    );
};

export default RelatedProducts;