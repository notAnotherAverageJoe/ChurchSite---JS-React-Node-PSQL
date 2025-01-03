const express = require("express");
const EventController = require("../controllers/eventController");

const router = express.Router();

router.post("/events", EventController.createEvent);

module.exports = router;
