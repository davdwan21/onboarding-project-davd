import mongoose from "mongoose";
const { Schema } = mongoose;

const experienceSchema = new Schema({
  company: String,
  title: String,
  location: String,
  startDate: String,
  endDate: String,
  description: String,
});

export const Experience =
  mongoose.models.Experience || mongoose.model("Experience", experienceSchema);
