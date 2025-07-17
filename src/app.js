const express = require("express");
const { connectDb } = require("./config/dataBase");
const User = require("./Models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { userAuth } = require("./middlewares/auth");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, emailId, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });
    await user.save();
    res.send("user added sucessfully ");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid Credentials");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      //create jwt token
      const token = await user.getJWT();
      console.log("token is ", token);
      //add token to the cooki e
      res.cookie("token", token);
      res.send("Login sucessfully");
    } else {
      throw new Error("Ivalid Credentials");
    }
  } catch (err) {
    res.status(400).send("ERROR:" + err.message);
  }
});

app.get("/profile", userAuth, async (req, res) => {
  try {
    const user = req.user;
    
    res.send(user);
  } catch (err) {
    res.status(400).send("ERROR:" + err.message);
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
