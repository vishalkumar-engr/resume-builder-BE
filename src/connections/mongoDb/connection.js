const mongoose = require("mongoose");

module.exports.connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB Connected")
  } catch (error) {
    console.log({ message: error });
  }
};
