const express = require("express")
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


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

app.listen(3001,()=>{
    console.log(`Server is running at 3001`);
})