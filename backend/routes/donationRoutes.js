const express = require("express");
const DonationController = require("../controllers/donationController");

const router = express.Router();

router.post("/donation", DonationController.createDonation);

module.exports = router;
