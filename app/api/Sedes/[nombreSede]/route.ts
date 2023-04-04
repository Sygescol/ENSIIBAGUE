import { NextResponse } from "next/server";
import { WebMasterPool } from "@/config/db";
export async function GET(req: Request, { params }: any) {
  const { nombreSede } = params;
  console.log("params=", params);

  try {
    const [InfoSedes] = await WebMasterPool.query(
      `SELECT id,nombre,direccion,telefonos,correo,horarios,imagen,principal FROM sedes WHERE nombre like '${nombreSede}'`
    );

    return NextResponse.json(
      {
        InfoSedes,
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
