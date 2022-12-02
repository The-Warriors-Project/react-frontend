import { Button, Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

import { useUser } from "../context/UserContext";

const styles = {
  bookInfoSection: {
    height: "25rem",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  description: {
    height: "80%",
    overflow: "auto",
  },
  bookSubstance: {
    height: "100%",
    paddingRight: 4,
  },
};

const bookData = {
  imageUrl: "https://m.media-amazon.com/images/I/91asIC1fRwL.jpg",
  title: "Book Title Goes Here",
  rating: 2.5,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam risus mattis libero eleifend tristique. Suspendisse potenti. Nam ac mauris bibendum, mattis urna eu, hendrerit turpis. Donec sagittis sapien id mi sodales sagittis. Ut ornare placerat elit in scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce lacinia ultricies suscipit. Nullam vel convallis lectus. Ut metus erat, pellentesque id lueleifend tristique. Suspendisse potenti. Nam ac mauris bibendum, mattis urna eu, hendrerit turpis. Donec sagittis sapien id mi sodales sagittis. Ut ornare placerat elit in scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce lacinia ultricies suscipit. Nullam vel convallis lectus. Ut metus erat, pellentesque id luctus sed, volutpat sit amet arcu. Vestibulum malesuada felis justo, a mollis odio porttitor eget. Quisque placerat laoreet dignissim. Ut venenatis orci velit, non mattis erat porta eget. Curabitur interdum porta fermentum. Cras a libero convallis nisi pharetra pellentesque vel ac odio. Nullam lectus lectus, rutrum quis libero vel, elementum fermentum ipsum.",
  authors: ["Jordi Adoumie", "Liron Hayon", "Omer Mustel"],
};

const BookImage = (props) => {
  const { imageUrl } = props;
  return <img src={imageUrl} style={styles.image} alt="book cover"></img>;
};

const authorsToText = (authors) => {
  return authors && authors.length ? authors.join(", ") : "";
};

const BookSubstance = (props) => {
  const { title, authors, rating, description } = props;
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      sx={styles.bookSubstance}
    >
      <Grid item style={{ height: "25%" }}>
        <Typography noWrap variant="h4">
          {title}
        </Typography>
        <Typography noWrap variant="subtitle1">
          by {authorsToText(authors)}
        </Typography>
        <Rating defaultValue={rating} precision={0.5} readOnly />
      </Grid>
      <Grid item style={{ height: "60%", overflow: "auto" }}>
        <Typography variant="h6">Description</Typography>
        <Box sx={styles.description}>
          <Typography variant="body2">{description}</Typography>
        </Box>
      </Grid>
      <Grid item style={{ height: "10%" }}>
        {user ? (
          <Button variant="contained">Rate and Review!</Button>
        ) : (
          <Button
            variant="contained"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Login and Review!
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default function BookContent() {
  return (
    <Grid container spacing={4} sx={styles.bookInfoSection}>
      <Grid item xs={4} style={{ height: "100%" }}>
        <BookImage imageUrl={bookData.imageUrl}></BookImage>
      </Grid>
      <Grid item xs={8} style={{ height: "100%" }}>
        <BookSubstance
          title={bookData.title}
          authors={bookData.authors}
          rating={bookData.rating}
          description={bookData.description}
        ></BookSubstance>
      </Grid>
    </Grid>
  );
}
