// src/app/api/province/route.ts
import connectDB from "@/lib/mongodb";
import Province from "@/lib/models/Province";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // เช็คว่ายังไม่ได้เชื่อมแล้วค่อย connect
    if (mongoose.connection.readyState < 1) {
      await connectDB();
    }

    const all = await Province.find();
    console.log(`> [API /api/province] found ${all.length} docs`);
    return NextResponse.json({ provinces: all });
  } catch (err: any) {
    console.error("❌ API /api/province error:", err);
    return NextResponse.json(
      { error: err.message || "Unknown error" },
      { status: 500 }
    );
  }
}
