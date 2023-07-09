const app = require('./app.js')
const {serverPort} = require('./secret.js')

app.listen(serverPort,()=>{
    console.log(`Server is running at ${serverPort}`);
}) 
