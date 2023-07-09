const express = require("express")
const morgan = require('morgan')
const app = express()
const bodyParser = require('body-parser')
const createError = require('http-errors')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())



const isLoggedIn=(req,res,next)=>{
   const login = true;
   if(login){
    req.body.id = 101;
    next()
   }else{
    res.status(401).json({
        message: "login first"
    })
   }
}
app.use(isLoggedIn)
app.get('/api/user',(req,res)=>{
    console.log(req.body.id);
    res.status(200).send({
        message:'user profile is returned'
    })
})

app.get('/',(req,res)=>{
    res.send("Welcome to server")
})

//client error handling
app.use((req,res,next)=>{
 next(createError(404,'Route not found'));

})
//server error handling -> all error handle this place
app.use((err,req,res,next)=>{
   return res.status(err.status || 500).json({
    success : false,
    message: err.message,
   });
});


module.exports=app