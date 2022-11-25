import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getBooksByName } from "../api/BooksAPI";

import Cards from "../components/Cards";

export default function SearchedResults() {
  const [searchParams] = useSearchParams({ book_name: "" });
  const [searchedBooks, setSearchedBooks] = useState([]);
  const book_name = searchParams.get("book_name");
  const captions = [`Book name: ${book_name}`];

  useEffect(() => {
    getBooksByName(book_name)
      .then((books) => {
        setSearchedBooks([books]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [book_name]);

  return (
    <>
      {searchedBooks ? (
        <Cards
          subject="Searched Result"
          captions={captions}
          cardsData={searchedBooks}
        ></Cards>
      ) : (
        <h1>No Search Result Found</h1>
      )}
    </>
  );
}
