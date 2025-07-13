const express = require("express");
const { connectDb } = require("./config/dataBase");
const User = require("./Models/user");

const app = express();

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "ishow",
    lastName: "Speed",
    emailId: "ishow@gmail.com",
    password: "ishwo@123",
  });
  await user.save();
  res.send("user added sucessfully ");
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
