import axios from "axios";

// for now, the api returns one json representing one book
// should later update to an array of js
export async function getBooksByName(book_name) {
  const res = await axios.get(
    `https://8yffpe0pcl.execute-api.us-east-1.amazonaws.com/dev/api/v1/book/book_name/${book_name}`
  );
  return await res.data;
}
