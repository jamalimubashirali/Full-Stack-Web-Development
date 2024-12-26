import jwt from "jsonwebtoken";
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async (req , _ , next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.split(" ")[1];
    
        if(!token) {
            throw new ApiError(401 , "Unauthorized token");
        }
    
        const decoded = jwt.verify(token , process.env.ACCESS_TOKEN_SECRET);
    
        const user = await User.findById(decoded._id).select("-password -refreshToken");
    
        if(!user) {
            throw new ApiError(400 , "The refesh token is invalid");
        }
    
        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401 , "Invalid refresh Token"); 
    }
});