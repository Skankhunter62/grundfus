import axios from "axios";
import { api, data, reviewsApi, wcBaseUrl } from "../../woocommerce.api";
import { useEffect, useState, useMemo } from "react";
import { useActions } from "../../../store/hooks/useActions";
import { useTypedSelector } from "../../../store/hooks/useTypedSelector";

/*------------------Order Block Hooks --------------------------------*/
/*send new order*/
export const addWCOrder = async (WC_Order, setOrderData, changeSetLoading) => {
  changeSetLoading();
  await axios.post(wcBaseUrl + "orders", WC_Order, data).then((response) => {
    if (response.status === 201) {
      setOrderData(response.data);
    } else {
      console.log(
        "Problems with server connection, when try send order request"
      );
    }
  });
};

/*------------------Product Reviews Block Hooks --------------------------------*/
/*send product review*/
export const addWCReview = async (WC_Review, setReviewData) => {
  await axios
    .post(wcBaseUrl + "products/reviews", WC_Review, data)
    .then((response) => {
      if (response.status === 201) {
        console.log(
          "review success: ",
          wcBaseUrl + "products/reviews",
          WC_Review,
          data
        );
        // setReviewData(response.data);
      } else {
        console.log(
          "Problems with server connection, when try send product review"
        );
      }
    });
};
/*get reviews from single product*/
export const useWCProductReview = (productId, setReviewData) => {
  useEffect(() => {
    reviewsApi.get(`products/${productId}/reviews`).then((response) => {
      if (response.status === 200) {
        // setReviewData(response.data);
      } else {
        console.log(
          "Problems with server connection, when try get product review"
        );
      }
    });
  }, [productId]);
};

/*get reviews for a single product*/
export const useWCSingleProductReview = (productId, setReviewData) => {
  useEffect(() => {
    reviewsApi.get(`products/${productId}/reviews`).then((response) => {
      if (response.status === 200) {
        setReviewData(
          response.data.filter((review) => {
            if (review.review !== "empty") {
              if (review.rating !== 0) {
                return review;
              }
            }
          })
        );
      } else {
        console.log(
          "Problems with server connection, when try get product review"
        );
      }
    });
  }, []);
};

/*------------------Product Categories Block Hooks --------------------------------*/
/*get category list*/
export const useWCCategoriesList = () => {
  const { categoryAddAllItems, singleCategoryAddItem } = useActions();
  const { singleCategory } = useTypedSelector((state) => state);
  useEffect(() => {
    api
      .get("products/categories?per_page=100&orderby=name")
      .then((response) => {
        if (response.status === 200) {
          categoryAddAllItems(response.data);
          // localStorage.setItem("categories", JSON.stringify(response.data));
          // if (singleCategory.length === 0) {
          //   singleCategoryAddItem(
          //     ...response.data.filter(
          //       (cat) => cat.acf.default_catalog_category === true
          //     )
          //   );
          //   localStorage.setItem(
          //     "singleCategory",
          //     JSON.stringify(
          //       response.data.filter(
          //         (cat) => cat.acf.default_catalog_category === true
          //       )
          //     )
          //   );
          // }
        }
      });
  }, []);
};

/*------------------Get Products Block Hooks --------------------------------*/

/*get products by single category*/
export const getWCProductBySingleCategory = (
  categoryId,
  addProducts,
  addProductsAttributes,
  changeLoading
) => {
  console.log("start fetching products");
  api.get(`products?category=${categoryId}`).then((response) => {
    if (response.status === 200) {
      addProducts(response.data);
      addProductsAttributes(response.data);
      changeLoading(false);
    } else {
      console.log(
        "Problems with server connection, when try get products by category"
      );
    }
  });
};

