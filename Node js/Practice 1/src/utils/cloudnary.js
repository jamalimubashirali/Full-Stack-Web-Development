import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECERT// Click 'View API Keys' above to copy your API secret
});

export const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath)
            return null;
        const response = await cloudinary.uploader.upload(localFilePath , {
            resource_type : "auto"
        });

        // 
        console.log(`File uploaded sucessfully ${response.url}`)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        // If upload fails this removes the file
        return null;
    }
}


// To upload an image
await cloudinary.uploader
       .upload(
           'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
               public_id: 'shoes',
           }
       )
       .catch((error) => {
           console.log(error);
       });