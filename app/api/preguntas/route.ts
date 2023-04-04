import { NextResponse } from "next/server";
import { WebMasterPool } from "@/config/db";
export async function GET(request: Request) {
  try {
    const [pregunta] = await WebMasterPool.query(
      "SELECT * FROM `glosario_preguntas` WHERE item_id = 4 AND estado = 1 ORDER BY item_id ASC"
    );
    const [glosario] = await WebMasterPool.query(
      "SELECT * FROM `glosario_preguntas` WHERE item_id = 5 AND estado = 1 ORDER BY item_id ASC"
    );
    return NextResponse.json({
      PreguntasRespuestas: {
        titulo: "Preguntas",
        preguntas: pregunta,
      },
      PreguntasGlosario: {
        preguntas: glosario,
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
