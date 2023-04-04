import { NextResponse } from "next/server";
import { WebMasterPool } from "@/config/db";
export async function GET(request: Request) {
  try {
    const [galeria] = await WebMasterPool.query(
      "SELECT * FROM galeria_home ORDER BY id DESC"
    );
    return NextResponse.json(
      {
        galeria,
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
