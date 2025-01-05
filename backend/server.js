const express = require("express");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventRoutes");
const donationRoutes = require("./routes/donationRoutes");
const memberRoutes = require("./routes/memberRoutes");
const sermonRoutes = require("./routes/sermonRoutes");

const app = express();

app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", eventRoutes);
app.use("/api", donationRoutes);
app.use("/api", memberRoutes);
app.use("/api", sermonRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
