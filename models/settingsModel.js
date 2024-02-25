import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    facebook: {
      type: String,
      required: true,
    },
    whatsapp: {
      type: String,
      required: true,
    },
    youtube: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("settings", settingsSchema);
