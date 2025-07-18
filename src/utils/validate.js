const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;
  if (!firstName || !lastName) {
    throw new Error("Name is not valid!");
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Email is not valid!");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Please enter a strong Password!");
  }
};
const validateEditProfileData = (req) => {
  const allowedEditFeilds = [
    "firstName",
    "lastName",
    "photoUrl",
    "about",
    "skills",
    "gender",
    "age",
  ];
  const isEditValid = Object.keys(req.body).every((feild) =>
    allowedEditFeilds.includes(feild)
  );
  return isEditValid;
};
module.exports = {
  validateSignUpData,
  validateEditProfileData
};
