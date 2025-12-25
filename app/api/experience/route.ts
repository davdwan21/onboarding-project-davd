import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
import { Experience } from "@/models/Experience";

// GET /api/experience
export async function GET() {
  try {
    await connectToDatabase();
    const experiences = await Experience.find();
    return NextResponse.json(experiences);
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: "Error connecting to database",
    });
  }
}

// POST /api/experience
export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();

    // further validation required ?

    const newExperience = await Experience.create(body);

    return NextResponse.json(newExperience, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "create experience failed",
      },
      { status: 500 }
    );
  }
}
