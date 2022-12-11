import { Button, Grid, Rating, TextField } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { addReview } from "../api/BooksAPI";
import { useSnackbar } from "../context/SnackbarContext";

import { useUser } from "../context/UserContext";

export default function ReviewForm() {
  const [rating, setRating] = useState(3);
  const [reviewText, setReviewText] = useState("");
  const { openSuccessMessage, openErrorMessage } = useSnackbar();

  const { id } = useParams();
  const { user } = useUser();

  const handleSubmit = async () => {
    const reviewInfo = {
      book_id: id,
      review_text: reviewText,
      username: user.username,
      score: rating,
    };

    const handleSuccess = () => {
      openSuccessMessage("Successfully reviewed and rated!");
    };
    const handleFailure = () => {
      openErrorMessage("Something went wrong. Please try later.");
    };

    await addReview(reviewInfo, handleSuccess, handleFailure);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <TextField
          id="outlined-multiline-flexible"
          label="Add Your Review"
          multiline
          rows={1.5}
          sx={{ width: "100%", height: "100%" }}
          value={reviewText}
          onChange={(e) => {
            setReviewText(e.target.value);
          }}
        />
      </Grid>
      <Grid container item xs={4}>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newRating) => {
            setRating(newRating);
          }}
        />
        <Button
          sx={{ width: "100%" }}
          variant="contained"
          onClick={handleSubmit}
        >
          Submit Rating & Review!
        </Button>
      </Grid>
    </Grid>
  );
}
