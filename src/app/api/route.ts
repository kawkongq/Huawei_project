// /src/app/api/provinces.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Province from '@/lib/models/province';

export async function GET() {
 
  await connectDB();

 
  const provinces = await Province.find();
  return NextResponse.json(provinces);
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const newProv = await Province.create(body);
  return NextResponse.json(newProv, { status: 201 });
}
