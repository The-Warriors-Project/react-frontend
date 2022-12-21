import {Button, Typography} from "@mui/material";
import {Navigate, useNavigate} from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import {useEffect, useState} from "react";

import {useUser} from "../context/UserContext";
import {Stack} from "@mui/system";
import MyReviewsContent from "../components/MyReviewsContent";
import {getReviewsByUsername} from "../api/ReviewsAPI";
import {getBookInfoBookID} from "../api/BooksAPI";
import {useSnackbar} from "../context/SnackbarContext";
import {deleteProfile} from "../api/CompositeAPI";


export function MyReviews() {
  const {user, setUser} = useUser();
  const navigate = useNavigate();
  const {openSuccessMessage, openErrorMessage} = useSnackbar();

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
    } catch (e) {
      console.log(e)
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  const handleOnClick = async () => {
    await deleteProfile(
      user.username,
      (successMsg) => {
        openSuccessMessage(successMsg + ". Redirecting shortly...");
        setTimeout(() => {
          setUser(null)
          navigate("/");
        }, 3000);
      },
      () => {
        openErrorMessage("Could not delete profile");
      }
    );
  }


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
          sx={{width: "100%", paddingBottom: 3}}
        >
          <Typography
            variant="h4"
            align="left"
            color="textPrimary"
            gutterBottom
          >
            {user ? user.username : "SomeUser"}'s Reviews
          </Typography>
          <Button variant="outlined" onClick={handleOnClick} startIcon={<DeleteIcon/>} color="error">
            Delete Your Profile
          </Button>
        </Stack>
        <MyReviewsContent reviewsData={reviews}> </MyReviewsContent>
      </Stack>
    </>
  );
}
