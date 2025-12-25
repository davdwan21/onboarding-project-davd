import mongoose from "mongoose";
const { Schema } = mongoose;

const experienceSchema = new Schema({
  company: { type: String, required: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: String,
  description: { type: String, required: true },
});

export const Experience =
  mongoose.models.Experience || mongoose.model("Experience", experienceSchema);
