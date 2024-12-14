import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js"
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudnary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const registerUser = asyncHandler(async (req, res) => {
    const {fullname , email , username, password} = req.body;
    
    if([fullname , email , password , username].some((field) => field?.trim() === "" )){
        throw new ApiError(400 , "All fields should be filled") ;
    }

    const existedUser = User.findOne({
        $or : [{email} , {username}]
    });

    if(existedUser) {
        throw new ApiError(409 , "User already exists");
    }

    const avatarLocalPath = req.fields?.avatar[0]?.path
    const coverImageLocalPath = req.fields?.coverImage[0]?.path;
    console.log(req.fields)

    if(!avatarLocalPath) {
        throw new ApiError (400 , "The Avatar image is required");
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    if(!avatar) {
        throw new ApiError(400 , "This field is required");
    }

    const user = await User.create({
        fullname, 
        avatar : avatar.url,
        coverImage : coverImage?.url || "",
        email,
        password,
        username : username.toLowerCase()
    });

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    if(!createdUser) {
        throw new ApiError(500 , "Something went while creating user");
    }

    return res.status(201).json(
        new ApiResponse(200 , createdUser , "User Registered Successfully")
    );
});
