import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
import { Experience } from "@/models/Experience";
import mongoose from "mongoose";

type Params = { id: string };

// GET api/experience/:id
export async function GET(_req: Request, context: { params: Params }) {
  const { id } = context.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json(
      { success: false, message: "invalid id" },
      { status: 400 }
    );
  }

  await connectToDatabase();
  const experience = await Experience.findById(id);

  if (!experience) {
    return NextResponse.json(
      { success: false, message: "experience not found" },
      { status: 404 }
    );
  }
  return NextResponse.json(experience, { status: 200 });
}

// PUT api/experience/:id
export async function PUT(req: Request, context: { params: Params }) {
  const { id } = context.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json(
      { success: false, message: "invalid id" },
      { status: 400 }
    );
  }

  await connectToDatabase();
  const experience = await Experience.findById(id);
  if (!experience) {
    return NextResponse.json(
      { success: false, message: "experience not found" },
      { status: 404 }
    );
  }

  const body = await req.json();

  const updated = await Experience.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });
  if (!updated) {
    return NextResponse.json(
      { success: false, message: "experience not found" },
      { status: 404 }
    );
  }
  return NextResponse.json(updated, { status: 200 });
}

// DELETE api/experiences/:id
export async function DELETE(_req: Request, context: { params: Params }) {
  const { id } = context.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json(
      { success: false, message: "invalid id" },
      { status: 400 }
    );
  }

  await connectToDatabase();

  const deleted = await Experience.findByIdAndDelete(id);
  if (!deleted) {
    return NextResponse.json(
      { success: false, message: "experience not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
