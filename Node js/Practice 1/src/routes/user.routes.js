import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import multer from "multer";

const router = Router();

// Define the POST route
router.post('/register', (req, res, next) => {
    upload.fields([
        { name: "avatar", maxCount: 1 },
        { name: "coverImage", maxCount: 1 }
    ])(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(400).json({ error: err.message }); // Multer-specific errors
        } else if (err) {
            return res.status(500).json({ error: err.message }); // General errors
        }
        next();
    });
}, registerUser);

export default router;
