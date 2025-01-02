const defaultUser = {
  email: "lahirunanayakkara924@gmail.com",
  password: "12345678",
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required", data: null });
    }
    if (email !== defaultUser.email) {
      return res.status(400).json({ message: "User does't exist", data: null });
    }
    if (password !== defaultUser.password) {
      return res.status(400).json({ message: "Invalid password", data: null });
    }
    res.status(200).json({ message: "Login successful", data: { email } });
  } catch (error) {
    res.status(500).json({ message: error.message, data: null });
  }
};
