import { Link as RouterLink } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import { Stack } from "@mui/system";

const styles = {
  icon: {
    marginRight: 2,
  },
  toolbar: {
    textDecoration: "none",
    color: "unset",
  },
  button: {
    textDecoration: "none",
    color: "unset",
  },
  typography: {
    flexGrow: 1,
  },
};

function NavBar() {
  return (
    <AppBar position="relative">
      <Toolbar component={RouterLink} to="/" sx={styles.toolbar}>
        <BookIcon sx={styles.icon} />
        <Typography variant="h6" sx={styles.typography}>
          Reader Hub
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" component={RouterLink} to="/books">
            Books
          </Button>
          <Button color="inherit" component={RouterLink} to="/user">
            Profile
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
