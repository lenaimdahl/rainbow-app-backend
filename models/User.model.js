const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required."],
    },
    points: {
      type: Number,
      required: [true, "points are required."],
    },
  },
  {
    timestamps: true,
  }
);

const User = model("user", userSchema);

module.exports = User;
