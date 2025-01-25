import express from "express";
import userController from "./user.controller.js";

const router = express.Router();

router.post("/users", userController.signup);
router.get("/users/:id", userController.getSingleUser);
router.post("/users/login", userController.login);
router.get("/users/getAll", userController.getAllUsers);
router.patch("/user/:id", userController.updateAUser);
router.delete("/user/:id", userController.DeleteAUser);

const userRoutes = router;

export default userRoutes;