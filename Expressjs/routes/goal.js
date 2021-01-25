const { Router } = require("express");
const express = require("express");
const { find } = require("../model/healthdetail");
const router = express.Router();
const user = require("../model/user");
const goal = require("../model/goal");

//set new goal
router.post("/newgoal",async(req,res)=>{
    const userid = await user.findOne({ email:req.body.email }).select('_id');
    console.log(req.body.email);
    var newgoal = new goal({
        bodyfat:req.body.bodyfat,
        weight:req.body.weight,
        user:userid
    })
    console.log(newgoal);
    newgoal.save().then(()=>res.json({msg:"Goal succesfully saved"}));
})

//get goals
router.get("/getgoals/:email",async(req,res)=>{
    const userid = await user.findOne({ email:req.params.email }).select('_id');
    goal.find({user:userid}).then((data)=>res.json(data));
})

//getlatestgoal
router.get("/getlatest/:email",async(req,res)=>{
    console.log(req.params.email);
    const userid = await user.findOne({ email:req.params.email }).select('_id');
    goal
      .find({ user: userid })
      .sort({ date:-1})
      .limit(1)
      .then((data) => res.json(data));
})

module.exports = router;