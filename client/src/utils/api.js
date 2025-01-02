export const loginAPI = async (data) => {
  return await fetch("/api/auth/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
