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

      const fromUser = await User.findOne({ _id: toUserId });
      if (!fromUser) {
        throw new Error("No User exists with this user id");
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

requestRouter.post(
  "/request/review/:status/:requestId",
  userAuth,
  async (req, res) => {
    try {
      const { status, requestId } = req?.params;
      const loggedInUser = req?.user;
      const allowedStatus = ["accepted", "rejected"];
      if (!allowedStatus.includes(status)) {
        throw new Error("Invalid Status");
      }
      const connectionRequest = await ConnectionModel.findOne({
        _id: requestId,
        toUserId: loggedInUser._id,
        status: "intrested",
      });
      if (!connectionRequest) {
        return res
          .status(400)
          .json({ message: "Connection Request Not found" });
      }
      connectionRequest.status = status;
      const data = await connectionRequest.save();
      res.json({ message: "Connection request accepted" ,data});
    } catch (err) {
      res.status(400).send("ERROR : " + err.message);
    }
  }
);
module.exports = requestRouter;
