import userServices from "./user.service.js";

// Register
const signup = async (req, res, next) => {
  try {
    const result = await userServices.signup(req.body);
    res.status(200).json({
      message: "User created successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Login
const login = async (req, res, next) => {
  try {
    const result = await userServices.login(req.body);
    res.status(200).json({
      message: "User logged in successfully",
      success: true,
      data: result,
      token: 'yeamatekudasai'
    });
  } catch (error) {
    next(error);
  }
};


// Get a single user
const getSingleUser = async (req, res, next) => {
  try {
    const result = await userServices.getSingleUser(req.params.id);
    res.status(200).json({
      message: "User retrieved successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};


// Get all users
const getAllUsers = async (req, res, next) => {
  try {
    const result = await userServices.getAllUsers();
    res.status(200).json({
      message: "all users retrieved successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};


// Update a user
const updateAUser = async (req, res, next) => {
  try {
    const result = await userServices.updateAUser(req.params.id, req.body);
    res.status(200).json({
      message: "User updated successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};


// Delete a user
const DeleteAUser = async (req, res, next) => {
  try {
    const result = await userServices.DeleteAUser(req.params.id);
    res.status(200).json({
      message: "User deleted successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const userController = {
  signup,
  getSingleUser,
  login,
  getAllUsers,
  updateAUser,
  DeleteAUser,
};

export default userController;