const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const workoutsController = require("../controllers/workouts");
const plansController = require("../controllers/plans");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now

router.post("/login", authController.postLogin);
router.post("/signup", authController.postSignup);
router.post("/logout", authController.postLogout);

router.get("/workouts", workoutsController.getWorkouts);
router.get("/plans", plansController.getPlans);

router.get("/user", authController.getUser);

module.exports = router;
