export const isValidEmail = (email) => {
  return /^\S+@\S+\.\S+$/.test(email);
};

export const isEmptyString = (str) => {
  return typeof str === "string" && str.length === 0;
};
