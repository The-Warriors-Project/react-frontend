import { Navigate } from "react-router";
import { Stack } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";

import { useUser } from "../context/UserContext";
import { Button, Typography } from "@mui/material";
import MyBookShelfContent from "../components/MyBookshelfContent";

export function MyBookShelf() {
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
            {user ? user.username : "SomeUser"}'s Bookshelf
          </Typography>
          <Button variant="outlined" startIcon={<DeleteIcon />} color="error">
            Delete Your Profile
          </Button>
        </Stack>
        <MyBookShelfContent></MyBookShelfContent>
      </Stack>
    </>
  );
}
