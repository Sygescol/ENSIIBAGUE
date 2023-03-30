import { NextResponse } from "next/server";
import { SygescolPool } from "@/config/db";
export async function GET(request: Request) {
  try {
    const [coordinador] = await SygescolPool.query(
      `SELECT id,nombre,cargo,admco_nom1,admco_nom2,admco_ape1,admco_ape2,genero,imagen FROM admco WHERE cargo LIKE '%COORDINADOR%' ORDER BY cargo ASC `
    );
    const [rector] = await SygescolPool.query(
      `SELECT id,nombre,cargo,admco_nom1,admco_nom2,admco_ape1,admco_ape2,genero,imagen  FROM admco WHERE cargo LIKE '%RECTOR%' ORDER BY cargo ASC`
    );
    return NextResponse.json(
      {
        ...coordinador,
        ...rector,
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
