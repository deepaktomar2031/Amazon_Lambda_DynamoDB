const {
  createOrUpdateLambdaFunction,
  deleteUserByIdLambdaFunction,
  getUserByIdLambdaFunction,
  readAllUsersLambdaFunction,
} = require("./lambda.js");

// READ ALL Users
const readAllUsers = async (req, res) => {
  const { success, data } = await readAllUsersLambdaFunction();

  if (success) {
    return res.status(200).json({ success, data });
  }
  return res.status(500).json({ success: false, message: "Error" });
}

// Get User by ID
const getUserById = async (req, res) => {
  const { id } = req.params;
  const { success, data } = await getUserByIdLambdaFunction(id);
  console.log(data);
  if (success) {
    return res.json({ success, data });
  }

  return res.status(500).json({ success: false, message: "Error" });
};

// Create User
const createUser = async (req, res) => {
  const { success, data } = await createOrUpdateLambdaFunction(req.body);

  if (success) {
    return res.json({ success, data });
  }

  return res.status(500).json({ success: false, message: "Error" });
};

// Update User by ID
const updateUser = async (req, res) => {
  const user = req.body;
  const { id } = req.params;
  user.id = parseInt(id);

  const { success, data } = await createOrUpdateLambdaFunction(user);

  if (success) {
    return res.json({ success, data });
  }

  return res.status(500).json({ success: false, message: "Error" });
};

// Delete User by Id
const deleteUserById = async (req, res) => {
  const { id } = req.params;
  const { success, data } = await deleteUserByIdLambdaFunction(id);
  if (success) {
    return res.json({ success, data });
  }
  return res.status(500).json({ success: false, message: "Error" });
};

module.exports = { readAllUsers, getUserById, createUser, updateUser, deleteUserById }
