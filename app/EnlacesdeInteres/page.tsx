import Image from "next/image";
import React from "react";
import CalendarioItemNew from "../../components/Calendario/CalendarioItemNew";
import EnlacesInteresItem from "../../components/footer/EnlacesInteresItem";
import TitulosInternos from "../../components/Titulos/TitulosInternos";

function Index({ enlacesInt }) {
  //   console.log("========================ENLACESINTERES=====");
  //   console.log(enlacesInt);
  const showEnlaces = () => (
    <>
      {enlacesInt?.length > 0 ? (
        <div className="container p-6 mx-auto flex flex-row flex-wrap justify-center gap-6">
          {enlacesInt.map((item) => {
            return (
              <div key={item.id}>
                <EnlacesInteresItem
                  title={item.titulo}
                  contenido={item.descripcion}
                  enlace={item.url}
                  imgEnlacesInt={item.imagen}
                />
              </div>
            );
          })}
        </div>
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
    <>
      <TitulosInternos title="Enlaces de Interés" />
      {showEnlaces()}
    </>
  );
}

export default Index;

export async function getServerSideProps() {
  try {
    const enlacesInt = await fetch(`${process.env.APP_URL}api/enlacesInt`).then(
      (res) => res.json()
    );

    if (enlacesInt[0]?.msn || enlacesInt[1]?.error) {
      return {
        props: {
          enlacesInt: enlacesInt || [],
        },
      };
    }
    return {
      props: {
        enlacesInt: enlacesInt,
      },
    };
  } catch (err) {
    console.log("=============================");
    console.log(err);
    return {
      props: {
        enlacesInt: [
          {
            msn: "Fallo la conexión con el servidor si el error persiste contacte a soporte ",
          },
        ],
      },
    };
  }
}
