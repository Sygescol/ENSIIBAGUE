import { NextResponse } from "next/server";
import { WebMasterPool } from "@/config/db";
export async function GET(request: Request) {
  try {
    const [calendario] = await WebMasterPool.query(
      "SELECT * FROM `calendario` WHERE estado = 1 ORDER BY id ASC"
    );
    return NextResponse.json(
      {
        calendario,
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
