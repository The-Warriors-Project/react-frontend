import axios from "axios";
import {objectsToArray} from "./BooksAPI";

export async function likeBook(username, book_id, successCallback, errorCallback) {
  try {
    const user_and_book_id = username + "?book=" + book_id
    const res = await axios.put(
      `https://8yffpe0pcl.execute-api.us-east-1.amazonaws.com/dev/api/v1/composite/like_book/${user_and_book_id}`
    );
    const data = await res.data;
    if (!data.success) {
      errorCallback(data.payload);
    } else {
      successCallback(data.payload);
    }
  } catch (e) {
    errorCallback(e.response.data);
    return null;
  }
}

export async function unlikeBook(username, book_id, successCallback, errorCallback) {
  try {
    const user_and_book_id = username + "?book=" + book_id
    const res = await axios.put(
      `https://8yffpe0pcl.execute-api.us-east-1.amazonaws.com/dev/api/v1/composite/unlike_book/${user_and_book_id}`
    );
    const data = await res.data;
    if (!data.success) {
      errorCallback();
    } else {
      successCallback(data.payload);
    }
  } catch (e) {
    errorCallback(e.response.data);
    return null;
  }
}

export async function getLikedBooksByUsername(username) {
  try {
    const res = await axios.get(
      `https://8yffpe0pcl.execute-api.us-east-1.amazonaws.com/dev/api/v1/composite/${username}`
    );
    const booksJSON = await res.data;
    return objectsToArray(booksJSON);
  } catch (e) {
    return [];
  }
}

export async function deleteProfile(username, successCallback, errorCallback) {
  try {
    console.log(`https://8yffpe0pcl.execute-api.us-east-1.amazonaws.com/dev/api/v1/composite/manage_users/${username}`)
    const res = await axios.delete(
      `https://8yffpe0pcl.execute-api.us-east-1.amazonaws.com/dev/api/v1/composite/manage_users/${username}`
    );
    const data = await res.data;
    console.log(data)
    if (!data.success) {
      errorCallback();
    } else {
      successCallback(data.payload);
    }
  } catch (e) {
    errorCallback(e.response.data);
    return null;
  }
}

