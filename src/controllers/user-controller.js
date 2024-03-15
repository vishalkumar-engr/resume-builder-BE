const User = require("../models/user-model");

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);
    return res.status(200).json(token);
  } catch (error) {
    return res.status(401).json({ message: "Incorrect Email or Password" });
  }
};

const signUp = async (req, res) => {
  try {
    let { email, password, uniqueKey, phone } = req.body;
    email = email.toLowerCase();
    uniqueKey = uniqueKey.toLowerCase();
    await User.create({
      email,
      password,
      uniqueKey,
      phone,
    });
    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Registration failed", error });
  }
};

module.exports = {
  signIn,
  signUp,
};
