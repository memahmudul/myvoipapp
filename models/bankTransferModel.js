import mongoose from "mongoose";

const banTransferSchema = new mongoose.Schema(
  {
    admin: {
      type: String,
      required: true,
    },
    transaction: {
      type: String,
      default: "bank-transfer",
    },

    bank: {
      type: String,
      required: true,
    },

    branch: {
      type: String,
      required: true,
    },
    account_no: {
      type: String,
      required: true,
      trim: true,
    },
    account_name: {
      type: String,
      required: true,
    },
    type: {
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
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("banktransfer", banTransferSchema);
