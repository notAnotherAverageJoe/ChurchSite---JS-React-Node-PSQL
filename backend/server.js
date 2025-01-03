const express = require("express");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());
app.use("/api", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
