const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://aryangupta56240:ePFYv7zhA4qJI7Ms@codecupid.3fce0gn.mongodb.net/codecupid"
  );
};

module.exports = {connectDb};

