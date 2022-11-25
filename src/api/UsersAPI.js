import axios from "axios";

const formatUserInfoForSignup = (newUserInfo) => {
  const formatted = {
    user_name: newUserInfo.username,
    first_name: newUserInfo.firstName,
    last_name: newUserInfo.lastName,
    email: newUserInfo.email,
    password: newUserInfo.password,
  };

  return formatted;
};

export async function signup(newUserInfo, successCallback, errorCallback) {
  try {
    const res = await axios.post(
      `https://8yffpe0pcl.execute-api.us-east-1.amazonaws.com/dev/api/v1/users/signup`,
      formatUserInfoForSignup(newUserInfo)
    );
    const data = await res.data;

    if (!data.success) {
      errorCallback(data.payload);
    } else {
      successCallback("Successful Signup!");
    }
  } catch (e) {
    errorCallback(e.message);
    return null;
  }
}
