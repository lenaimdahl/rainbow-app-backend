const { Schema, model } = require("mongoose");

const activitySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required."],
    },
    points: {
      type: Number,
      required: [true, "points are required."],
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Activity = model("activity", activitySchema);

module.exports = Activity;
