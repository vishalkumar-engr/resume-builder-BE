const express = require("express");
const router = express.Router();

// Routers
const userRouter = require("./user-route");
const resumeRouter = require("./resume-route");

//all user Routes
router.use("/api/user", userRouter);

// all resume Routes
router.use("/api/resume", resumeRouter);

// unknown Routes
router.all("*", (req, res) => {
  res.status(404).send(`Url:${req.originalUrl} Not Found.`);
});

module.exports = router;
