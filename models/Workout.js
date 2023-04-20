const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  drills: {
    type: Array,
    default: []
  },
  likes: {
    type: Array,
    default: []
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }

});

module.exports = mongoose.model("Workout", WorkoutSchema);
