import mongoose from "mongoose";

const billPaySchema = new mongoose.Schema(
  {
    admin: {
      type: String,
      required: true,
    },
    transaction: {
      type: String,
      default: "bill-pay",
    },

    bill_service: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      required: true,
    },
    month: {
      type: String,
    },
    meter_no: {
      type: String,
    },
    account_no: {
      type: String,
      required: true,
      trim: true,
    },
    contact_no: {
      type: String,
      trim: true,
    },
    biller_name: {
      type: String,
    },
    amount: {
      type: String,
      required: true,
      trim: true,
    },
    sender_username: {
      type: String,
      required: true,
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

export default mongoose.model("billpay", billPaySchema);
