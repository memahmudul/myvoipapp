import mongoose from "mongoose";

const balanceRequest = new mongoose.Schema(
  {
    admin: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    user_phone: {
      type: String,
      required: true,
      trim: true,
    },
    sender_phone: {
      type: String,
      required: true,
      trim: true,
    },

    trx_id: {
      type: String,
      required: true,
      trim: true,
    },

    amount: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("balancerequest", balanceRequest);
