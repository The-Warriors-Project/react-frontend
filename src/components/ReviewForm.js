import { Box, Button, Grid, Rating, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

export default function ReviewForm() {
  const [rating, setRating] = useState(3);
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = () => {
    console.log("rating", rating);
    console.log("reviewText", reviewText);
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
