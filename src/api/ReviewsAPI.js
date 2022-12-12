import axios from "axios";

export async function getReviewsByBookID(book_id) {
  try {
    const res = await axios.get(
      `https://8yffpe0pcl.execute-api.us-east-1.amazonaws.com/dev/api/v1/reviews/book_id/${book_id}`
    );
    const reviewsData = await res.data;
    return reviewsData;
  } catch (e) {
    console.log(e);
    return {};
  }
}

export async function addReview(reviewInfo, successCallback, errorCallback) {
  try {
    const options = {
      method: "POST",
      data: reviewInfo,
      url: `https://8yffpe0pcl.execute-api.us-east-1.amazonaws.com/dev/api/v1/reviews`,
    };

    const res = await axios(options);
    const { status } = res;

    if (status === 200) {
      successCallback("Successful Review");
    }
  } catch (e) {
    if (e.response.status === 400) {
      errorCallback("User can only submit one review per book");
    } else {
      errorCallback("Network Error. Please try again later.");
    }

    return null;
  }
}
