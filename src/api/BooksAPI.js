import axios from "axios";

// for now, the api returns one json representing one book
// should later update to an array of js
export async function getBooksByName(book_name) {
  try {
    const res = await axios.get(
      `https://8yffpe0pcl.execute-api.us-east-1.amazonaws.com/dev/api/v1/book/book_name/${book_name}`
    );
    const booksJSON = await res.data;

    return booksToArray(booksJSON);
  } catch (e) {
    console.log(e);
    return [];
  }
}

// books come in object form {0:{}, 1:{}, ...}
// helper to convert this to [{...}, {...}, {...}]
const booksToArray = (books) => {
  return Object.entries(books)
    .sort()
    .map((elem) => elem[1]);
};
