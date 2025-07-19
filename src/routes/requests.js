const express = require("express");
const requestRouter = express.Router();
const User = require("../Models/user");
const { userAuth } = require("../middlewares/auth");
const { ConnectionModel } = require("../Models/connectionRequest");

requestRouter.post(
  "/request/send/:status/:toUserID",
  userAuth,
  async (req, res) => {
    try {
      const fromUserId = req.user._id;
      const toUserId = req?.params?.toUserID;
      const status = req?.params?.status;
      const allowedStatus = ["ignored", "intrested"];
      
      if (!allowedStatus.includes(status)) {
        throw new Error("Invalid Status");
      }
       
      const fromUser = await User.findOne({_id:toUserId});
      if(!fromUser){
        throw new Error ("No User exists with this user id");
      }
      const exsistingConnectionRequest = await ConnectionModel.findOne({
        $or: [
          { toUserId, fromUserId },
          { fromUserId: toUserId, toUserId: fromUserId },
        ],
      });
      if (exsistingConnectionRequest) {
        throw new Error("Connection request already exists");
      }

      const connectionModel = new ConnectionModel({
        fromUserId,
        toUserId,
        status,
      });
      const data = await connectionModel.save();
      res.json({
        message: "connection request send sucessfully",
        data,
      });
    } catch (err) {
      res.status(400).send("ERROR : " + err.message);
    }
  }
);
module.exports = requestRouter;
