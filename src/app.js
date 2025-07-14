const express = require("express");
const { connectDb } = require("./config/dataBase");
const User = require("./Models/user");

const app = express();
app.use(express.json());
app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  
  try{
    await user.save();
  res.send("user added sucessfully ");
  }catch{
    res.status(400).send("user not added");
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
