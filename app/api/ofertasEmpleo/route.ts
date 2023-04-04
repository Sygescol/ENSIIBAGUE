import { NextResponse } from "next/server";
import { WebMasterPool } from "@/config/db";
export async function GET(request: Request) {
  try {
    const [ofertasEmpleo] = await WebMasterPool.query(
      "SELECT * FROM `ofertas` WHERE estado = 1 ORDER BY id ASC"
    );
    return NextResponse.json(
      {
        ofertasEmpleo,
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
