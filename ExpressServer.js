const express = require('express');
const session = require('express-session');

//create app:
const app = express();

//app config
let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');
//start the server
app.listen(port, host, ()=>{
    console.log('Server is running on port ', port);
})