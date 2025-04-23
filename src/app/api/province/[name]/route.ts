// src/app/api/province/[name]/route.ts
import { NextResponse, NextRequest } from 'next/server';
import connectDB from '@/lib/mongodb';
import Province from '@/lib/models/Province';

// บังคับให้ API นี้ dynamic จริงๆ (ไม่ cached)
export const dynamic = 'force-dynamic';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;
  // 1. ดึงชื่อจังหวัด (lowercase ให้ตรงกับที่เก็บใน DB)
  const nameParam = name.toLowerCase();

  // 2. ต่อฐานข้อมูล
  await connectDB();

  // 3. หา document ของจังหวัดนั้น
  const doc = await Province.findOne({ name: nameParam });

  if (!doc) {
    // ไม่เจอ ก็คืน array เปล่า
    return NextResponse.json({ spots: [] });
  }

  // 4. เจอแล้ว คืน spots ที่เก็บใน MongoDB
  return NextResponse.json({ spots: doc.spots });
}
