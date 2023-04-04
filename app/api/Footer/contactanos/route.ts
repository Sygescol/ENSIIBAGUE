import { NextResponse } from "next/server";
import { WebMasterPool } from "@/config/db";
export async function GET(request: Request) {
  try {
    const [contactanos] = await WebMasterPool.query(
      `SELECT id, Red_Social, link FROM redes_sociales`
    );
    return NextResponse.json(
      {
        contactanos,
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
