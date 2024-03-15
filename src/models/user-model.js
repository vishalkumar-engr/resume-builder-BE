const { createHmac, randomBytes } = require("crypto");
const { Schema, model } = require("mongoose");
const { createTokenForUser } = require("../services/authentication");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    uniqueKey: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const user = this;

  const hash = await bcrypt.hash(user.password, 10);
  this.password = hash;

  next();
});

userSchema.static(
  "matchPasswordAndGenerateToken",
  async function (email, password) {
    const user = await this.findOne({
      $or: [{ email: email }, { uniqueKey: email }],
    });
    if (!user) throw new Error("User not found!");

    const result = await bcrypt.compare(password, user.password);
    if (result) {
      const token = createTokenForUser(user);
      return token;
    } else {
      throw new Error("Incorrect Password");
    }
  }
);

const User = model("user", userSchema);

module.exports = User;
