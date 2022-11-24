import { Route, Routes, useLocation } from "react-router-dom";
import { CssBaseline, Container } from "@mui/material";

import { Book } from "./pages/Book";
import { BookList } from "./pages/BookList";
import { Home } from "./pages/Home";
import { User } from "./pages/User";
import { NotFound } from "./pages/NotFound";
import Navbar from "./components/Navbar";
import BackgroundVideo from "./components/BackgroundVideo";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import { UserProvider } from "./context/UserContext";
import SearchedResults from "./pages/SearchedResult";

const styles = {
  container: {
    my: 4,
    backgroundColor: "background.paper",
  },
  video: {
    width: "100%",
    height: "100vh",
    position: "absolute",
    top: 0,
    zIndex: -1,
    objectFit: "cover",
  },
};

function App() {
  return (
    <>
      <CssBaseline />
      <UserProvider>
        <BackgroundVideo />
        <Navbar />
        <Container component="main" sx={styles.container}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/books" element={<BookList />}></Route>
            <Route path="/books/:id" element={<Book />}></Route>
            <Route path="/user" element={<User />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<SignIn />}></Route>
            <Route path="/search" element={<SearchedResults />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </Container>
      </UserProvider>
    </>
  );
}

export default App;
