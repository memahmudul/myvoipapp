import mongoose from "mongoose";

const bankPaymentSchema = new mongoose.Schema(
  {
    bank_name: {
      type: String,
      required: true,
    },

    bank_holder: {
      type: String,
      required: true,
    },
    account_no: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("bankPayments", bankPaymentSchema);
