const express = require("express");
const router = express.Router();
const {
  Register,
  Login,
  getUsers,
  DeleteUsers,
  UpdateUsers,
} = require("../../Controllers/Auth/AuthController");
const AuthMiddleware = require("../../Middlewares/AuthMiddleware");

// Get The User Data
router.get("/", AuthMiddleware, getUsers);
// Create User Main Data
router.post("/Register", Register);
// Login Route
router.post("/Login", Login);
// Delete User Data [Only One]
router.delete("/:id", DeleteUsers);
// Update The User Data
router.patch("/:id", UpdateUsers);

module.exports = router;
