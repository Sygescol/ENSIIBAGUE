import React from "react";
import InfoDocentes from "./InfoDocentes";

const LayoudDocentes = ({ users }: any) => {
  const [info, setInfo] = React.useState([]);

  console.log("==============xd======================");
  console.log(users);
  console.log("====================================");

  console.log("===INFO DOCENTES=================================");
  console.log(info);
  console.log("====================================");

  return (
    <div className="grid sm:grid-cols-10 h-full ">
      <div className="h-full sm:col-span-3">
        <div className="  bg-slate-50 border-r h-auto flex flex-col">
          <div className="h-16 border-b px-4 flex items-center justify-center space-x-4">
            <div className="px-4 py-4 border-b-4 border-b-blue-500 text-lg font-medium">
              Usuarios
            </div>
          </div>
          <div className=" max-h-[800px] overflow-auto">
            {users?.map((data: any, key: any) => (
              <div
                key={key}
                onClick={() => setInfo(data)}
                className="lg:px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100"
              >
                <div className="ml-4">
                  <p className="text-sm sm:text-base font-semibold text-slate-600 m-0 p-0 ">
                    {data?.nombre
                      ? data?.nombre
                      : `${data?.dcne_nom1} ${data?.dcne_nom2} ${data?.dcne_ape1}
                      ${data?.dcne_ape2}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sm:col-span-7 h-auto">
        <InfoDocentes info={info} />
      </div>
    </div>
  );
};

export default LayoudDocentes;
