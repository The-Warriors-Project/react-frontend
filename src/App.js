import { Fragment } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { BookList } from "./pages/BookList";
import { Home } from "./pages/Home";
import { User } from "./pages/User";

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
        <Route path="/User" element={<User />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
