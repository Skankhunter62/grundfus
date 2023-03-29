import React, { useState, useEffect } from "react";
import classes from "./CompareLayout.module.css";
import MyBreadCrumbs from "../../../components/UIUX/MyBreadCrumbs/MyBreadCrumbs";
import PopularGoods from "../../../components/regular_components/Products/PopularGoods/PopularGoods";
import ComparePage from "../../../pages/ComparePage/ComparePage";
import MyCompareAttributesBlock from "../../../components/UIUX/MyBlocks/MyCompareAttributesBlock/MyCompareAttributesBlock";
import MyProductsCompareAttributes from "../../../components/UIUX/MyBlocks/MyCompareAttributesBlock/MyProductsCompareAttributes/MyProductsCompareAttributes";
import { useTypedSelector } from "../../../store/hooks/useTypedSelector";
import { useActions } from "../../../store/hooks/useActions";
import ProductLoopAside from "../../../components/main_components/ProductLoopAside/ProductLoopAside";
import PostsPagesTitle from "../../../components/UIUX/FontsButtons/Titles/PostsPagesTitle/PostsPagesTitle";

const CompareLayout = () => {
  const [sliderCounter, setSliderCounter] = useState(0);
  const { compare } = useTypedSelector((state) => state);
  const [subarray, setSubarray] = useState([]);
  const { compareAttributesListAddItem } = useActions();

  function sliceIntoChunks(arr, chunkSize) {
    console.log("arr", arr);
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    if (res[res.length - 1].length === 1) {
      console.log("res", res);
      res[res.length - 1].unshift(arr[arr.length - 2]);
      // res[res.length - 1].push(arr[0]);
    }
    return res;
  }

  useEffect(() => {
    let testArr = [];
    if (compare.length !== 0) {
      compare?.map((item) => {
        if (typeof item.attributes !== undefined) {
          testArr.push(item.attributes);
        } else {
          return null;
        }
      });
      compareAttributesListAddItem(testArr);
      setSubarray(sliceIntoChunks(compare, 2));
    }
    // console.log("compare", compare);
    // if (compare.length !== 0) {
    //   compare?.map((item) => {
    //     if (typeof item.attributes !== undefined) {
    //       console.log("item.attributes", item.attributes);
    //       console.log("[item.attributes]", [item.attributes]);
    //       console.log("[...item.attributes]", [...item.attributes]);
    //     }

    //     return typeof item.attributes !== undefined
    //       ? // ? compareAttributesListAddItem([...item.attributes])
    //         compareAttributesListAddItem([...item.attributes])
    //       : null;
    //   });

    //   setSubarray(sliceIntoChunks(compare, 2));
    // }
  }, [compare]);

  useEffect(() => {
    if (subarray.length % 2 !== 0) {
      const preLast = [];
      // preLast.push(...subarray.slice(-2, -1));
      preLast.push(subarray); // worked

      // preLast.push(...subarray);

      //   preLast.push(subarray);

      // subarray[subarray.length - 1].unshift(preLast[0][1]);
    }
  }, [subarray]);
  console.log("sliderCounter: ", sliderCounter);
  return (
    <div>
      <div className={classes.actionsLayoutBlock}>
        <div className={classes.contentAsideAndSection}>
          <div className={classes.pageTitle}>
            <PostsPagesTitle isPageTitle={true}> Сравнение </PostsPagesTitle>
          </div>
          <div className={classes.contentWrapper}>
            <ProductLoopAside isCatalog={false} />
            <div className={classes.contentSection}>
              <MyBreadCrumbs url="/compare" title="Сравнение" />
              <ComparePage />
            </div>
          </div>
        </div>
        <MyCompareAttributesBlock
          setSliderCounter={setSliderCounter}
          sliderCounter={sliderCounter}
          subarray={subarray}
        />
        <MyProductsCompareAttributes
          sliderCounter={sliderCounter}
          subarray={subarray}
        />
        <div className={classes.popularGood}>
          <PopularGoods />
        </div>
      </div>
    </div>
  );
};

export default CompareLayout;
