import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js"
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudnary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const registerUser = asyncHandler(async (req, res) => {
 
    // Get the data form Request
    const {fullname , email , username, password} = req.body;
    
    // Check For empty fields
    if([fullname , email , password , username].some((field) => field?.trim() === "" )){
        throw new ApiError(400 , "All fields should be filled") ;
    }

    // Check If user exists in database or not
    const existedUser = await User.findOne({
        $or : [{email} , {username}]
    });

    if(existedUser) {
        throw new ApiError(409 , "User already exists");
    }

    // Get the uploaded file paths
    const avatarLocalPath = req.files?.avatar[0]?.path
    const coverImageLocalPath = req.files?.coverImage === undefined ? "" : req.files?.coverImage[0]?.path;

    if(!avatarLocalPath) {
        throw new ApiError (400 , "The Avatar image is required");
    }

    // Upload images to Cloud server
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    if(!avatar) {
        throw new ApiError(400 , "This field is required");
    }

    // Create user in the database
    const user = await User.create({
        fullname, 
        avatar : avatar.url,
        coverImage : coverImage?.url || "",
        email,
        password,
        username : username.toLowerCase()
    });

    // Check if user is created Successfully in the database or not
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    if(!createdUser) {
        throw new ApiError(500 , "Something went while creating user");
    }

    //Send response after completion of the process
    return res.status(201).json(
        new ApiResponse(200 , createdUser , "User Registered Successfully")
    );
});
