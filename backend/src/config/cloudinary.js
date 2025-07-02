import { v2 as cloudinary } from "cloudinary";
import { EVN } from "./env.js";

cloudinary.config({
  cloud_name: EVN.CLOUDINARY_CLOUD_NAME,
  api_key: EVN.CLOUDINARY_API_KEY,
  api_secret: EVN.CLOUDINARY_API_SECRET,
});

export default cloudinary;
