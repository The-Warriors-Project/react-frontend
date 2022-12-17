import { Button, Grid, IconButton, Rating, TextField } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { addReview } from "../api/ReviewsAPI";
import { useSnackbar } from "../context/SnackbarContext";
import { getUserInfoUsername } from "../api/UsersAPI";
import { useUser } from "../context/UserContext";
import { Stack } from "@mui/system";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

export default function ReviewForm(props) {
  const { fetchData, title } = props;

  const [rating, setRating] = useState(3);
  const [reviewText, setReviewText] = useState("");
  const [liked, setLiked] = useState(false);
  const { openSuccessMessage, openErrorMessage } = useSnackbar();

  const { id } = useParams();
  const { user } = useUser();

  const handleLikeClicked = () => {
    setLiked(!liked);
    console.log("liked", !liked);
  };

  const handleSubmit = async () => {
    const email = await getUserInfoUsername(user.username).then((userInfo) => {
      return userInfo.email;
    });
    const reviewInfo = {
      book_id: id,
      title: title,
      review_text: reviewText,
      username: user.username,
      email: email,
      score: rating,
    };

    const handleSuccess = async (successMsg) => {
      openSuccessMessage(successMsg);
      await fetchData();
    };
    const handleFailure = (errorMsg) => {
      openErrorMessage(errorMsg);
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
          rows={2}
          sx={{ width: "100%", height: "100%" }}
          value={reviewText}
          onChange={(e) => {
            setReviewText(e.target.value);
          }}
        />
      </Grid>
      <Grid container item xs={4}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
          spacing={2}
          sx={{ width: "100%" }}
        >
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newRating) => {
              setRating(newRating);
            }}
          />
          <IconButton
            aria-label="favorite"
            color="error"
            onClick={handleLikeClicked}
          >
            {liked ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
        </Stack>
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
