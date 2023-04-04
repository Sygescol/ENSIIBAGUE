import { NextResponse } from "next/server";
import { WebMasterPool } from "@/config/db";
export async function POST(req: Request) {
  const { DocumentoValidation } = await req.json();
  try {
    const [validation] = await WebMasterPool.query(
      `SELECT * from correo where documento=${DocumentoValidation} order by created_at DESC`
    );

    console.log("valition===", validation);

    return NextResponse.json({ validation }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
