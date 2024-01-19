const mongoose = require("mongoose");

const foodCountSchema = new mongoose.Schema(
  {
    name: String,
    count: Number,
  },
  { _id: false }
);

const monkeySchema = new mongoose.Schema({
  user: { type: String, required: true, unique: true },
  name: String,
  hunger: Number,
  foodCounts: [foodCountSchema],
  lastUpdated: { type: Date, default: Date.now },
});

const Monkey = mongoose.model("Monkey", monkeySchema);

module.exports = Monkey;
