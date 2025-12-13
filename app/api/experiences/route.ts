import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
import { Experience } from "@/models/Experience";

// GET /api/experiences
export async function GET() {
  try {
    await connectToDatabase();
    const experiences = await Experience.find();
    return NextResponse.json(experiences);
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Error connecting to database",
    });
  }
}
