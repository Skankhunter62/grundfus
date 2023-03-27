import React, { useState } from "react";
import { useTypedSelector } from "../../../store/hooks/useTypedSelector";
import HorizontalProductCard from "../../../components/UIUX/MyBlocks/HorizontalProductCart/HorizontalProductCard";
import { useActions } from "../../../store/hooks/useActions";
import MyRemoveAllItems from "../../../components/UIUX/MyFunctionalComponents/MyRemoveAllItems/MyRemoveAllItems";

const FullWishlist = () => {
  const [selected, setSelected] = useState(false);
  const checkSelected = () => {
    setSelected(!selected);
  };

  const { wishlist, wishlistMassRemove } = useTypedSelector((state) => state);
  const {
    wishlistRemoveItem,
    removeMassWishlist,
    addManyMassWishlist,
    massRemoveMassWishlist,
  } = useActions();
  const stateName = "wishlist";

  return (
    <>
      <MyRemoveAllItems
        checkSelected={checkSelected}
        stateName={stateName}
        stateObject={wishlist}
        stateRemoveObject={wishlistRemoveItem}
        stateMassObject={wishlistMassRemove}
        stateMassRemoveObject={removeMassWishlist}
        stateMassAddItemsObject={addManyMassWishlist}
        stateMassRemoveAllObject={massRemoveMassWishlist}
      />
      {wishlist.map((product) => (
        <HorizontalProductCard
          product={product}
          selected={selected}
          key={product.id}
        />
      ))}
    </>
  );
};

export default FullWishlist;
