const { connect } = require('mongoose');
const app = require('./app.js')
const {connectDatabase} = require('../src/config/db.js')
const {serverPort} = require('./secret.js')

app.listen(serverPort,async()=>{
    console.log(`Server is running at http://localhost:${serverPort}`);
    await connectDatabase;
}) ;


