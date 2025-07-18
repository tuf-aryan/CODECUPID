const express = require("express");
const { connectDb } = require("./config/dataBase");
const cookieParser = require("cookie-parser");


const app = express();
app.use(express.json());
app.use(cookieParser());
const authRouter = require('./routes/auth')
const profileRouter = require('./routes/profile')
const requestRouter = require('./routes/requests')


app.use('/',authRouter);
app.use('/',profileRouter);
app.use('/',requestRouter);


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
