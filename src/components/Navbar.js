import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import { Stack } from "@mui/system";
import { useUser } from "../context/UserContext";
import SearchBar from "./SearchBar";

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
  const { user, setUser } = useUser();
  const [searchValue, setSearchValue] = useState("");

  const handleSearchBar = (e) => {
    setSearchValue(e.target.value);
  };

  const submitSearchBar = (e) => {
    e.preventDefault();
    console.log(searchValue);
    setSearchValue("");
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AppBar position="relative">
      <Toolbar component={RouterLink} to="/" sx={styles.toolbar}>
        <BookIcon sx={styles.icon} />
        <Typography variant="h6" sx={styles.typography}>
          Reader Hub
        </Typography>
        <Stack direction="row" spacing={2}>
          <SearchBar
            value={searchValue}
            onChange={handleSearchBar}
            onSubmit={submitSearchBar}
          ></SearchBar>
          {user ? (
            <>
              <Button color="inherit" component={RouterLink} to="/books">
                Books
              </Button>
              <Button color="inherit" component={RouterLink} to="/user">
                Profile
              </Button>
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={RouterLink} to="/signup">
                SignUp
              </Button>
              <Button color="inherit" component={RouterLink} to="/login">
                Login
              </Button>
            </>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
