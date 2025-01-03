const express = require("express");
const EventController = require("../controllers/eventController");

const router = express.Router();

router.post("/events", EventController.createEvent);
router.get("/events", EventController.getAllEvents);
router.put("/events/:id", EventController.updateEvent);

module.exports = router;
