const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require('jsonwebtoken');

const userShema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("invalid Email");
        }
      },
    },
    password: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isStrongPassword(value)) {
          throw new Error("Pls enter the Strong Password");
        }
      },
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
     enum:{
      values:["male","female","others"],
      message:`{VALUE} is not a type of GENDER`
     }
    },
    about: {
      type: String,
      default: "This is the default value of user",
    },
    photoUrl: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS2NzkYeMmu4mFeDeu4YBeFehLXSzdXU8wag&s",
      validate(value) {
        if (!validator.isURL(value)) {
          throw new Error("invalid PhotoURL");
        }
      },
    },
    skills: {
      type: [String],
    },
  },
  { timestamps: true }
);
userShema.methods.getJWT = async function(){
  const user = this;
  const token = await jwt.sign({_id:user._id},"CODE@CUPID",{expiresIn:"7d"})
  return token;
}
const User = mongoose.model("User", userShema);
module.exports = User;
