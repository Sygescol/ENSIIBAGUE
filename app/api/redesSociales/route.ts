import { NextResponse } from "next/server";
import { WebMasterPool } from "@/config/db";
export async function GET(request: Request) {
  try {
    const [redes] = await WebMasterPool.query(
      "SELECT * FROM redes_sociales ORDER BY id"
    );
    return NextResponse.json(
      { redes },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
