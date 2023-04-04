import { NextResponse } from "next/server";
import { WebMasterPool } from "@/config/db";
export async function POST(req: Request) {
  const { Nombres, Documento, Telefono, Correo, Asunto, Mensaje } =
    await req?.json();
  try {
    if (Nombres === "") {
      return NextResponse.json(
        { message: "Nombres es requerido" },
        {
          status: 400,
        }
      );
    }
    if (Documento === "") {
      return NextResponse.json(
        {
          message: "Documento es requerido",
        },
        {
          status: 400,
        }
      );
    }
    if (Telefono === "") {
      return NextResponse.json(
        {
          message: "Telefono es requerido",
        },
        {
          status: 400,
        }
      );
    }
    if (Correo === "") {
      return NextResponse.json(
        {
          message: "Correo es requerido",
        },
        {
          status: 400,
        }
      );
    }
    if (Asunto === "" || Asunto == 1) {
      return NextResponse.json(
        {
          message: "Asunto es requerido",
        },
        {
          status: 400,
        }
      );
    }
    if (Mensaje === "") {
      return NextResponse.json({
        message: "Mensaje es requerido",
      });
    }

    // fecha y hora
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const fecha = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    console.log("====fecha================================");
    console.log(fecha);
    console.log("====================================");
    const [rowsPQRS] = await WebMasterPool.query(
      `INSERT INTO correo (nombre,documento, telefono, correo, asunto, mensaje, created_at) VALUES ('${Nombres}','${Documento}', '${Telefono}', '${Correo}', '${Asunto}', '${Mensaje}', '${fecha}')`
    );

    return NextResponse.json(
      {
        rowsPQRS,
        nombre: Nombres,
        documento: Documento,
        telefono: Telefono,
        correo: Correo,
        asunto: Asunto,
        mensaje: Mensaje,
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
