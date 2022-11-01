import { Route, Routes } from "react-router-dom";
import { CssBaseline, Container } from "@mui/material";

import { Book } from "./pages/Book";
import { BookList } from "./pages/BookList";
import { Home } from "./pages/Home";
import { User } from "./pages/User";
import { NotFound } from "./pages/NotFound";
import Navbar from "./components/Navbar";

const styles = {
  container: {
    my: 4,
    backgroundColor: "background.paper",
  },
};

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
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
    </>
  );
}

export default App;
