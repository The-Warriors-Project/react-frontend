import { Route, Routes } from "react-router-dom";
import { CssBaseline, Container } from "@mui/material";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

import { Book } from "./pages/Book";
import { BookList } from "./pages/BookList";
import { Home } from "./pages/Home";
import { User } from "./pages/User";
import { NotFound } from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { UserContext } from "./context/UserContext";

const styles = {
  container: {
    my: 4,
    backgroundColor: "background.paper",
  },
};

function App() {
  const [user, setUser] = useState(null);

  function handleCallbackResponse(res) {
    var userObject = jwt_decode(res.credential);
    console.log(userObject);
    setUser(userObject);
  }

  function handleSignOut(e) {
    setUser(null);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "1066801686615-ca18d0bs7trgksdb20jhvr3jjk0ea0c5.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <>
      <CssBaseline />
      <UserContext.Provider value="hello from context">
        <Navbar />
        {console.log(user)}
        {console.log("hasUser(user)")}
        {!user ? (
          <div id="signInDiv"></div>
        ) : (
          <button
            onClick={(e) => {
              handleSignOut(e);
            }}
          >
            Sign out
          </button>
        )}
        <main>
          <div>
            <Container sx={styles.container}>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/books" element={<BookList />}></Route>
                <Route path="/books/:id" element={<Book />}></Route>
                <Route path="/user" element={<User />}></Route>
                <Route path="/*" element={<NotFound />}></Route>
              </Routes>
            </Container>
          </div>
        </main>
      </UserContext.Provider>
    </>
  );
}

export default App;
