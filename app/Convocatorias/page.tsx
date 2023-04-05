import { useRouter } from "next/router";
import React from "react";
import TitulosInternos from "../TitulosInternos/BodyComponent";
import ConvocatoriaItemNew from "./ConvocatoriaItemNew";

function index({ convocatoria }: any) {
  const { SedePrincipal, SedeAntonioNariño, SedeCentroPiloto } = convocatoria;
  console.log("==========SedePrincipal=========");
  console.log(SedePrincipal);

  return (
    <div>
      <TitulosInternos title="CONVOCATORIAS" />
      <div className="p-4 text-center mx-auto my-6 w-full lg:max-w-5xl drop-shadow rounded-md">
        <details className="border-2 border-white bg-[#006F46] open:bg-[#005335] duration-300">
          <summary className="text-white font-medium bg-inherit px-5 py-3 text-lg cursor-pointer">
            <b className="text-2xl">{SedePrincipal.nombre}</b>
          </summary>
          {SedePrincipal?.convocatoria?.map((item: any) => {
            return (
              <>
                <ConvocatoriaItemNew
                  title={item.titulo}
                  contenido={item.descripcion}
                  archivo={item.archivo}
                />
              </>
            );
          })}
        </details>
        <details className="border-2 border-white bg-[#006F46] open:bg-[#005335] duration-300">
          <summary className="text-white font-medium bg-inherit px-5 py-3 text-lg cursor-pointer">
            <b className="text-2xl">{SedeAntonioNariño.nombre}</b>
          </summary>
          {SedeAntonioNariño?.convocatoria?.map((item: any) => {
            return (
              <>
                <ConvocatoriaItemNew
                  title={item.titulo}
                  contenido={item.descripcion}
                  archivo={item.archivo}
                />
              </>
            );
          })}
        </details>
        <details className="border-2 border-white bg-[#006F46] open:bg-[#005335] duration-300">
          <summary className="text-white font-medium bg-inherit px-5 py-3 text-lg cursor-pointer">
            <b className="text-2xl">{SedeCentroPiloto.nombre}</b>
          </summary>
          {SedeCentroPiloto?.convocatoria?.map((item: any) => {
            return (
              <>
                <ConvocatoriaItemNew
                  title={item.titulo}
                  contenido={item.descripcion}
                  archivo={item.archivo}
                />
              </>
            );
          })}
        </details>
      </div>
    </div>
  );
}

export default index;

export async function getServerSideProps() {
  try {
    const convocatoria = await fetch(
      `${process.env.APP_URL}api/convocatoria`
    ).then((res) => res.json());

    if (convocatoria[0]?.msn || convocatoria[1]?.error) {
      return {
        props: {
          convocatoria: convocatoria || [],
        },
      };
    }
    return {
      props: {
        convocatoria: convocatoria,
      },
    };
  } catch (err) {
    console.log("=============================");
    console.log(err);
    return {
      props: {
        convocatoria: [
          {
            msn: "Fallo la conexión con el servidor si el error persiste contacte a soporte ",
          },
        ],
      },
    };
  }
}
