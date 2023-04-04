import { NextResponse } from "next/server";
import { WebMasterPool } from "@/config/db";
export async function GET(request: Request) {
  try {
    const [nuestrasSedes] = await WebMasterPool.query(
      `SELECT id,nombre,principal FROM sedes`
    );
    return NextResponse.json(
      {
        nuestrasSedes,
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
