import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getReviewsByBookID } from "../api/ReviewsAPI";
import BookContent from "../components/BookContent";
import Reviews from "../components/Reviews";
import { getBookInfoBookID } from "../api/BooksAPI";

export function Book() {
  const { id } = useParams();

  const [reviews, setReviews] = useState([]);
  const [avgRating, setAvgRating] = useState(0);
  const [bookData, setBookData] = useState(null);

  const fetchData = async () => {
    getBookInfoBookID(id)
      .then((bookData) => {
        setBookData(bookData);
      })
      .catch((e) => {
        console.log(e);
      });

    getReviewsByBookID(id)
      .then(({ reviews, average_score }) => {
        if (average_score) {
          setAvgRating(average_score);
        }

        if (reviews.length) {
          setReviews(reviews);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <BookContent
            bookData={bookData}
            avgRating={avgRating}
            fetchData={fetchData}
          ></BookContent>
        </Grid>
        <Grid item>
          <Reviews reviewsData={reviews}></Reviews>
        </Grid>
      </Grid>
    </>
  );
}
