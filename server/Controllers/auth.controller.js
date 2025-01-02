export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "All fields are required", data: null });
    }
    res.status(200).json({ message: "Login successful", data: { email } });
  } catch (error) {
    res.status(500).json({ message: error.message, data: null });
  }
};
