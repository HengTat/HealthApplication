const mongoose = require("mongoose");

const goalModel = mongoose.Schema({
  weight: {
    type: Number,   
    required: true,
  },
  bodyfat: {
    type: Number,
    required: false,
  },
  date:{
      type:Date,
      default:Date.now
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

module.exports = mongoose.model("goal", goalModel);
