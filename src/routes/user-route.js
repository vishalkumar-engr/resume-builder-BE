const express = require("express");
const router = express.Router();
const validator = require("../validation/index");

const userController = require("../controllers/user-controller");

// Sign in
router.post("/signin", userController?.signIn);

// Sign out
router.post("/signup", validator.signup, userController?.signUp);

//handling unknown routes.
router.all("*", (req, res) => {
  res.status(404).send(`Url:${req.originalUrl} Not Found.`);
});

module.exports = router;
