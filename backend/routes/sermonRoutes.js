const express = require("express");
const SermonController = require("../controllers/sermonController");
const Sermon = require("../models/sermons");
const router = express.Router();

router.post("sermon", SermonController.createSermon);

module.exports = router;
