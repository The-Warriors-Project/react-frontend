import axios from "axios";
import qs from "qs";
import jwtDecode from "jwt-decode";

const [OK_200, UNAUTHORIZED_401] = [200, 401];

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

const formatLoginInfo = (loginInfo) => {
  const formatted = {
    username: loginInfo.username,
    password: loginInfo.password,
  };

  return formatted;
};

export async function login(loginInfo, successCallback, errorCallback) {
  try {
    const formattedLoginInfo = formatLoginInfo(loginInfo);
    const options = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: qs.stringify(formattedLoginInfo),
      url: `https://8yffpe0pcl.execute-api.us-east-1.amazonaws.com/dev/api/v1/users/token`,
    };

    const res = await axios(options);
    const { data, status } = res;

    if (status === OK_200) {
      const decodedToken = jwtDecode(data.access_token);
      successCallback(decodedToken);
    } else {
      errorCallback("Invalid user email/password");
    }
  } catch (e) {
    // errorCallback(e.message);
    errorCallback("Invalid user email/password");
    return null;
  }
}

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
