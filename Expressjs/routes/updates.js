const {Router} = require('express');
const express= require('express');
const { find } = require('../model/healthdetail');
const router=express.Router();
const healthdetail = require('../model/healthdetail');
const user = require('../model/user');
const jwt= require('jsonwebtoken');

//updatehealth
router.post('/healthdetailupdate',authenticateToken,async(req,res)=>{
    console.log(req.email);
    const userid= await user.findOne({email:req.email}).select('_id');
    console.log(userid);
    const newhealthdetail= new healthdetail({
        weight:req.body.weight,
        height:req.body.height,
        bodyfat:req.body.bodyfat,
        age:req.body.age,
        user: userid
    });
    newhealthdetail.save().then(()=>{ res.status(201).json("Health details have been updated succesfully");
});
})

//gethealth
router.get('/getcurrenthealthstatus',(req,res)=>{
    healthdetail.find({email:req.email});
});

function authenticateToken(req, res, next) {
  const authheader = req.headers["authorization"];
  const token = authheader && authheader.split(" ")[1];
  if (token == null) return null;
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.email = user.email;
    next();
  });
}


module.exports=router;