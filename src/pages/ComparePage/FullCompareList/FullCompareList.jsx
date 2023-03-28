import React, { useState } from "react";
import { useTypedSelector } from "../../../store/hooks/useTypedSelector";
import { useActions } from "../../../store/hooks/useActions";
import MyRemoveAllItems from "../../../components/UIUX/MyFunctionalComponents/MyRemoveAllItems/MyRemoveAllItems";
import HorizontalProductCard from "../../../components/UIUX/MyBlocks/HorizontalProductCart/HorizontalProductCard";

const FullCompareList = () => {
  const [selected, setSelected] = useState(false);
  const checkSelected = () => {
    setSelected(!selected);
  };

  const { compare, compareMassRemove } = useTypedSelector((state) => state);
  const {
    comparelistRemoveItem,
    massRemoveMassCompare,
    addManyMassCompare,
    removeMassCompare,
  } = useActions();
  const stateName = "compare";

  return (
    <>
      <MyRemoveAllItems
        checkSelected={checkSelected}
        stateName={stateName}
        stateObject={compare}
        stateRemoveObject={comparelistRemoveItem}
        stateMassObject={compareMassRemove}
        stateMassRemoveObject={removeMassCompare}
        stateMassAddItemsObject={addManyMassCompare}
        stateMassRemoveAllObject={massRemoveMassCompare}
      />
      {compare?.map((product) => (
        <HorizontalProductCard
          product={product}
          selected={selected}
          key={product.id}
          type={"compare"}
        />
      ))}
    </>
  );
};

export default FullCompareList;
