const express = require("express");
const router = express.Router();
const { checkForAuthentication } = require("../middlewares/authentication");
const validator = require("../validation/index");
const {
  getResume,
  addResume,
  updateResume,
  getSingleResume,
} = require("../controllers/resume-controller");

// Get all resume data
router.get("/all", checkForAuthentication(), getResume);

// get resume
router.get("/all/:id", checkForAuthentication(), getSingleResume);

// add data
router.post("/add", validator.addResume, checkForAuthentication(), addResume);

// add data
router.put("/add", validator.addResume, checkForAuthentication(), updateResume);

module.exports = router;
