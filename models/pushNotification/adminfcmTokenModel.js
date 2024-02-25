import mongoose from "mongoose";

const adminFcmTokenSchema = new mongoose.Schema(
  {
    email: {
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

export default mongoose.model("adminfcmtoken", adminFcmTokenSchema);
