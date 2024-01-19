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

// POST new monkey
router.post("/newmonkey", async (req, res) => {
  try {
    // Validate request body and get expected values
    const { user, name } = req.body;
    if (Object.keys(req.body).length !== 2 || !user || !name) {
      return res
        .status(400)
        .json({ error: "Request body does not follow Monkey schema" });
    }

    // Create new monkey object
    const newMonkey = new Monkey({
      user: user,
      name: name,
      hunger: 75,
      foodCounts: [
        { name: "banana", count: 3 },
        { name: "grape", count: 5 },
        { name: "watermelon", count: 0 },
      ],
    });

    // Save new monkey to database
    // console.log("Monkey being saved is:", newMonkey);
    await newMonkey.save();
    res.status(200).json({ message: "New monkey was successfully created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
