import { NextResponse } from "next/server";
import { WebMasterPool } from "@/config/db";
export async function GET(request: Request) {
  try {
    const [enlacesInt] = await WebMasterPool.query(
      "SELECT * FROM `enlaces` ORDER BY `enlaces`.`id` ASC"
    );
    return NextResponse.json(
      {
        enlacesInt,
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
