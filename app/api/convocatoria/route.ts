import { NextResponse } from "next/server";
import { WebMasterPool } from "@/config/db";
export async function GET(request: Request) {
  try {
    const [convocatoriaPrincipal] = await WebMasterPool.query(
      "SELECT * FROM convocatorias where estado = 1 && sede_id = 1 ORDER BY sede_id ASC"
    );
    const [convocatoriaAntonioNariño] = await WebMasterPool.query(
      "SELECT * FROM convocatorias where estado = 1 && sede_id = 2 ORDER BY sede_id ASC"
    );
    const [convocatoriaCentroPiloto] = await WebMasterPool.query(
      "SELECT * FROM convocatorias where estado = 1 && sede_id = 3 ORDER BY sede_id ASC"
    );
    return NextResponse.json(
      {
        SedePrincipal: {
          nombre: "Sede Principal Escuela Normal Superior de Ibagué",
          convocatoria: convocatoriaPrincipal,
        },
        SedeAntonioNariño: {
          nombre: "Sede Antonio Nariño",
          convocatoria: convocatoriaAntonioNariño,
        },
        SedeCentroPiloto: {
          nombre: "Sede Centro Piloto",
          convocatoria: convocatoriaCentroPiloto,
        },
      }
      //   {
      //     calendario,
      //   },
      //   {
      //     status: 200,
      //   }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
