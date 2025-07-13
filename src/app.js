const express = require("express");

const app = express();

app.use("/user",(req,res)=>{res.send("hello")});

app.listen(3000, () => {
  console.log("Server is sucessfully created");
});
