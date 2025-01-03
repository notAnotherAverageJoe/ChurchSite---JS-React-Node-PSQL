const express = require("express");
const UserController = require("../controllers/userController");

const router = express.Router();

router.post("/users", UserController.createUser);
router.post("/login", UserController.loginUser);
router.get("/users", UserController.getAllUsers);
router.put("/users/:id", UserController.updateUser);
router.delete("/users/:id", UserController.deleteUser);

module.exports = router;
