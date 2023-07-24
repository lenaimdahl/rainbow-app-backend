const router = require("express").Router();
const ActivityModel = require("../models/Activity.model");

router.get("/activities", async (req, res) => {
  try {
    const activities = await ActivityModel.find();
    res.status(200).json({ activities });
  } catch (err) {
    console.error("ERROR fetching activity from DB", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
