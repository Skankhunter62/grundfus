import React, {useState, useEffect} from 'react';
import classes from './CompareLayout.module.css'
import MyBreadCrumbs from "../../../components/UIUX/MyBreadCrumbs/MyBreadCrumbs";
import PopularGoods from "../../../components/regular_components/Products/PopularGoods/PopularGoods";
import ComparePage from "../../../pages/ComparePage/ComparePage";
import MyCompareAttributesBlock
    from "../../../components/UIUX/MyBlocks/MyCompareAttributesBlock/MyCompareAttributesBlock";
import MyProductsCompareAttributes
    from "../../../components/UIUX/MyBlocks/MyCompareAttributesBlock/MyProductsCompareAttributes/MyProductsCompareAttributes";
import {useTypedSelector} from "../../../store/hooks/useTypedSelector";
import {useActions} from "../../../store/hooks/useActions";
import ProductLoopAside from "../../../components/main_components/ProductLoopAside/ProductLoopAside";
import PostsPagesTitle from "../../../components/UIUX/FontsButtons/Titles/PostsPagesTitle/PostsPagesTitle";

const CompareLayout = () => {
    const [sliderCounter, setSliderCounter] = useState(0)
    const {compare} = useTypedSelector(state => state)
    const [subarray, setSubarray] = useState([])
    const {compareAttributesListAddItem} = useActions()

    function sliceIntoChunks(arr, chunkSize) {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }

    useEffect(() => {
        if(compare.length !== 0){
            compare?.map(item => typeof item.attributes !== undefined ? compareAttributesListAddItem([...item.attributes]) : null)
            setSubarray(sliceIntoChunks(compare, 2))
        }
    }, [compare])

    useEffect(()=>{
        if(subarray.length % 2 !== 0){
            const preLast = [];
            preLast.push(...subarray.slice(-2, -1))
            subarray[subarray.length - 1].unshift(preLast[0][1])
        }
    }, [subarray])

    return (
        <div className={classes.actionsLayoutBlock}>
            <div className={classes.contentAsideAndSection}>
                <div className={classes.pageTitle}>
                    <PostsPagesTitle isPageTitle={true}> Сравнение </PostsPagesTitle>
                </div>
                <div className={classes.contentWrapper}>
                    <ProductLoopAside isCatalog={false}/>
                    <div className={classes.contentSection}>
                        <MyBreadCrumbs url='/compare' title='Сравнение'/>
                        <ComparePage />
                    </div>
                </div>
            </div>
            <MyCompareAttributesBlock setSliderCounter={setSliderCounter} sliderCounter={sliderCounter} subarray={subarray}/>
            <MyProductsCompareAttributes sliderCounter={sliderCounter} subarray={subarray}/>
            <div className={classes.popularGood}>
                <PopularGoods/>
            </div>
        </div>
    );
};

export default CompareLayout;