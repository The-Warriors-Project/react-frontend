export const isValidEmail = (email) => {
  return /^\S+@\S+\.\S+$/.test(email);
};

export const isEmptyString = (str) => {
  return typeof str === "string" && str.length === 0;
};

export const isValidUsername = (username) => {
  return !isEmptyString(username); // todo: This should be updated
};
