import { v2 } from "cloudinary";
import fs from "fs";





async function upload() {

    // Configuration
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,  // Click 'View API Keys' above to copy your API secret
    });
}

const cloudnairyUpload = async (filePath) => {
    try {
        if (!localFilepath) return null
        const response= await cloudinary.uploader.upload(localFilepath,
            {
                resource_type: "auto",
            })
        console.log("File uploaded successfully");
        console.log(response.url);    
    }
    catch (error) {
        fs.unlinkSync(localFilepath)
        return null
    }
}











