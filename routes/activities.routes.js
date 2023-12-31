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

router.post("/activities", async (req, res) => {
  try {
    const { name, points } = req.body;
    const savedActivity = await ActivityModel.create({
      name,
      points,
    });
    res.status(200).json({ savedActivity });
  } catch (err) {
    console.error("ERROR while adding the activity :>>", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
