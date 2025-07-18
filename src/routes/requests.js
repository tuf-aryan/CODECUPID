const express = require('express');
const requestRouter = express.Router();
const User = require("../Models/user");
const { userAuth } = require("../middlewares/auth");

requestRouter.post('/sendConnectionRequest',userAuth,(req,res)=>{
    const user = req.user;
    console.log("Sending a connnection request");
    res.send(user.firstName + "Sending a Connection request")
    
})
module.exports = requestRouter;