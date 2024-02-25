import mongoose from "mongoose";

const rateSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    rate: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
   
  },
  { timestamps: true }
);

export default mongoose.model("rates", rateSchema);
