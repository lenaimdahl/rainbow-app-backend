const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required."],
    },
    password: {
      type: String,
      required: [true, "password is required."],
    },
  },
  {
    timestamps: true,
  }
);

const User = model("user", userSchema);

module.exports = User;
