const express = require("express");
const EventController = require("../controllers/eventController");

const router = express.Router();

router.post("/events", EventController.createEvent);
router.get("/events", EventController.getAllEvents);
router.put("/events/:id", EventController.updateEvent);
router.delete("/events/:id", EventController.deleteEvent);

module.exports = router;
