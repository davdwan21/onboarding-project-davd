import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
import { Project } from "@/models/Project";

// GET /api/project
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

// POST /api/project
export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();

    // further validation required ?

    const newProject = await Project.create(body);
    return NextResponse.json(newProject, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "create project failed",
      },
      { status: 500 }
    );
  }
}
