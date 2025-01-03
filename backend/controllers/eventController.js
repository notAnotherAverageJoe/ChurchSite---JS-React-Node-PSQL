const Event = require("../models/event");

const EventController = {
  createEvent: async (req, res) => {
    const { title, description, date, location, isOnline } = req.body;
    try {
      const newEvent = await Event.create({
        title,
        description,
        date,
        location,
        isOnline,
      });

      return res
        .status(201)
        .json({ message: "New Event has been created!", event: newEvent });
    } catch (error) {
      console.error("Error failed to create new Event", error);
      return res.status(500).json({ error: "Internal server error yikes" });
    }
  },

  getAllEvents: async (req, res) => {
    try {
      const events = await Event.findAll();
      return res.status(200).json(events);
    } catch (error) {
      console.error("Failed to find all events", error);
      return res.status(500).json({ error: "Internal server error uhoh" });
    }
  },
};

module.exports = EventController;
