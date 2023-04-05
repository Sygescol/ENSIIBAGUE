"use client";
import Image from "next/image";
import React from "react";
import CalendarioItemNew from "./CalendarioItemNew";
import TitulosInternos from "../TitulosInternos/BodyComponent";

function Index({ calendario }: any) {
  console.log("========================calendarioxd=====");
  console.log(calendario);
  const showCalendario = () => (
    <>
      {calendario?.length > 0 ? (
        <>
          {calendario.map((item: any) => {
            return (
              <div
                className="container px-2 md:mx-auto my-6 flex flex-col items-center gap-[2rem]"
                key={item.id}
              >
                <CalendarioItemNew
                  fecha={item.fecha}
                  imagen="/Servicios/calendarioItem1.jpg"
                  title={item.titulo}
                  contenido={item.descripcion}
                  archivo={item.archivo}
                />
              </div>
            );
          })}
        </>
      ) : (
        <div className="container lg:w-[700px] flex flex-col p-4 mx-auto col-span-3">
          <Image
            className=""
            src="/Menu/PendienteWebMaster.png"
            width={1400}
            height={940}
            alt="PendienteWebMaster"
            objectFit="cover"
          />
          <p className="error">
            Registro pendiente por publicar desde WebMaster
          </p>
        </div>
      )}
    </>
  );

  return (
    <div>
      <TitulosInternos title="Calendario de Actividades" />
      {showCalendario()}
    </div>
  );
}

export default Index;

export async function getServerSideProps() {
  try {
    const calendario = await fetch(`${process.env.APP_URL}api/calendario`).then(
      (res) => res.json()
    );

    if (calendario[0]?.msn || calendario[1]?.error) {
      return {
        props: {
          calendario: calendario || [],
        },
      };
    }
    return {
      props: {
        calendario: calendario,
      },
    };
  } catch (err) {
    console.log("=============================");
    console.log(err);
    return {
      props: {
        calendario: [
          {
            msn: "Fallo la conexión con el servidor si el error persiste contacte a soporte ",
          },
        ],
      },
    };
  }
}
