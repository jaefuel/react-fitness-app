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

router.get("/workouts/:id", workoutsController.getWorkouts);
router.get("/workouts/", workoutsController.exploreWorkouts);
router.get("/plans/:id", plansController.getPlans);
router.get("/plans/", plansController.explorePlans);

router.get("/user", authController.getUser);

module.exports = router;
