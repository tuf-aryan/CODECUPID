const express = require("express");

const app = express();
const { auth } = require("./middlewares/auth");

app.use("/user",auth);

app.get("/user/getData", (req, res) => {
  res.send("use get data sucessfully");
});

app.get("/user/deleteData", (req, res) => {
  res.send("delete all data sucessfully");
});

app.listen(3000, () => {
  console.log("Server is sucessfully created");
});
