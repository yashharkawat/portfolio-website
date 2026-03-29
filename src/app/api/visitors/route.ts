import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://yashharkawat.goatcounter.com/counter/%2F.json",
      {
        headers: { Accept: "application/json" },
        next: { revalidate: 60 }, // cache for 60 seconds
      }
    );
    if (!res.ok) {
      return NextResponse.json({ count: null });
    }
    const data = await res.json();
    return NextResponse.json({ count: data.count, count_unique: data.count_unique });
  } catch {
    return NextResponse.json({ count: null, count_unique: null });
  }
}
