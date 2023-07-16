import express from "express";
import { registerUser, login, users } from "../controllers/userController.js";
 
const router = express.Router();

router.post("/register", registerUser);

router.post("/login", login);

router.get("/users", users);




export default router;
