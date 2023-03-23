import React, { useEffect, useState } from "react";
import classes from "./CartProductCard.module.css";
import { useTypedSelector } from "../../../../store/hooks/useTypedSelector";
import { useActions } from "../../../../store/hooks/useActions";
import ProductCartItemImg from "./ProductCartItemImg/ProductCartItemImg";
import ProductCartItemInfo from "./ProductCartItemInfo/ProductCartItemInfo";
import ProductCartItemPrice from "./ProductCartItemPrice/ProductCartItemPrice";
import ProductCartItemQtn from "./ProductCartItemQtn/ProductCartItemQtn";
import MyCheckboxRemove from "../../MyFunctionalComponents/MyCheckboxRemove/MyCheckboxRemove";

const CartProductCard = ({ product, getTotal, selected }) => {
  const { cart } = useTypedSelector((state) => state);
  const singleProduct = cart.find((p) => p.id === product.id);

  const [counter, setCounter] = useState(singleProduct.quantity || 1);
  const counterIncrease = () => setCounter((prevState) => prevState + 1);
  const counterDecrease = () => setCounter((prevState) => prevState - 1);
  const { updateItem, addCartItem, removeCartList } = useActions();

  useEffect(() => {
    const newProduct = { id: product.id, quantity: counter };
    updateItem(newProduct);
  }, [counter]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    const initialValue = 0;
    getTotal(
      cart.reduce(
        (accumulator, current) =>
          accumulator + current.price * current.quantity,
        initialValue
      )
    );
  }, [cart]);

  return (
    <div className={classes.productCard}>
      <MyCheckboxRemove
        product={product}
        selected={selected}
        stateMassAddItemsObject={addCartItem}
        stateMassRemoveItemsObject={removeCartList}
        removeCartList={removeCartList}
      />
      <ProductCartItemImg productImg={product.images[0]} />
      <ProductCartItemInfo product={product} />
      <ProductCartItemPrice
        newPrice={singleProduct.price * singleProduct.quantity}
      />
      <ProductCartItemQtn
        product={product}
        counter={counter}
        counterDecrease={counterDecrease}
        counterIncrease={counterIncrease}
      />
    </div>
  );
};

export default CartProductCard;
