import React, { useState } from "react";
import classes from "./ReviewsForm.module.css";
import { addWCReview } from "../../../../../WC_WP_API/CustomHooksAndFunctions/wc_hooks/wc_hooks";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const ReviewsForm = (product, UpdateReviews) => {
  const [newReview, setNewReview] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [alertVisible, setAlertVisible] = useState(false);

  const sendReview = (event) => {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
    event.preventDefault();
    console.log("sending new review");
    const data = {
      product_id: product.product.product.id,
      review: newReview,
      reviewer: `anonymous${Math.random()}`,
      reviewer_email: userEmail || `anonymous${Math.random()}@anonymous.ru`,
      rating: reviewRating,
    };
    console.log("product, ", product);
    addWCReview(data);

    setNewReview("");
    setUserEmail("");
  };
  return (
    <form onSubmit={sendReview}>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setUserEmail(e.target.value)}
        value={userEmail}
        required
      />
      <Stack spacing={1}>
        <Rating
          name="read-only"
          precision={1}
          onChange={(event) => {
            setReviewRating(event.target.value);
          }}
        />
      </Stack>
      <textarea
        name="text"
        placeholder="Ваш отзыв"
        id=""
        cols="10"
        rows="5"
        onChange={(e) => setNewReview(e.target.value)}
        value={newReview}
        required
      ></textarea>
      <input
        type={"submit"}
        className={classes.reviewButton}
        value={"Отправить"}
      ></input>
      <div
        className={
          alertVisible ? classes.reviewSuccessActive : classes.reviewSuccess
        }
      >
        Спасибо за отзыв!
      </div>
    </form>
  );
};

export default ReviewsForm;
