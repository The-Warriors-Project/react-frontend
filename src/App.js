import {Route, Routes} from "react-router-dom";
import {Container, CssBaseline} from "@mui/material";

import {Book} from "./pages/Book";
import {Home} from "./pages/Home";
import {NotFound} from "./pages/NotFound";
import Navbar from "./components/Navbar";
import BackgroundVideo from "./components/BackgroundVideo";
import SignUp from "./pages/SignUp";
import Verify from "./pages/Verify";
import SignIn from "./pages/SignIn";
import {MyReviews} from "./pages/MyReviews";

import {SnackbarProvider} from "./context/SnackbarContext";
import {UserProvider} from "./context/UserContext";
import SearchedResults from "./pages/SearchedResult";
import CustomizedSnackbars from "./components/SnackBar";
import {MyBookShelf} from "./pages/MyBookShelf";

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
      <CssBaseline/>
      <SnackbarProvider>
        <UserProvider>
          <BackgroundVideo/>
          <Navbar/>
          <CustomizedSnackbars></CustomizedSnackbars>
          <Container component="main" sx={styles.container}>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/books/:id" element={<Book/>}></Route>
              <Route path="/myreviews" element={<MyReviews/>}></Route>
              <Route path="/mybookshelf" element={<MyBookShelf/>}></Route>
              <Route path="/signup" element={<SignUp/>}></Route>
              <Route path="/signup/verify" element={<Verify/>}></Route>
              <Route path="/login" element={<SignIn/>}></Route>
              <Route path="/search" element={<SearchedResults/>}></Route>
              <Route path="/*" element={<NotFound/>}></Route>
            </Routes>
          </Container>
        </UserProvider>
      </SnackbarProvider>
    </>
  );
}

export default App;
