import { NextResponse } from "next/server";
import { SygescolPool } from "@/config/db";
export async function POST(req: any) {
  const { correo, id } = await req?.json();
  try {
    if (!correo || !id) {
      return NextResponse.json(
        { body: "Correo o id no fueron enviados" },
        { status: 400 }
      );
    } else {
      const [correoData]: any = await SygescolPool.query(
        ` SELECT id_correo_inst,correo_insti FROM correo_institucional WHERE correo_insti LIKE "%${correo}%"
        `
      );
      const [asignaturas]: any = await SygescolPool.query(
        ` SELECT grupo_nombre, aintrs.b,grupo_id,grado_base  FROM cga INNER JOIN v_grupos ON v_grupos.grupo_id = cga.b INNER JOIN aintrs ON cga.a = aintrs.i WHERE cga.g = ${id} ORDER BY grado_base,grupo_codigo ASC
        `
      );
      const [directorGrupo]: any = await SygescolPool.query(
        ` SELECT grupo_nombre FROM cg INNER JOIN dcne ON cg.u = dcne.i INNER JOIN v_grupos ON cg.i = v_grupos.grupo_id WHERE dcne.i =${id}
        `
      );
      const [horariosAtencionPadres]: any = await SygescolPool.query(
        ` SELECT DISTINCT tipo_horario.th_nombre, sedes.sede_nombre, tipo_horario.th_id, v_grupos.jornada_id, v_grupos.jornada_nombre FROM tipo_horario INNER JOIN tipo_horario_grupo ON (tipo_horario.th_id = tipo_horario_grupo.tipo_horario_id) INNER JOIN cg ON (tipo_horario_grupo.grupo_id = cg.b) INNER JOIN cga ON (cg.i = cga.b) INNER JOIN v_grupos ON (v_grupos.grupo_id = tipo_horario_grupo.grupo_id) INNER JOIN sedes ON (tipo_horario.sede_consecutivo = sedes.sede_consecutivo) WHERE cga.g = ${id}
        `
      );
      const [jornada]: any = await SygescolPool.query(
        `SELECT b FROM jornadas_docente INNER JOIN jraa ON jraa.i = jornadas_docente.id_jornada WHERE id_docente = ${id}

            `
      );
      const [nivelAcademico]: any = await SygescolPool.query(
        `SELECT grupo_nombre, aintrs.b,grupo_id,grado_base FROM cga INNER JOIN v_grupos ON v_grupos.grupo_id = cga.b INNER JOIN aintrs ON cga.a = aintrs.i WHERE cga.g = ${id} ORDER BY grado_base,grupo_codigo ASC

            `
      );

      return NextResponse.json({
        correoData,
        asignaturas,
        directorGrupo,
        horariosAtencionPadres,
        jornada: jornada[0],
        nivelAcademico,
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
