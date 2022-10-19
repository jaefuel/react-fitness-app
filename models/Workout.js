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
  total: {
    type: Number,
    default: 0
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }

});

module.exports = mongoose.model("Workout", WorkoutSchema);
