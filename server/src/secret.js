require('dotenv').config()
const serverPort = process.env.SERVER_PORT || 3002;

const mongodbURL = process.env.MONGODB_ATLAS_URL || "mongodb://localhost:27017/ecommerceDB2023";


module.exports = {serverPort,mongodbURL}