import { NextResponse } from "next/server";
import { SygescolPool } from "@/config/db";

export async function GET(request: Request) {
  try {
    const [docentes] = await SygescolPool.query(
      `SELECT DISTINCT(cga.g), dcne_nom1,dcne_nom2,dcne_ape1,dcne_ape2,dcne_foto,dcne_email,dcne_genero FROM dcne INNER JOIN cga ON cga.g = dcne.i`
    );
    return NextResponse.json(
      {
        docentes,
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
