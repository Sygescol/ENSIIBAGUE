"use client";
import React, { useState } from "react";
import TitulosInternos from "../../TitulosInternos/BodyComponent";
import LayoudAdmnistrativos from "./LayoudAdmnistrativos";

const Administrativo = ({ data }: any) => {
  const [valueInput, setValue] = useState("");

  const filteredItems = data?.filter((item: any) => {
    let nombre = `${item?.admco_nom1?.toLowerCase()} ${item?.admco_nom2?.toLowerCase()} ${item?.admco_ape1?.toLowerCase()} ${item?.admco_ape2?.toLowerCase()}`;
    let nombre2 = nombre.replace(/\s+/g, " ");
    let Ape1Nombre = `${item.admco_nom2} ${item.admco_ape1} ${item.admco_ape2} ${item.admco_nom1}`;
    let Ape2Nombre = `${item.admco_ape2} ${item.admco_nom1} ${item.admco_nom2} ${item.admco_ape1}`;

    return (
      (nombre2 && nombre2.includes(valueInput.toLowerCase())) ||
      (item.nombre &&
        item.nombre
          .replace(/\s+/g, " ")
          .toLowerCase()
          .includes(valueInput.toLowerCase())) ||
      (Ape2Nombre &&
        Ape2Nombre.replace(/\s+/g, " ")
          .toLowerCase()
          .includes(valueInput.toLowerCase())) ||
      (Ape1Nombre &&
        Ape1Nombre.replace(/\s+/g, " ")
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
      <TitulosInternos title="Administrativos" />
      {/* navegations */}
      <div>
        <form>
          <div className="grid grid-cols-1 gap-6 my-4 sm:grid-cols-4">
            <label className=" text-lg capitalize font-bold flex justify-center items-center text-gray-800">
              Ingrese el nombre del Administrativo:
            </label>
            <div className=" flex justify-center items-center">
              {subHeaderComponentMemo}
            </div>
          </div>
        </form>
      </div>
      {/* table */}
      <LayoudAdmnistrativos users={filteredItems} />
    </div>
  );
};

export default Administrativo;

export async function getServerSideProps() {
  try {
    const { data } = await axios.get(
      `${process.env.APP_URL}api/directorio/administrativos`
    );

    if (data[0]?.msn || data[1]?.error) {
      return {
        props: {
          data: data || [],
        },
      };
    }

    console.log("==================DATA BACK==================");
    console.log(data);
    console.log("====================================");
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
