import React, {useState} from 'react';
import classes from './ProductTabs.module.css'
import TubsButtons from "./TabsButtons/TubsButtons";
import TabsContent from "./TabsContent/TabsContent";

const ProductTabs = ({product}) => {
    const [isActive, setIsActive] = useState(true)
    const changeActiveTab = () => {
        setIsActive(!isActive)
    }

    return (
        <div className={classes.productTabsBlock}>
            <TubsButtons isActive={isActive} changeActiveTab={changeActiveTab} />
            <TabsContent tabsFlag={isActive} product={product}/>
        </div>
    );
};

export default ProductTabs;