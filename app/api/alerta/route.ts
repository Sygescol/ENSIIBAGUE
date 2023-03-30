import { NextResponse } from "next/server";
import { WebMasterPool } from "@/config/db";
export async function GET(request: Request) {
  try {
    const [alerta] = await WebMasterPool.query(
      "SELECT * FROM `alertas` ORDER BY `alertas`.`posicion` ASC"
    );
    return NextResponse.json(
      {
        alerta,
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
