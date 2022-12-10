import { Button, Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBookInfoBookID } from "../api/BooksAPI";

import { useUser } from "../context/UserContext";
import ReviewForm from "./ReviewForm";

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
          <ReviewForm></ReviewForm>
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

export default function BookContent(props) {
  const { book_id } = props;
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    getBookInfoBookID(book_id)
      .then((bookData) => {
        setBookData(bookData);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  if (!bookData) return <></>;

  return (
    <Grid container spacing={4} sx={styles.bookInfoSection}>
      <Grid item xs={4} style={{ height: "100%" }}>
        <BookImage imageUrl={bookData.picture}></BookImage>
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
