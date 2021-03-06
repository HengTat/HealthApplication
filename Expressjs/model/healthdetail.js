const mongoose= require('mongoose');


const healthdetail = mongoose.Schema({
  bodyfat: {
    type: Number,
    required: false,
  },
  weight: {
    type: Number,
    required: false,
  },
  age:{
    type:Number,
    require:false
  },
  height: {
    type: Number,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

module.exports = mongoose.model("healthdetail", healthdetail);

