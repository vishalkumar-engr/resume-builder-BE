const Resume = require("../models/resume-model");

const getResume = async (req, res) => {
  try {
    const { _id } = req.user;
    const resumeData = await Resume.find({ user: _id }, { title: 1, _id: 1 });
    // const resumeData = await Resume.find({ user: _id },{ title: 1, _id: 1 }).skip(20).limit(20);
    return res.status(200).json(resumeData);
  } catch (err) {
    console.error("Error retrieving users:", err);
  }
};

const getSingleResume = async (req, res) => {
  try {
    let { id } = req.params;
    const resumeData = await Resume.findById(id);
    return res.status(200).json(resumeData);
  } catch (err) {
    console.error("Error retrieving users:", err);
  }
};

const addResume = async (req, res) => {
  try {
    let user_id = req.user._id;
    let user = req.body;
    user["user"] = user_id;
    await Resume.create(user);
    return res.status(200).json({ message: "Details saved successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Duplicate resume titles" });
  }
};

const updateResume = async (req, res) => {
  try {
    let id = req.params;
    let user_id = req.user._id;
    let user = req.body;
    user["user"] = user_id;
    await Resume.updateOne(id, user);
    return res.status(200).json({ message: "Details saved successfully" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

module.exports = {
  getResume,
  addResume,
  updateResume,
  getSingleResume,
};
