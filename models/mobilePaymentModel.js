import mongoose from "mongoose";

const mobilePaymentSchema = new mongoose.Schema(
  {
    mobile_banking: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("mobilePayments", mobilePaymentSchema);
