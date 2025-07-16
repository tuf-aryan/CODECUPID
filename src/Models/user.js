const mongoose = require("mongoose");
const validator = require("validator");

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
        validate(value){
        if(!validator.isStrongPassword(value)){
          throw new Error("Pls enter the Strong Password");
        }
      }
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      validate(value) {
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("Gender is not valid");
        }
      },
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

const User = mongoose.model("User", userShema);
module.exports = User;
