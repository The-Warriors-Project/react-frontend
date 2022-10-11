import { Fragment } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { Book } from "./pages/Book";
import { BookList } from "./pages/BookList";
import { Home } from "./pages/Home";
import { User } from "./pages/User";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/User">User</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<BookList />}></Route>
        <Route path="/books/:id" element={<Book />}></Route>
        <Route path="/User" element={<User />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
