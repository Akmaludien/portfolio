import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ configured: !!process.env.RESEND_API_KEY });
}
