const mongoose = require("mongoose");
const { Schema } = mongoose;

const educationSchema = new Schema({
  degree: {
    type: String,
    required: true,
  },
  ins: {
    type: String,
    required: true,
  },
  marks: {
    type: String,
    required: true,
  },
});

const skillSchema = new Schema({
  key: {
    type: String,
  },
  value: {
    type: Number,
  },
});
const socialSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const experienceSchema = new Schema({
  orgName: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  skills: [String],
});

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  skills: [String],
});

const resumeSchema = new Schema(
  {
    basic: {
      first: {
        type: String,
        required: true,
      },
      last: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
      },
      profession: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      about: {
        type: String,
        required: true,
      },
      pinCode: {
        type: Number,
      },
    },
    education: [educationSchema],
    experience: [experienceSchema],
    project: [projectSchema],
    technicalSkills: [skillSchema],
    personalSkills: [skillSchema],
    templateId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    social: [socialSchema],
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Resume = mongoose.model("Resume", resumeSchema);

// Export the models
module.exports = Resume;
