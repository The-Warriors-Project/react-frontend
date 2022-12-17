import { Button, Typography } from "@mui/material";
import { Navigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

import BookShelf from "../components/BookShelf";
import { useUser } from "../context/UserContext";
import { Stack } from "@mui/system";
export function MyReviews() {
  const { user } = useUser();

  if (!user) {
    return <Navigate replace to="/login"></Navigate>;
  }

  return (
    <>
      <Stack direction="column" alignItems="flex-start">
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ width: "100%", paddingBottom: "2rem" }}
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
        <BookShelf></BookShelf>
      </Stack>
    </>
  );
}
