import mongoose from "mongoose";

const fcmTokenSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    tokenID: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("fcmtoken", fcmTokenSchema);
