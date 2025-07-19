const mongoose = require("mongoose");

const connnectionRequestSchema = new mongoose.Schema(
  {
    fromUserId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    toUserId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    status: {
      type: String,
      enum: {
        values: ["ignored", "intrested", "accepted", "rejected"],
        message: `{VALUE} is not a Status type`,
      },
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
connnectionRequestSchema.index({findUserId:1,toUserId:1})
connnectionRequestSchema.pre("save", function (next) {
  const connectionRequest = this;
  if (connectionRequest.toUserId.equals(connectionRequest.fromUserId)) {
    throw new Error("Can not Send connection requestion to you'r self");
  }
  next();
});

const ConnectionModel = mongoose.model(
  "ConnectionModel",
  connnectionRequestSchema
);

module.exports = { ConnectionModel };
