const Member = require("../models/members");

const MemberController = {
  createMember: async (req, res) => {
    const { name, email, phone, joinedDate } = req.body;
    try {
      const newMember = await Member.create({
        name,
        email,
        phone,
        joinedDate,
      });
      return res
        .status(201)
        .json({ message: "New Member created!", memeber: newMember });
    } catch (error) {
      console.error("Error failed to create new member", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = MemberController;
