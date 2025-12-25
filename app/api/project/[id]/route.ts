import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
import { Project } from "@/models/Project";

type Params = { id: string };

// GET api/project/:id
export async function GET(_req: Request, context: { params: Params }) {
  const { id } = context.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json(
      { success: false, message: "invalid id" },
      { status: 400 }
    );
  }

  await connectToDatabase();
  const project = await Project.findById(id);

  if (!project) {
    return NextResponse.json(
      { success: false, message: "project not found" },
      { status: 404 }
    );
  }
  return NextResponse.json(project, { status: 200 });
}

// PUT api/project/:id
export async function PUT(req: Request, context: { params: Params }) {
  const { id } = context.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json(
      { success: false, message: "invalid id" },
      { status: 400 }
    );
  }

  await connectToDatabase();
  const project = await Project.findById(id);
  if (!project) {
    return NextResponse.json(
      { success: false, message: "project not found" },
      { status: 404 }
    );
  }

  const body = await req.json();

  const updated = await Project.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });
  if (!updated) {
    return NextResponse.json(
      { success: false, message: "project not found" },
      { status: 404 }
    );
  }
  return NextResponse.json(updated, { status: 200 });
}

// DELETE api/project/:id
export async function DELETE(_req: Request, context: { params: Params }) {
  const { id } = context.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json(
      { success: false, message: "invalid id" },
      { status: 400 }
    );
  }

  await connectToDatabase();

  const deleted = await Project.findByIdAndDelete(id);
  if (!deleted) {
    return NextResponse.json(
      { success: false, message: "project not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
