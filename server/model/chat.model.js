const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    chatName: {
      type: String,
      trim: true,
    },
    isGroupChat: {
      type: Boolean,
      default: false,
    },
    users: [
      {
        type: mongoose.Types.ObjectId,
        ref: "users",
      },
    ],
    latestMessage: {
      type: mongoose.Types.ObjectId,
      ref: "messages",
    },
    groupAdmin: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

chatSchema.index({ createdAt: 1 }, { expireAfterSeconds: 24 * 60 * 60 });

const chatModel = mongoose.model("chats", chatSchema);

module.exports = chatModel;
