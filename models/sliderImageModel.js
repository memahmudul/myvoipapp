import mongoose from "mongoose";

const sliderImageSchema = new mongoose.Schema({
  image_url: {
    type: String,
    required: true,
  },
});

export default mongoose.model("sliderimage", sliderImageSchema);
