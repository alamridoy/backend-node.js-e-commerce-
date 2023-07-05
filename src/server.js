const express = require("express")

const app = express()

app.get('/',(req,res)=>{
    res.send("Welcome to server")
})

app.get('/products',(req,res)=>{
    res.status(200).send("Products List is here")
})



app.listen(3001,()=>{
    console.log(`Server is running at 3001`);
})