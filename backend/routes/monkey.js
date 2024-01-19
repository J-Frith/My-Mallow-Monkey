const express = require("express");
const Monkey = require("../models/Monkey");
const router = express.Router();

// GET monkey and food counts information for the user
router.get("/:user_email", async (req, res) => {
  try {
    const userMonkey = await Monkey.findOne({ user: req.params.user_email });
    res.status(200).json({ userMonkey });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
