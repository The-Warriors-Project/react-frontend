import {Navigate} from "react-router";
import {Stack} from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";

import {useUser} from "../context/UserContext";
import {Button, Typography} from "@mui/material";
import MyBookShelfContent from "../components/MyBookshelfContent";
import {deleteProfile} from "../api/CompositeAPI";
import {useNavigate} from "react-router-dom";
import {useSnackbar} from "../context/SnackbarContext";

export function MyBookShelf() {
  const {user, setUser} = useUser();
  const navigate = useNavigate();
  const {openSuccessMessage, openErrorMessage} = useSnackbar();

  if (!user) {
    return <Navigate replace to="/login"></Navigate>;
  }

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


  return (
    <>
      <Stack direction="column" alignItems="flex-start">
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{width: "100%", paddingBottom: "2rem"}}
        >
          <Typography
            variant="h4"
            align="left"
            color="textPrimary"
            gutterBottom
          >
            {user ? user.username : "SomeUser"}'s Bookshelf
          </Typography>
          <Button variant="outlined" onClick={handleOnClick} startIcon={<DeleteIcon/>} color="error">
            Delete Your Profile
          </Button>
        </Stack>
        <MyBookShelfContent></MyBookShelfContent>
      </Stack>
    </>
  );
}
