const express = require("express");
const MembersController = require("../controllers/membersController");
const { post } = require("./eventRoutes");

const router = express.Router();

router.post("/member", MembersController.createMember);

module.exports = router;
