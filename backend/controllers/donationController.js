const Donation = require("../models/donations");

const DonationController = {
  createDonation: async (req, res) => {
    const { donorName, amount, date, method } = req.body;
    try {
      const newDonation = await Donation.create({
        donorName,
        amount,
        date,
        method,
      });
      return res.status(201).json({
        message: "New donation has been created!",
        donation: newDonation,
      });
    } catch (error) {
      console.error("Failed to create donation", error);
      return res
        .status(500)
        .json({ error: "Internal server error, on create donation" });
    }
  },
};

module.exports = DonationController;
