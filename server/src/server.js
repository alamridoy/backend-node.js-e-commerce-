const express = require("express")
const morgan = require('morgan')
const app = express()
const bodyParser = require('body-parser')

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
    res.status(404).json({
        message:"Route not found"
    })
    next()
})
//server error handling
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('Something broke!')
})


app.listen(3001,()=>{
    console.log(`Server is running at 3001`);
})