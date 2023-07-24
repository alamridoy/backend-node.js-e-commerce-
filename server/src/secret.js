require('dotenv').config()
const serverPort = process.env.SERVER_PORT || 3002;

//mongo cloud server url path
const mongodbURL = process.env.MONGODB_ATLAS_URL || "mongodb://localhost:27017/ecommerceDB2023";


// image secret path
const defaultImagePath = process.env.DEFAULT_USER_IMAGE_PATH || 'public/images/users/default.jpg';


module.exports = {serverPort,mongodbURL,defaultImagePath}