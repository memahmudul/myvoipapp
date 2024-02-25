import mongoose from "mongoose";

const rechargeSchema = new mongoose.Schema(
  {
    admin: {
      type: String,
      required: true,
    },

    transaction: {
      type: String,
      default: "mobile-recharge",
    },

    recipient: {
      type: String,
      required: true,
      trim: true,
    },
    operators: {
      type: String,
      required: true,
    },

    amount: {
      type: String,
      required: true,
      trim: true,
    },

    sender_username: {
      type: String,
      required: true,
      trim: true,
    },

    sender_phone: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      required: true,
    },
    commission: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("recharge", rechargeSchema);
