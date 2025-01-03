const express = require("express");
const EventController = require("../controllers/eventController");

const router = express.Router();

router.post("/events", EventController.createEvent);
router.get("/events", EventController.getAllEvents);

module.exports = router;
