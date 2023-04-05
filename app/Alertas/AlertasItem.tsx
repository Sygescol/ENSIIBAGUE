"use client";
import React from "react";

function AlertasItem({ setOpen, open, alerta }: any) {
  return (
    <>
      {open && (
        <div className="bg-slate-800 bg-opacity-50 absolute z-[60] w-full h-full top-0">
          <div className="p-4 sticky top-[12%] flex justify-center mb-4">
            <div className="bg-white h-[30rem] rounded-lg shadow w-full sm:max-w-2xl sm:max- overflow-auto">
              <button
                onClick={() => setOpen(false)}
                aria-label="alerta"
                type="button"
                className="flex text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto "
              >
                <svg
                  aria-hidden="true"
                  className="w-8 h-w-8 text-[#006F46] hover:text-[#005335]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="px-6 text-center">
                {alerta?.map((item: any) => (
                  <div className="mb-[2rem] border-b-2 pb-4" key={item.id}>
                    <div className="animate-bounce mx-auto w-[5rem] h-[5rem] flex">
                      <svg
                        className="fill-[#006F46]"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 412 412"
                        xmlSpace="preserve"
                      >
                        <path
                          className="st0"
                          d="M206,1.21C92.9,1.21,1.21,92.9,1.21,206S92.9,410.79,206,410.79S410.79,319.1,410.79,206S319.1,1.21,206,1.21z
	 M206,371.58c-20.6,0-32.41-12.8-32.41-35.13c0-11.87,2.29-35.18,5.76-70.46c1.55-15.73,3.3-33.57,5.14-53.44l5.89-62.96
	c0.36-3.85,3.6-6.8,7.47-6.8h16.31c3.87,0,7.11,2.95,7.47,6.8l5.89,62.96c1.84,19.87,3.6,37.69,5.14,53.42
	c3.47,35.29,5.76,58.61,5.76,70.48C238.41,358.77,226.6,371.58,206,371.58z M206,112.95c-19.53,0-36.04-16.71-36.04-36.49
	c0-19.87,16.17-36.04,36.04-36.04s36.04,16.17,36.04,36.04C242.04,96.24,225.53,112.95,206,112.95z"
                        />
                      </svg>
                    </div>

                    <h1 className=" text-xl text-black font-bold">
                      {item.nombre}
                    </h1>
                    <p className="text-lg text-gray-500 font-medium pb-4">
                      {item.contenido}
                    </p>
                    {item.link == "#" ? (
                      <a
                        className="p-2 border-2 border-[#006F46] rounded-lg font-medium text-[#006F46] hover:bg-[#006F46] hover:text-white"
                        href={`https://ensiibague.edu.co/portal/archivos/${item.PDF}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Archivo
                      </a>
                    ) : (
                      <a
                        className="p-2 border-2 border-[#006F46] rounded-lg font-medium text-[#006F46] hover:bg-[#006F46] hover:text-white"
                        href={`${item.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Enlace
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="absolute m-0 leading-[0] bottom-0 h-[2rem] bg-[#006F46] hover:bg-[#005335] text-white font-semibold py-2 px-4 rounded"
              style={{ filter: "drop-shadow(0px 0px 3px black)" }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AlertasItem;
