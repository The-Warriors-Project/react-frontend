import { Grid, Paper, Typography, Rating, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

// const reviewsData = [
//   {
//     bookName: "Some book",
//     imageUrl: "https://m.media-amazon.com/images/I/51-5ZXYtcML.jpg",
//     rating: 3,
//     bookID: 2,
//     reviewText:
//       "Phasellus tristique, lorem ac auctor dignissim, tellus nisi finibus tellus, et luctus felis tellus sed felis. Cras sem purus, posuere varius nunc at, varius ultrices enim. Phasellus urna ex, volutpat at felis vel, suscipit finibus dui. Vivamus non congue quam, in vulputate odio. Phasellus eleifend commodo arcu eget sodales. Ut vulputate ante tortor, at condimentum nunc accumsan non. Nam fermentum orci at consequat volutpat. Morbi consectetur lorem eget ante viverra, sed lacinia est vehicula. Morbi non felis urna. Integer tempor volutpat arcu sit amet lacinia.",
//   },
//   {
//     bookName: "Some book",
//     imageUrl: "https://m.media-amazon.com/images/I/51-5ZXYtcML.jpg",
//     rating: 3,
//     bookID: 2,
//     reviewText:
//       "Phasellus tristique, lorem ac auctor dignissim, tellus nisi finibus tellus, et luctus felis tellus sed felis. Cras sem purus, posuere varius nunc at, varius ultrices enim. Phasellus urna ex, volutpat at felis vel, suscipit finibus dui. Vivamus non congue quam, in vulputate odio. Phasellus eleifend commodo arcu eget sodales. Ut vulputate ante tortor, at condimentum nunc accumsan non. Nam fermentum orci at consequat volutpat. Morbi consectetur lorem eget ante viverra, sed lacinia est vehicula. Morbi non felis urna. Integer tempor volutpat arcu sit amet lacinia.",
//   },
//   {
//     bookName: "Some book",
//     imageUrl: "https://m.media-amazon.com/images/I/51-5ZXYtcML.jpg",
//     rating: 3,
//     bookID: 2,
//     reviewText:
//       "Phasellus tristique, lorem ac auctor dignissim, tellus nisi finibus tellus, et luctus felis tellus sed felis. Cras sem purus, posuere varius nunc at, varius ultrices enim. Phasellus urna ex, volutpat at felis vel, suscipit finibus dui. Vivamus non congue quam, in vulputate odio. Phasellus eleifend commodo arcu eget sodales. Ut vulputate ante tortor, at condimentum nunc accumsan non. Nam fermentum orci at consequat volutpat. Morbi consectetur lorem eget ante viverra, sed lacinia est vehicula. Morbi non felis urna. Integer tempor volutpat arcu sit amet lacinia.",
//   },
// ];



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
            style={{ height: "100%" }}
          >
            <div style={{ height: "20%" }}>
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
              style={{ height: "90%", width: "fit-content" }}
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
    return <></>
  }
  console.log("this is the reviews data")
  console.log(reviewsData)
  console.log(reviewsData==[]? console.log(reviewsData[0]['book_id']) : console.log("Not up to date yet"))
  return (
    <>
      <Grid
        container
        direction="column"
        spacing={2}
        style={{ width: "inherit" }}
      >
        <Grid item style={{ width: "100%" }}>
          <Grid direction="column" spacing={2} container>
            {reviewsData.map(
              ({score, review_text, book_id, bookName, imageUrl}, idx) => {
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
        </Grid>
      </Grid>
    </>
  );
}
