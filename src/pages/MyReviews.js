import { Button, Typography } from "@mui/material";
import { Navigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";

import { useUser } from "../context/UserContext";
import { Stack } from "@mui/system";
import MyReviewsContent from "../components/MyReviewsContent";
import { getReviewsByBookID, getReviewsByUsername } from "../api/ReviewsAPI";
import { getBookInfoBookID } from "../api/BooksAPI";



export function MyReviews() {
  const { user } = useUser();

  const [reviews, setReviews] = useState([]);

  const fetchData = async () => {
    try {
      let reviewsData = await getReviewsByUsername(user.username)
      reviewsData = reviewsData.reviews
      for (let i = 0; i < reviewsData.length; i++) {
        const bookData = await getBookInfoBookID(reviewsData[i]['book_id'])
        reviewsData[i]['bookName'] = bookData.title 
        reviewsData[i]['imageUrl'] = bookData.picture 
      }
      if (reviewsData.length) {
        setReviews(reviewsData)
      }
    }
    catch (e) {
      console.log(e)
    }
  };


  useEffect(() => {
    fetchData();
  }, []);


  if (!user) {
    console.log("User error here", user)
    return <Navigate replace to="/login"></Navigate>;
  }

  return (
    <>
      <Stack direction="column" alignItems="flex-start">
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ width: "100%", paddingBottom: 3 }}
        >
          <Typography
            variant="h4"
            align="left"
            color="textPrimary"
            gutterBottom
          >
            {user ? user.username : "SomeUser"}'s Reviews
          </Typography>
          <Button variant="outlined" startIcon={<DeleteIcon />} color="error">
            Delete Your Profile
          </Button>
        </Stack>
        <MyReviewsContent reviewsData={reviews}>  </MyReviewsContent> 
      </Stack>
    </>
  );
}
