import { NextResponse } from "next/server";
import { WebMasterPool } from "@/config/db";
export async function GET(request: Request) {
  try {
    const [leyTransparenciaSedes] = await WebMasterPool.query(
      "SELECT * FROM sedes ORDER BY id ASC"
    );
    return NextResponse.json(
      {
        leyTransparenciaSedes,
      },
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
