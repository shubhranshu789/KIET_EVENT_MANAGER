const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();


const requireLogin = require("../middleWares/requireLogin");
const  DEBATE = mongoose.model("DEBATE");


router.get("/viewalldebate", requireLogin, (req, res) => {
  DEBATE.find().then((events) => {
    res.json(events);
  });
});






module.exports = router;
