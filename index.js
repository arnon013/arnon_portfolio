const express = require('express');
const router = require('./routes/index');
const hbs = require('express-handlebars');
const app = express();
const path = require('path');

//Middleware
app.use(express.static(path.join(__dirname,'public')));
//Template engine 
app.engine('hbs',hbs({extname:'hbs'}));
app.set('view engine', 'hbs');

//router
app.use('/profile', router);

app.listen(
  PORT,
  () => {
    console.log(`Listening to port ${PORT}`);
  }
);

//app.listen(
//    3000,
//    () =>{
//        console.log("Listening to port 3000")
//    }
//);