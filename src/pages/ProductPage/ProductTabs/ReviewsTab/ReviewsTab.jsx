import React, { useState } from "react";
import classes from "./ReviewsTab.module.css";
import {
  useWCSingleProductReview,
  addWCReview,
} from "../../../../WC_WP_API/CustomHooksAndFunctions/wc_hooks/wc_hooks";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import ReviewsForm from "./ReviewsForm/ReviewsForm";

const ReviewTab = (product) => {
  const [reviews, setReviews] = useState([
    { name: "", review: "Загрузка...", date_created: "12.12.2022" },
  ]);

  useWCSingleProductReview(product.product.id, setReviews);
  return (
    <>
      <div>
        {reviews.length > 0 ? "Показаны последние 5 отзывов" : "Нет отзывов"}
      </div>
      {reviews
        .reverse()
        .slice(0, 5)
        .map((review) => {
          return (
            <div className={classes.reviewWrapper} key={Math.random()}>
              <div className={classes.reviewTitle}>
                <div className={classes.reviewAuthor}>
                  {review.name.includes("anonym") ? "Аноним" : review.name}
                </div>
                <div>
                  {review.date_created.slice(
                    0,
                    review.date_created.indexOf("T")
                  )}
                </div>
              </div>
              <Stack spacing={1}>
                <Rating
                  name="read-only"
                  value={review.rating}
                  precision={1}
                  readOnly={true}
                />
              </Stack>

              <div className={classes.reviewText}>{review.review}</div>
            </div>
          );
        })}
      <div className={classes.reviewWrapper}>
        <ReviewsForm product={product} />
      </div>
    </>
  );
};

export default ReviewTab;
