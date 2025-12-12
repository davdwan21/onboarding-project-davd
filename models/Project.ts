import mongoose from "mongoose";
const { Schema } = mongoose;

export const projectSchema = new Schema({
  projectName: String,
  startDate: String,
  endDate: String,
  description: String,
  deploymentLink: String,
  githubLink: String,
});

export const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);
