import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse("410 Gone", {
    status: 410,
    statusText: "Gone",
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
