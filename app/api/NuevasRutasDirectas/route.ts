import { NextResponse } from "next/server";
import { WebMasterPool } from "@/config/db";
export async function GET(req: Request) {
  try {
    const [RutasDb] = await WebMasterPool.query(
      "SELECT id,item,nombre FROM item ORDER BY item.id ASC"
    );

    let NewRouterFormatted = RutasDb?.map((ruta) => {
      return {
        ...ruta,
        link: `/Items/${ruta?.item}/${ruta?.nombre}`,
      };
    });

    return NextResponse.json({ NewRouterFormatted }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
