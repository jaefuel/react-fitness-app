const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const workoutsController = require("../controllers/workouts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", workoutsController.getWorkouts);

router.get("/:name", workoutsController.getWorkout);

router.post("/publish", workoutsController.publishWorkout);

router.put("/likeWorkout/:id", workoutsController.likeWorkout);

router.delete("/deleteWorkout/:id", workoutsController.deleteWorkout);

//router.post("/publish/:id", workoutsController.addWorkout);

module.exports = router;
