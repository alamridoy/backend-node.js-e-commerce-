const express = require("express")
const morgan = require('morgan')
const app = express()
const bodyParser = require('body-parser')
const createError = require('http-errors')
const rateLimit = require('express-rate-limit')
const userRouter = require('./routers/userRouter')
const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minutes
	max: 5, // Limit each IP to 100 requests per `window` (here, per 1 minutes)
    messsage: 'Too many request this ip.Please try again later. ',
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/api/users',userRouter)


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