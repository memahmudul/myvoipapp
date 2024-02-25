import mongoose from "mongoose";

const placeOfferOrderSchema = new mongoose.Schema(
  {
    admin: {
      type: String,
      required: true,
    },
    transaction: {
      type: String,
      default: "drive-offer",
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

    offer_name: {
      type: String,
      required: true,
    },

    price: {
      type: String,
      required: true,
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
  },
  { timestamps: true }
);

export default mongoose.model("OfferOrder", placeOfferOrderSchema);
