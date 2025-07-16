const mongoose = require("mongoose");

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
      lowercase:true,
      trim:true,
    },
    password: {
      type: String,
      required: true,
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
    },
    skills: {
      type: [String],
    },
  },
  { timestamps: true,}
);

const User = mongoose.model("User", userShema);
module.exports = User;
