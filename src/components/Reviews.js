import { Grid, Paper, Typography, Rating } from "@mui/material";
import { Box } from "@mui/system";

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

const Review = (props) => {
  const { username, rating, reviewText, num_reviews } = props;
  return (
    <Paper elevation={1} sx={styles.reviewCard}>
      <Grid container spacing={4} direction="row" style={{ height: "100%" }}>
        <Grid item xs={4}>
          <Typography variant="h6">{username}</Typography>
          <Typography variant="subtitle1">
            Books reviewed: {num_reviews}
          </Typography>
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

export default function Reviews(props) {
  const { reviewsData } = props;

  return (
    <>
      <Grid container direction="column" spacing={2} style={{ width: "100%" }}>
        <Grid item>
          <Typography variant="h4">Reviews</Typography>
        </Grid>
        <Grid item style={{ width: "100%" }}>
          <Grid direction="column" spacing={2} container>
            {reviewsData && reviewsData.length ? (
              reviewsData.map(
                ({ username, score, review_text, num_reviews }, idx) => {
                  return (
                    <Grid item key={idx}>
                      <Review
                        username={username}
                        rating={score}
                        reviewText={review_text}
                        num_reviews={num_reviews}
                      ></Review>
                    </Grid>
                  );
                }
              )
            ) : (
              <div style={{ margin: "1rem" }}>
                <Typography variant="p">No Reviews. Review now!</Typography>
              </div>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