/*get all products*/
const getProductsByCalcOption = (calcAttributes, productsList) => {
  if (productsList.length !== 0 && calcAttributes.length !== 0) {
    let calculatorProducts = [];
    productsList.map((product) => {
      product?.attributes.map((attribute) => {
        if (
          attribute.name === calcAttributes.attrName &&
          Number(attribute.options) >= Number(calcAttributes.option)
        ) {
          calculatorProducts.push(product);
        }
      });
    });
    console.log("found calc products! ", calculatorProducts);
    return calculatorProducts;
  } else {
    console.log("if not working, length: ", productsList.length);
    return [];
  }
};
const getProductsBySearchOption = (searchQuery, productsList) => {
  if (productsList.length !== 0) {
    let searchProducts = [];
    productsList.map((product) => {
      if (
        product.name === searchQuery ||
        product.sku.includes(searchQuery) ||
        product.name.includes(searchQuery)
      ) {
        searchProducts.push(product);
      }
    });
    console.log("found search products! ", searchProducts);
    return searchProducts;
  } else {
    console.log("if not working, length: ", productsList.length);
    return [];
  }
};

export const getWCAllProducts = (addProducts, stateProps, setLoading) => {
  console.log("start fetching all products");
  api.get(`products?status=publish`).then((response) => {
    if (response.status === 200) {
      if (stateProps.fromCalc) {
        const calcProductsList = getProductsByCalcOption(
          {
            option: stateProps.pressure,
            attrName: "Максимальный напор",
          },
          response.data
        );
        if (calcProductsList.length !== 0) {
          addProducts(calcProductsList);
        } else {
          addProducts(response.data);
        }
      } else if (stateProps.fromSearch) {
        const searchProductsList = getProductsBySearchOption(
          stateProps.searchQuery,
          response.data
        );
        if (searchProductsList.length !== 0) {
          addProducts(searchProductsList);
        } else {
          addProducts(response.data);
        }
      } else {
        addProducts(response.data);
      }
      setLoading(false);
    } else {
      console.log("Error while fetching all products");
    }
  });
};

/*get all products by all categories*/
export const useWCProductByAllCategories = () => {
  const { addGoodsListProducts } = useActions();
  console.log("start fetching all products");
  useEffect(() => {
    api.get("products?status=publish").then((response) => {
      if (response.status === 200) {
        addGoodsListProducts(response.data);
        localStorage.setItem("goods", JSON.stringify(response.data));
      } else {
        console.log(
          "Problems with server connection, when try get all products"
        );
      }
    });
  }, []);
};

/*get popular goods list*/
export const useWCPopularGoods = (loaderCallback) => {
  const [popularGoods, setPopularGoods] = useState([]);
  useEffect(() => {
    api
      .get("products?orderby=popularity&order=desc&per_page=10")
      .then((response) => {
        if (response.status === 200) {
          setPopularGoods(response.data);
          loaderCallback();
        } else {
          console.log(
            "Problems with server connection, when try get popular products"
          );
        }
      });
  }, []);
  return popularGoods;
};
/*get new goods list*/
export const useNewGoods = (loaderCallback) => {
  const [newGoods, setNewGoods] = useState([]);
  useEffect(() => {
    api.get("products?orderby=date&order=desc&per_page=10").then((response) => {
      if (response.status === 200) {
        setNewGoods(response.data);
        loaderCallback();
      } else {
        console.log(
          "Problems with server connection, when try get new products"
        );
      }
    });
  }, []);
  return newGoods;
};

export const useSortingProductInCatalog = (
  productsByCategory,
  selectedSort
) => {
  return useMemo(() => {
    switch (selectedSort) {
      case "nameTop":
        return [...productsByCategory].sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
        break;
      case "nameBottom":
        return [...productsByCategory].sort((a, b) =>
          b.name > a.name ? 1 : a.name > b.name ? -1 : 0
        );
        break;
      case "priceTop":
        return [...productsByCategory].sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
        break;
      case "priceBottom":
        return [...productsByCategory].sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
        break;
    }
  }, [productsByCategory, selectedSort]);
};
