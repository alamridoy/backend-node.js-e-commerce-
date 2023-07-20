const mongoose = require("mongoose")
const {mongodbURL} = require("../secret")
const connectDatabase = async(options={})=>{
    try {
       await mongoose.connect(mongodbURL,options)
       console.log("Connect Succesfully Database")
       mongoose.connect.on('error',(error)=>{
        console.error('DB connection error: ', error)
       })
    } catch (error) {
        console.log('Couldnot connect to db',error.toString())
    }
};

module.exports = connectDatabase;