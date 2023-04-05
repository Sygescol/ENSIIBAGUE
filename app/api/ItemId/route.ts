import { NextResponse } from "next/server";
import { WebMasterPool } from "@/config/db";
export async function POST(req: Request) {
  const { idItem, id, years } = await req?.json();

  const consultaItems = async () => {
    try {
      const [añoItem] = await WebMasterPool.query(
        `select count(*) as contador, year as year from pdf inner join item on item.id = pdf.item_id where item.item in ("${idItem}") and estado = true group by year order by year DESC`
      );
      return NextResponse.json(
        { añoItem },
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
  };

  const consultaTodos = async (id: number) => {
    try {
      const [pdfTodos] = await WebMasterPool.query(
        `select *, pdf.nombre as pdf_nom from pdf inner join item on item.id = pdf.item_id where item.item in ("${id}") and estado = 1 `
      );

      // console.log(
      //   `select *, pdf.nombre as pdf_nom from pdf inner join item on item.id = pdf.item_id where item.item in ("${id}") and estado = 1 `
      // );

      return NextResponse.json(
        { pdfTodos },
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
  };

  const consultaYears = async (years: string, id: number) => {
    try {
      const [pdfYears] = await WebMasterPool.query(
        `SELECT *, pdf.nombre as pdf_nom FROM pdf inner join item on item.id = pdf.item_id where item.item in ("${id}") and pdf.year in ("${years}") and estado = 1 `
      );
      return NextResponse.json(
        { pdfYears },
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
  };
  if (idItem) {
    await consultaItems();
  }

  if (years && id) {
    if (years === "Todos") {
      await consultaTodos(id);
    } else {
      await consultaYears(years, id);
    }
  }
  return NextResponse.json({ status: 200 });
}
