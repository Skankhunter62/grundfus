import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { addWCReview } from "../../../WC_WP_API/CustomHooksAndFunctions/wc_hooks/wc_hooks";

const MaterialUiRating = ({ product, fromCatalog }) => {
  const [localRating, setLocalRating] = useState(null);

  const addRating = (productId, rating) => {
    const newReview = {
      product_id: productId,
      review: "empty",
      reviewer: `anonymous${Math.random()}`,
      reviewer_email: `anonymous${Math.random()}@anonymous.ru`,
      rating: rating,
    };
    addWCReview(newReview);
  };

  return (
    <Stack spacing={1}>
      <Rating
        name="half-rating"
        onChange={(e) => {
          addRating(product.id, e.target.value);
          setLocalRating(e.target.value);
        }}
        value={Number(product.average_rating) || 0}
        precision={1}
        readOnly={fromCatalog ? true : false}
      />
    </Stack>
  );
};

export default MaterialUiRating;
