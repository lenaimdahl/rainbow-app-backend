const { Schema, model } = require("mongoose");

const activitySchema = new Schema(
  {
    type: {
      type: String,
      required: [true, "type is required."],
    },
    color: {
      type: String,
      required: [true, "color is required."],
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
