const express = require("express");
const { connectDb } = require("./config/dataBase");
const User = require("./Models/user");
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    const {firstName , lastName , emailId,password} = req.body;
    const passwordHash = await bcrypt.hash(password,10);
    const user = new User({
      firstName,lastName,emailId,password:passwordHash
    })
    await user.save();
    res.send("user added sucessfully ");
  } catch(err) {
    res.status(400).send(err.message);
  }
});
 
app.post('/login',async (req,res)=>{
  try{
    const{emailId,password} = req.body; 
    const user = await User.findOne({emailId:emailId});
    if(!user){
      throw new Error("Invalid Credentials");
    }
    const isPasswordValid = await bcrypt.compare(password,user.password);
    if(isPasswordValid){
      res.send("Sucessfully Login");
    }else{
      throw new Error("Ivalid Credentials")
    }
  }catch (err) {
    res.status(400).send("ERROR:" + err.message);
  }
})

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const users = await User.findOne({ emailId: userEmail });
    if (!users) {
      res.status(404).send("user not found");
    } else {
      res.send(users);
    }
  } catch (err) {
    res.status(400).send("ERROR:" + err.message);
  }
});

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Somthing went wrong");
  }
});

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete(userId);
    res.send("user suecessfully deleted");
  } catch (err) {
    res.status(400).send("user not delte");
  }
});

app.patch("/user/:userID", async (req, res) => {
  const userId = req?.params?.userID;
  const data = req.body;
  try {
    const ALLOWED_UPDATES = ["photoUrl","about","gender","age","skills"];
    const isAllowedUpdates = Object.keys(data).every((k)=>ALLOWED_UPDATES.includes(k));
  if(!isAllowedUpdates){
    throw new Error("update not valid")
  }
  if(data?.skills.length>5){
    throw new Error("Pls put your only Top 5 Skills");
  }
    await User.findByIdAndUpdate(userId, data, { runValidators: true });
    res.send("User sucessfully Update");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

connectDb()
  .then(() => {
    console.log("connection is sucessfully istabilized");

    app.listen(3000, () => {
      console.log("Server is sucessfully created");
    });
  })
  .catch((err) => {
    console.log("connection not sucessfully istabilized");
  });
