const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const workoutsController = require("../controllers/workouts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, workoutsController.getWorkout);

router.post("/publish", workoutsController.publishWorkout);

router.put("/likeWorkout/:id", workoutsController.likeWorkout);

router.delete("/deleteWorkout/:id", workoutsController.deleteWorkout);

module.exports = router;
