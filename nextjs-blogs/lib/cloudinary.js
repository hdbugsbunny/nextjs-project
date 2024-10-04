import { v2 as cloudinary } from "cloudinary";

if (!process.env.CLOUDINARY_CLOUD_NAME) {
  throw new Error("Missing Cloudinary cloud name");
}

if (!process.env.CLOUDINARY_API_KEY) {
  throw new Error("Missing Cloudinary API key");
}

if (!process.env.CLOUDINARY_API_SECRET) {
  throw new Error("Missing Cloudinary API secret");
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(image) {
  const imageData = await image.arrayBuffer();
  const mine = image.type;
  const encoding = "base64";
  const base64Data = Buffer.from(imageData).toString("base64");
  const fileUri = `data:${mine};${encoding},${base64Data}`;
  const result = await cloudinary.uploader.upload(fileUri, {
    folder: "nextjs-blogs",
  });
  return result.secure_url;
}
