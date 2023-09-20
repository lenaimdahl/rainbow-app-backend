const router = require("express").Router();
const UserModel = require("../models/User.model");

router.get("/points", async (req, res) => {
  try {
    const user = await UserModel.find();
    res.status(200).json({ points: user.points });
  } catch (err) {
    console.error("ERROR fetching activity from DB", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
