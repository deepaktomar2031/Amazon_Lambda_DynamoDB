const express = require("express");
const {
  readAllUsers, getUserById, createUser, updateUser, deleteUserById,
} = require("./controller");

const router = express.Router();

// READ ALL Users
router.get("/users", readAllUsers);
// Get User by ID
router.get("/user/:id", getUserById)
// Create User
router.post("/user", createUser)
// Update User by ID
router.put("/user/:id", updateUser)
// Delete User by Id
router.delete("/user/:id", deleteUserById)

module.exports = router;