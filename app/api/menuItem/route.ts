import connectMongoDB from "@/libs/mongodb";
import Menu from "@/models/menu";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    await connectMongoDB();
    const createdMenuItem = await Menu.create(body);
    return NextResponse.json({
      message: "Menu Item Created",
      status: 201,
      data: createdMenuItem,
    });
  } catch (err) {
    console.log("Error in app", err);
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const menuItems = await Menu.find({});
    return NextResponse.json({ data: menuItems, status: 200 });
  } catch (err) {
    console.log("Error in app", err);
  }
}

// export async function DELETE(request: NextRequest) {
//   const id = request.nextUrl.searchParams.get("id");
//   await connectMongoDB();
//   await Menu.findByIdAndDelete(id);
//   return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
// }

// export async function PUT(request: NextRequest) {
//   const { title, description } = await request.json();
//   await connectMongoDB();
//   await Menu.create({ title, description });
//   return NextResponse.json({ message: "Topic Created" }, { status: 201 });
// }
