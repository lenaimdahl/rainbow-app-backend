const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required."],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "password is required."],
    },
    activities: [{ type: Schema.Types.ObjectId, ref: "activity" }],
  },
  {
    timestamps: true,
  }
);

const User = model("user", userSchema);

module.exports = User;
