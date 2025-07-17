const jwt = require("jsonwebtoken");
const User = require("../Models/user");

const userAuth = async (req, res, next) => {
  // read the token from the req  cokkies
  try {
    const cookies = req.cookies;
    const { token } = cookies;
    if (!token) {
      throw new Error("token is not valid");
    }
    const decodeMessage = await jwt.verify(token, "CODE@CUPID");
    // validate the token
    const { _id } = decodeMessage;

    const user = await User.findById(_id);
    if (!user) {
      throw new error("user not found");
    } else {
      req.user = user;
      next();
    }
  } catch (err) {
    res.status(400).send("ERROR : " +   err.message);
  }

  //Find the user
};

module.exports = { userAuth };
