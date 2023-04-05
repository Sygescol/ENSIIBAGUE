"use client";
import TitulosInternos from "@/app/TitulosInternos/BodyComponent";
import React, { useState } from "react";
import LayoudDocentes from "./LayoudDocentes";

const Docentes = ({ data }: any) => {
  const [valueInput, setValue] = useState("");
  const filteredItems = data?.filter((item: any) => {
    let Ape1Nombre = `${item.dcne_ape1} ${item.dcne_ape2} ${item.dcne_nom1} ${item.dcne_nom2}`;
    let Ape2Nombre = `${item.dcne_ape2} ${item.dcne_nom1} ${item.dcne_nom2} ${item.dcne_ape1}`;
    let Ape3Nombre = `${item.dcne_nom2} ${item.dcne_ape1} ${item.dcne_ape2} ${item.dcne_nom1}`;
    let nombre = `${item?.dcne_nom1?.toLowerCase()} ${item?.dcne_nom2?.toLowerCase()} ${item?.dcne_ape1?.toLowerCase()} ${item?.dcne_ape2?.toLowerCase()}`;

    // dejar un espacio en blanco en el nombre
    let nombre2 = nombre.replace(/\s+/g, " ");

    return (
      (nombre2 && nombre2.includes(valueInput.toLowerCase())) ||
      (Ape1Nombre &&
        Ape1Nombre.replace(/\s+/g, " ")
          .toLowerCase()
          .includes(valueInput.toLowerCase())) ||
      (Ape2Nombre &&
        Ape2Nombre.replace(/\s+/g, " ")
          .toLowerCase()
          .includes(valueInput.toLowerCase())) ||
      (Ape3Nombre &&
        Ape3Nombre.replace(/\s+/g, " ")
          .toLowerCase()
          .includes(valueInput.toLowerCase()))
    );
  });

  const subHeaderComponentMemo = React.useMemo(() => {
    return (
      <input
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => {
          if (e.key == "Enter") {
            // Prevenir
            e.preventDefault();
            return false;
          }
        }}
        value={valueInput.toUpperCase()}
        placeholder="Buscar..."
        className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#bc5434] dark:focus:border-blue-500 focus:outline-none focus:ring"
      />
    );
  }, [valueInput]);
  return (
    <div>
      <TitulosInternos title="DOCENTES" />

      <form>
        <div className="grid grid-cols-1 gap-6 my-4 sm:grid-cols-4">
          <label className=" text-lg capitalize font-bold flex justify-center items-center text-gray-800">
            Ingrese el nombre del Docente:
          </label>
          <div className="mx-2 sm:mx-8 flex justify-center items-center">
            {subHeaderComponentMemo}
          </div>

          <div className=" flex justify-center items-center"></div>
        </div>
      </form>
      <LayoudDocentes users={filteredItems} />
    </div>
  );
};

export default Docentes;

export async function getServerSideProps() {
  try {
    const { data } = await axios.get(
      `${process.env.APP_URL}api/directorio/docentes`
    );

    console.log("========================xd============");
    console.log(data);
    console.log("====================================");
    if (data[0]?.msn || data[1]?.error) {
      return {
        props: {
          data: data || [],
        },
      };
    }
    return {
      props: {
        data: data,
      },
    };
  } catch (err) {
    return {
      props: {
        data: [
          {
            msn: "Fallo la conexión con el servidor si el error persiste contacte a soporte ",
          },
        ],
      },
    };
  }
}
