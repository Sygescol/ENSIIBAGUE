import { NextResponse } from "next/server";
import { WebMasterPool } from "@/config/db";
export async function GET(req: Request) {
  try {
    const [rutas] = await WebMasterPool.query("SELECT item,nombre FROM item");

    return NextResponse.json({ rutas }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
