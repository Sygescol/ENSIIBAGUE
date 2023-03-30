import { NextResponse } from "next/server";
import { SygescolPool } from "@/config/db";
export async function GET(request: Request) {
  try {
    const [directivos] = await SygescolPool.query(
      `SELECT id,nombre,cargo,imagen,genero,admco_nom1,admco_nom2,admco_ape1,admco_ape2 FROM admco WHERE id NOT IN(33,36,32,24,113,73,69,76,77,78,79,80,81) ORDER BY nombre ASC`
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
