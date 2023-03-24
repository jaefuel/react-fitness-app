const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const workoutsController = require("../controllers/workouts");
const plansController = require("../controllers/plans");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now

router.post("/login", authController.postLogin);
router.post("/signup", authController.postSignup);

router.get("/auth/google", authController.postLoginGoogle);
router.get("/auth/google/callback", authController.postLoginGoogleCallback);

router.post("/logout", authController.postLogout);

router.get("/user", authController.getUser);



module.exports = router;
