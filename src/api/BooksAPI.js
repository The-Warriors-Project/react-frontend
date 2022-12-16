import axios from "axios";

export async function getBooksByName(book_name) {
  try {
    const res = await axios.get(
      `https://8yffpe0pcl.execute-api.us-east-1.amazonaws.com/dev/api/v1/book/book_name/${book_name}`
    );
    const booksJSON = await res.data;

    return objectsToArray(booksJSON);
  } catch (e) {
    console.log(e);
    return [];
  }
}

export async function getBookInfoBookID(book_id) {
  try {
    const res = await axios.get(
      `https://8yffpe0pcl.execute-api.us-east-1.amazonaws.com/dev/api/v1/book/book_ids/${book_id}`
    );
    const bookInfo = await res.data;
    return objectsToArray(bookInfo)[0];
  } catch (e) {
    console.log(e);
    return {};
  }
}

// books come in object form {0:{}, 1:{}, ...}
// helper to convert this to [{...}, {...}, {...}]
export const objectsToArray = (books) => {
  return Object.entries(books)
    .sort()
    .map((elem) => elem[1]);
};
