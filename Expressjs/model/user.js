
const mongoose = require('mongoose');

const userModel= mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    signupdate:{
        type:Date,
        default:Date.now
    }
    
});

module.exports=mongoose.model("user",userModel);