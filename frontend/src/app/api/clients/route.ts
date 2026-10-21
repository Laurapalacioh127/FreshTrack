import { NextResponse } from "next/server";
import { clients } from "../../../lib/server/mock-data";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: clients
  });
}
