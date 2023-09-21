const router = require("express").Router();
const UserModel = require("../models/User.model");

router.get("/user/userId/activities", async (req, res) => {
  try {
    const user = await UserModel.find();
    res.status(200).json({ activities: user.activities });
  } catch (err) {
    console.error("ERROR fetching activity from DB", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/user/:userId/activities", async (req, res) => {
  try {
    const { id } = req.body;
    const { userId } = req.params;
    const updatedActivities = await UserModel.findByIdAndUpdate(
      userId,
      {
        $push: { activities: id },
      },
      { new: true }
    );
    console.log(updatedActivities);
    res.status(200).json({ updatedActivities });
  } catch (err) {
    console.error("ERROR while adding the activity :>>", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
