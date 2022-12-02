import { Grid, Paper, Typography, Rating } from "@mui/material";
import { Box } from "@mui/system";

const reviewsData = [
  {
    username: "User1",
    rating: 3,
    reviewText:
      "Phasellus tristique, lorem ac auctor dignissim, tellus nisi finibus tellus, et luctus felis tellus sed felis. Cras sem purus, posuere varius nunc at, varius ultrices enim. Phasellus urna ex, volutpat at felis vel, suscipit finibus dui. Vivamus non congue quam, in vulputate odio. Phasellus eleifend commodo arcu eget sodales. Ut vulputate ante tortor, at condimentum nunc accumsan non. Nam fermentum orci at consequat volutpat. Morbi consectetur lorem eget ante viverra, sed lacinia est vehicula. Morbi non felis urna. Integer tempor volutpat arcu sit amet lacinia.",
  },
  {
    username: "User2",
    rating: 4,
    reviewText:
      "Aliquam nulla dui, aliquam vitae leo et, sodales scelerisque massa. Curabitur laoreet vitae mi a mattis. Aliquam et leo odio. Donec in erat sit amet dolor facilisis facilisis. Etiam ac tincidunt augue, mattis cursus turpis. Vivamus ac nulla ut ante sodales posuere non eu tellus. Aliquam vitae pulvinar mi. Donec nec pretium lorem. Etiam viverra sodales orci non aliquet. Ut non purus non nibh tristique fringilla eget et purus. In eu sapien odio. Nam at elit justo. Duis eleifend justo et nisi porttitor bibendum. Aenean erat turpis, posuere sed blandit vel, rhoncus quis risus.",
  },
  {
    username: "User3",
    rating: 5,
    reviewText:
      "Nullam rhoncus cursus risus. Nulla sed diam vel justo consectetur consequat rhoncus sit amet odio. Sed mollis metus ut diam dictum aliquam. Nam in est iaculis, aliquam felis ut, venenatis lorem. Quisque erat lorem, sagittis a ante vitae, viverra laoreet turpis. Vestibulum nunc dolor, ullamcorper at purus sit amet, scelerisque tristique justo. Nullam quis dolor porta, pharetra massa sed, fermentum est. Maecenas turpis justo, sodales eget urna vel, suscipit gravida nulla. Maecenas vehicula suscipit libero vel lobortis. Phasellus a erat velit. Aenean consectetur congue libero vel placerat.",
  },
];

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
  const { username, rating, reviewText } = props;
  return (
    <Paper elevation={1} sx={styles.reviewCard}>
      <Grid container spacing={4} direction="row" style={{ height: "100%" }}>
        <Grid item xs={4}>
          <Typography variant="h6">{username}</Typography>
          <Typography variant="subtitle1">Books reviewed: 2</Typography>
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

export default function Reviews() {
  return (
    <>
      <Grid container direction="column" spacing={2} style={{ width: "100%" }}>
        <Grid item>
          <Typography variant="h4">Reviews</Typography>
        </Grid>
        <Grid item style={{ width: "100%" }}>
          <Grid direction="column" spacing={2} container>
            {reviewsData.map(({ username, rating, reviewText }, idx) => {
              return (
                <Grid item key={idx}>
                  <Review
                    username={username}
                    rating={rating}
                    reviewText={reviewText}
                  ></Review>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
