const cloudinary = require('cloudinary').v2
require('dotenv').config() // Ensure this is called if not already somewhere in your app initialization

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

module.exports = cloudinary
