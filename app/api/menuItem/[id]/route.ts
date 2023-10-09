import connectMongoDB from "@/libs/mongodb";
import Menu from "@/models/menu";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    await connectMongoDB();
    const updatedDoc = await Menu.findByIdAndUpdate(id, body, {
      new: true,
    });
    return NextResponse.json({
      message: "Menu updated",
      status: 200,
      data: updatedDoc,
    });
  } catch (err) {
    console.log("Error in app", err);
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    await connectMongoDB();
    await Menu.findByIdAndDelete(id);
    return NextResponse.json({ message: "Menu Item deleted" }, { status: 200 });
  } catch (err) {
    console.log("Error in app", err);
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    await connectMongoDB();
    const menuItem = await Menu.findOne({ _id: id });
    if (!menuItem) {
      return NextResponse.json({ data: "not found", status: 204 });
    }
    return NextResponse.json({ data: menuItem, status: 200 });
  } catch (err) {
    console.log("Error in app", err);
  }
}
