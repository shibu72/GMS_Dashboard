import User from "./user.model.js";
import bcrypt from "bcrypt";

// signup function to create a new user in the database
const signup = async (userData) => {
  // Hashing the password before saving it to the database
  const data = { ...userData };
  const hashedPassword = await bcrypt.hash(data?.password, 12);
  data.password = hashedPassword;
  // create a new user object
  const result = await User.create(data);
  return result;
};

// login function to authenticate a user
const login = async (userData) => {
  // user exist
  const isUserExist = await User.findOne({ email: userData?.email });
  if (!isUserExist) {
    throw new Error("user not found");
  }

  // password match
  const isPasswordMatched = await bcrypt.compare(
    userData?.password,
    isUserExist?.password
  );
  if (!isPasswordMatched) {
    throw new Error("password did not match");
  }

  return isUserExist;
};

// get a single user
const getSingleUser = async (id) => {
  const result = await User.findById(id);
  return result;
};

// get all users
const getAllUsers = async () => {
  return await User.find();
};

// update a user
const updateAUser = async (id, userData) => {
  const { name, role } = userData;
  const result = await User.findByIdAndUpdate(
    id,
    { name, role },
    { new: true }
  );
  return result;
};

// delete a user
const DeleteAUser = async (id) => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

const userServices = {
  signup,
  getSingleUser,
  login,
  getAllUsers,
  updateAUser,
  DeleteAUser,
};

export default userServices;