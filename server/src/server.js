const express = require("express")
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.send("Welcome to server")
})

app.get('/products',(req,res)=>{
    res.status(200).send("Products List is here")
})



app.listen(3001,()=>{
    console.log(`Server is running at 3001`);
})