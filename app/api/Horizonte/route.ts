import { NextResponse } from "next/server";
import { WebMasterPool } from "@/config/db";
export async function GET(request: Request) {
  try {
    const [horizonteInst] = await WebMasterPool.query(
      "SELECT tipo,contenido FROM horizonte_inst"
    );
    return NextResponse.json(
      {
        horizonteInst,
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
