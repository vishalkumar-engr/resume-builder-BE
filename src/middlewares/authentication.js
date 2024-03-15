const { validateToken } = require("../services/authentication");

function checkForAuthentication() {
  return (req, res, next) => {
    let token = req.header("Authorization");

    if (!token) {
      return res
        .status(401)
        .json({ message: "Authorization token is required" });
    }

    try {
      token = token.split(" ")[1];
      const userPayload = validateToken(token);
        req.user = userPayload;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
    }
  };
}

module.exports = {
  checkForAuthentication,
};
