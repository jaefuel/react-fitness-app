const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const plansController = require("../controllers/plans");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", plansController.getPlans);

router.get("/discover", plansController.discoverPlans);

router.post("/publish", plansController.publishPlan);

router.post("/publish/:id", plansController.addPlan);

router.put("/likePlan/:id", plansController.likePlan);

router.delete("/deletePlan/:id", plansController.deletePlan);

module.exports = router;
