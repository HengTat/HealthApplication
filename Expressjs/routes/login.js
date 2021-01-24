const express= require('express');
const {Router}= require('express');
const {model}= require('mongoose');
const router=express.Router();
const user= require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv/config");


//create new user api
router.post('/signup',async(req,res)=>{
  if(!req.body.email || !req.body.password){
    return res.status(400).json({msg:"Requires email and password"})
  }
  if ( req.body.password.length<5) {
    return res.status(400).json({ msg: "Password is too short" });
  }
  const existinguser= await user.findOne({email:req.body.email})
  if(existinguser!=null){
     return res.status(400).json({msg:"Email has already been used"})
  }
  const passwordhash=await bcrypt.hash(req.body.password,10)
    const newuser = new user({
      email: req.body.email,
      password: passwordhash,
    });
  newuser.save().then(()=> res.status(201).json({msg:"Account has been succesfully created"}));
});

//sign in api
router.get("/signin/:email/:password", async (req, res) => {
    if (!req.params.email || !req.params.password) {
      return res.status(400).json({ msg: "Requires email and password" });
    }
    const curruser= await user.findOne({email:req.params.email});
    if(curruser==null){
      return res.status(400).json({msg:"Email does not exist"});
    }
    bcrypt.compare(req.params.password,curruser.password,function(err,result){
      if(result){
          const email = { email: curruser.email };
          const accesstoken=jwt.sign(email,process.env.ACCESS_TOKEN_SECRET)
          return res.status(200).json({msg:"Login successful", accesstoken:accesstoken});
      }
      else if(result===false){
        return res.status(400).json({ msg: "Invalid password" });
      }
    })
});

//get user details
router.put('/edituser',(req,res)=>{
  

})















module.exports = router;