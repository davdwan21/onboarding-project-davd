import mongoose from "mongoose";
const { Schema } = mongoose;

export const projectSchema = new Schema({
  projectName: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: String,
  description: { type: String, required: true },
  deploymentLink: { type: String, required: true },
  githubLink: { type: String, required: true },
});

export const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);
