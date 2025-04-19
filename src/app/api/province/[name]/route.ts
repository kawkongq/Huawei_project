// src/app/api/province/[name]/route.ts
import { NextResponse } from 'next/server';
import Province from '@/lib/models/Province'
import connectDB from '@/lib/mongodb';

// บังคับให้ API นี้ dynamic จริงๆ (ไม่ cached)
export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  // 1. ดึงชื่อจังหวัด (lowercase ให้ตรงกับที่เก็บใน DB)
  const nameParam = params.name.toLowerCase();

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
