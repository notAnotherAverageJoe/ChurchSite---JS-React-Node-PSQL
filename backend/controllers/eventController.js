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

  //update events
  updateEvent: async (req, res) => {
    const { id } = req.params;
    const { title, description, date, location, isOnline } = req.body;

    try {
      const event = await Event.findByPk(id);
      if (!event) {
        return res.status(404).json({ error: "Event not found" });
      }
      //update fields in event
      if (title) event.title = title;
      if (description) event.description = description;
      if (date) event.date = date;
      if (location) event.location = location;
      if (isOnline) event.isOnline = isOnline;

      await event.save();
      return res
        .status(200)
        .json({ message: "Event has been updated!", event });
    } catch (error) {
      console.error("Failed to find event", error);
      return res.status(500).json({ error: "internal server error" });
    }
  },
  deleteEvent: async (req, res) => {
    const { id } = req.params;
    try {
      const event = await Event.findByPk(id);
      if (!event) {
        return res
          .status(404)
          .json({ message: "Event not found for deletion" });
      }
      await event.destroy();
      return res.status(200).json({ message: "Event deleted successfully" });
    } catch (error) {
      console.error("Failed to find event", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = EventController;
