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
      required: [true, "startdate is required."],
    },
    endDate: {
      type: Date,
      required: [true, "enddate is required."],
    },
  },
  {
    timestamps: true,
  }
);

const Activity = model("activity", activitySchema);

module.exports = Activity;
