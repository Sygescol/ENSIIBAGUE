import { NextResponse } from "next/server";
import { SygescolPool } from "@/config/db";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const correo = searchParams.get("correo");

  try {
    const [correoData] = await SygescolPool.query(
      ` SELECT id_correo_inst,correo_insti FROM correo_institucional WHERE correo_insti LIKE "%${correo}%"
        `
    );
    return NextResponse.json(
      {
        correoData,
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
