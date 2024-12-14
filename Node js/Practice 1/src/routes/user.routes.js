import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

// Define the GET route
router.get('/register', registerUser);

export default router;
