import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
import { Project } from "@/models/Project";

// GET /api/projects
export async function GET() {
  try {
    await connectToDatabase();
    const projects = await Project.find();
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Error connecting to database",
    });
  }
}
