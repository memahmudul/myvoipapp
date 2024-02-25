import mongoose from "mongoose";

const mobileBankingSchema = new mongoose.Schema(
  {
    admin: {
      type: String,
      required: true,
    },
    transaction: {
      type: String,
      default: "mobile-banking",
    },

    receiver: {
      type: String,
      required: true,
      trim: true,
    },
    banking_method: {
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
    },
  },
  { timestamps: true }
);

export default mongoose.model("mobilebanking", mobileBankingSchema);
