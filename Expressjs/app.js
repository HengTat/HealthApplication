const express= require('express')
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");
const updates=require('./routes/updates');
const login= require("./routes/login");
const app= express();
const cors= require('cors');
const jwt= require('jsonwebtoken');


app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use('/updates',updates);
app.use('/login',login);




mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true},()=>console.log('MongDB has been connected'));





app.listen(3000);