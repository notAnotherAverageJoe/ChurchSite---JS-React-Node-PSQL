const bcrypt = require("bcrypt");
const User = require("../models/users");
const SALT_ROUNDS = 10;

const UserController = {
  // Create a new user
  createUser: async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
      // Check if email already exists
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ error: "Email already in use" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

      // Create the user
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        role,
      });

      return res
        .status(201)
        .json({ message: "User created successfully", user: newUser });
    } catch (error) {
      console.error("Error creating user:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  // Authenticate a user (login)
  loginUser: async (req, res) => {
    const { email, password } = req.body;

    try {
      // Find the user by email
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Compare the password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      return res.status(200).json({ message: "Login successful", user });
    } catch (error) {
      console.error("Error logging in user:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  // Get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  // Update a user
  updateUser: async (req, res) => {
    const { id } = req.params;
    const { name, email, password, role } = req.body;

    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Update the fields
      if (name) user.name = name;
      if (email) user.email = email;
      if (password) user.password = await bcrypt.hash(password, SALT_ROUNDS);
      if (role) user.role = role;

      await user.save();

      return res
        .status(200)
        .json({ message: "User updated successfully", user });
    } catch (error) {
      console.error("Error updating user:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  // Delete a user
  deleteUser: async (req, res) => {
    const { id } = req.params;

    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      await user.destroy();
      return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      console.error("Error deleting user:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = UserController;
