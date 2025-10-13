import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const phone = typeof body?.phone === "string" ? body.phone.trim() : "";
    // Note: we accept reason but do not use it server-side yet
    // const reason = typeof body?.reason === "string" ? body.reason.trim() : "";

    if (!email && !phone) {
      return NextResponse.json(
        { error: "Provide email or mobile number" },
        { status: 400 }
      );
    }

    // Placeholder: enqueue deletion request, notify support, etc.
    // For now we simply acknowledge receipt without revealing account existence.
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
