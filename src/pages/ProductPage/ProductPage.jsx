import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import classes from "./ProductPage.module.css";
import { api } from "../../WC_WP_API/woocommerce.api";
import ProductInfoBlock from "./ProductInfoBlock/ProductInfoBlock";
import ProductImg from "./ImageBlock/ProductImg";
import ProductAttributes from "./ProductAttributes/ProductAttributes";
import ProductTabs from "./ProductTabs/ProductTabs";
import { useTypedSelector } from "../../store/hooks/useTypedSelector";
import MyBreadCrumbs from "../../components/UIUX/MyBreadCrumbs/MyBreadCrumbs";
import { Helmet } from "react-helmet";

const ProductPage = (props) => {
  /*get product id by url*/
  const params = useParams();
  /*get product object by location of prev page*/
  const location = useLocation();
  /*get product sale price*/
  const [productSalePrice, setProductSalePrice] = useState({
    sale_price: 10000,
    regular_price: 10000,
  });
  /*state of prev product*/
  const [singleProduct, setSingleProduct] = useState({
    attributes: [],
    images: [],
  });
  /*relation products id array*/
  const [relatedID, setRelatedID] = useState([]);
  /*array of related products*/
  const [related, setRelated] = useState([]);
  /*ProductQuantity variable*/
  const [quantity, setQuantity] = useState(1);
  /*product price*/
  const [productPrice, setProductPrice] = useState(10000);
  /*loading*/
  const [loading, setLoading] = useState(true);
  /*main img*/
  const [imgIndex, setImgIndex] = useState(0);
  /*ProductQuantity counter*/
  const [counter, setCounter] = useState(1);
  const { cart } = useTypedSelector((state) => state);
  const [isExistsInCart, setIsExistsInCart] = useState(true);

  useEffect(() => {
    if (location.state !== null) {
      const { product } = location.state;
      setSingleProduct(product);
      setRelatedID(product.related_ids);
      setProductPrice(product.regular_price);
      setProductSalePrice(product);
      setIsExistsInCart(cart.some((p) => p.id === product.id));
      setLoading(false);
    } else {
      api
        .get(`products?slug=${params.slug}`)
        .then((response) => {
          if (response.status === 200) {
            setSingleProduct(response.data[0]);
            setProductSalePrice(response.data[0]);
            setRelatedID(response.data[0].related_ids);
            setProductPrice(response.data[0].regular_price);
            setLoading(false);
          }
        })
        .catch((error) => {});
    }
  }, [params.slug]);

  useEffect(() => {
    if (!loading) {
      api
        .get(`products?include=${relatedID[0]}, ${relatedID[1]}`)
        .then((response) => {
          if (response.status === 200) {
            setRelated(response.data);
          }
        })
        .catch((error) => {});
    }
  }, [relatedID]);

  useEffect(() => {
    setQuantity(counter);
  }, [counter]);

  const countIncrease = () => {
    setCounter(counter + 1);
  };
  const countDecrease = () => {
    setCounter(counter - 1);
  };

  /*change price if we want more one product*/
  let totalPrice = productPrice * quantity;
  let totalSalePrice = productSalePrice.sale_price * quantity;
  console.log("totalPrice: ", totalPrice);
  return (
    <>
      <Helmet>
        <title>
          {singleProduct
            ? `${singleProduct?.yoast_head_json?.title}`
            : "Насосы Grundfos в Москве с доставкой"}
        </title>
        <meta name="theme-color" content="#FFFFFF" />
        <meta
          property="og:title"
          content={
            singleProduct
              ? `${singleProduct?.yoast_head_json?.og_title}`
              : "Насосы Grundfos в Москве с доставкой"
          }
        />
        <meta
          name="description"
          content={
            singleProduct
              ? `${singleProduct?.yoast_head_json?.og_description}`
              : "Насосы Grundfos в Москве с доставкой"
          }
        />
        <meta
          property="og:locale"
          content={
            singleProduct
              ? `${singleProduct?.yoast_head_json?.og_locale}`
              : "Насосы Grundfos в Москве с доставкой"
          }
        />
        <meta
          property="og:site_name"
          content={
            singleProduct
              ? `${singleProduct?.yoast_head_json?.og_site_name}`
              : "grundfos-moscow.ru"
          }
        />
        <meta
          property="og:description"
          content={
            singleProduct
              ? `${singleProduct?.yoast_head_json?.og_description}`
              : "Насосы Grundfos в Москве с доставкой"
          }
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className={classes.breadCrumbs}>
        <MyBreadCrumbs />
      </div>

      <div className={classes.productMainWrapper}>
        <ProductImg
          singleProduct={singleProduct.images}
          firstImg={singleProduct.images[imgIndex] || { src: "" }}
          productSalePrice={productSalePrice}
        />

        <ProductInfoBlock
          singleProduct={singleProduct}
          price={totalPrice}
          salePrice={totalSalePrice}
          countIncrease={countIncrease}
          countDecrease={countDecrease}
          isExistsInCart={isExistsInCart}
          counter={counter}
          related={related}
        />
      </div>
      <ProductTabs product={singleProduct} />
      <div>
        <ProductAttributes product={singleProduct} />
      </div>
    </>
  );
};

export default ProductPage;
