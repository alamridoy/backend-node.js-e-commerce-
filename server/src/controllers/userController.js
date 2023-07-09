const createError = require('http-errors')
const users = require('../models/userModel')
 const getUsers = (req,res,next)=>{
    try {
        console.log(req.body.id);
    res.status(200).send({
        message:'user profile is returned',
        data: users
    })
    } catch (error) {
        next(error)
    }
}



module.exports ={getUsers}