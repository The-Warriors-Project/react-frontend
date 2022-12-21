import { Grid, Paper, Rating, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const styles = {
  reviewCard: {
    height: "10rem",
    padding: 2,
  },
  reviewContent: {
    height: "70%",
    overflow: "auto",
  },
};

const ReviewedBook = (props) => {
  const { bookName, imageUrl, rating, reviewText, bookID } = props;
  const bookUrl = "/books/" + bookID;

  return (
    <Paper elevation={1} sx={styles.reviewCard}>
      <Grid container spacing={4} direction="row" style={{ height: "100%" }}>
        <Grid item xs={4} style={{ height: "100%" }}>
          <Stack
            direction="column"
            justifyContent="space-between"
            spacing={2}
            style={{ overflow: "hidden" }}
          >
            <div style={{ height: "20%", width: "inherit" }}>
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to={bookUrl}
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                {bookName}
              </Typography>
            </div>
            <img
              src={imageUrl}
              style={{ height: "5rem", width: "fit-content" }}
            ></img>
          </Stack>
        </Grid>
        <Grid item xs={8} style={{ height: "100%" }}>
          <Rating name="half-rating" value={rating} precision={0.5} readOnly />
          <Box style={styles.reviewContent}>
            <Typography>{reviewText}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default function MyReviewsContent(props) {
  const { reviewsData } = props;
  if (!reviewsData) {
    return <></>;
  }

  return (
    <Grid container direction="column" spacing={2}>
      {reviewsData.map(
        ({ score, review_text, book_id, bookName, imageUrl }, idx) => {
          return (
            <Grid item key={idx}>
              <ReviewedBook
                bookName={bookName}
                imageUrl={imageUrl}
                rating={score}
                reviewText={review_text}
                bookID={book_id}
              ></ReviewedBook>
            </Grid>
          );
        }
      )}
    </Grid>
  );
}
