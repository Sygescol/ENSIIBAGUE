"use client";
import React, { useEffect } from "react";
import InfoAdministativos from "../Administrativo/InfoAdministativos";

const LayoudAdmnistrativos = ({ users }: any) => {
  const [info, setInfo] = React.useState([]);
  console.log("==============xd======================");
  console.log(users);
  console.log("====================================");

  useEffect(() => {}, []);

  console.log("===INFO DOCENTES=================================");
  console.log(info);
  console.log("====================================");
  return (
    <div className="grid sm:grid-cols-10 h-full ">
      <div className="h-full sm:col-span-3 overflow-auto">
        <div className="  bg-slate-50 border-r h-auto flex flex-col">
          <div className="h-16 border-b px-4 flex items-center justify-center space-x-4">
            <div className="px-4 py-4 border-b-4 border-b-blue-500 text-lg font-medium">
              Usuarios
            </div>
          </div>
          <div className=" h-[400px] overflow-y-auto">
            {users?.map((data: any, key: any) => (
              <div
                key={key}
                onClick={() => setInfo(data)}
                className="lg:px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100"
              >
                <div className="ml-4">
                  <p className="text-md font-semibold text-slate-600 m-0 p-0">
                    {data &&
                      `${data?.admco_nom1} ${data?.admco_nom2} ${data?.admco_ape1} ${data?.admco_ape2}`}
                  </p>
                  <p className="text-xs text-slate-400 -mt-0.5 font-semibold">
                    {/* convert lastLogin to date     */}
                    {data?.cargo
                      ? data?.cargo
                      : `${data?.dcne_email_perso || "No hay Información"}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sm:col-span-7 h-auto">
        <InfoAdministativos info={info} contratista={true} />
      </div>
    </div>
  );
};

export default LayoudAdmnistrativos;
