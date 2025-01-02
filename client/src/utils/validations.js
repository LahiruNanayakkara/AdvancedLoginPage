export const validateEmail = (email) => {
  if (!email) return "Email is required*";

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return "Invalid email";
  }
  return null;
};

export const validatePassword = (password) => {
  if (!password) return "Password is required*";

  return password.length >= 8 ? null : "Password must be at least 8 characters";
};
