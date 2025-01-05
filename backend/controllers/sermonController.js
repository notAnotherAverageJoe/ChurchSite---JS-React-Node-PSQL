const Sermons = require("../models/sermons");

const SermonController = {
  createSermon: async (req, res) => {
    const { title, preacher, date, videoUrl, audioUrl, transcript } = req.body;
    try {
      const newSermon = await Sermons.create({
        title,
        preacher,
        date,
        videoUrl,
        audioUrl,
        transcript,
      });

      return res
        .status(201)
        .json({ message: "New sermon has been created!", sermon: newSermon });
    } catch (error) {
      console.error("Failed to create the new sermon", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = SermonController;
