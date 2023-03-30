import { NextResponse } from "next/server";
import { SygescolPool } from "@/config/db";
export async function GET(request: Request) {
  try {
    const [directivos] = await SygescolPool.query(
      `SELECT id,nombre,cargo,imagen,genero,admco_nom1,admco_nom2,admco_ape1,admco_ape2,tipo_vincu_id FROM admco WHERE tipo_vincu_id = '12'`
    );
    return NextResponse.json(
      {
        directivos,
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
