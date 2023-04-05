"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const InfoDocentes = ({ info }: any) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  // convert info object key

  const usersCorreo = () => {
    setLoading(true);
    let correo = `${info?.dcne_nom1?.toLowerCase()}.${info?.dcne_ape1?.toLowerCase()}`;

    // axios post correo
    if (info) {
      axios
        .post("/api/directorio/infoDocente", {
          correo, // correo del docente
          id: info?.g, // id del docente
        })
        .then((res: any) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
  };
  console.log("==================data==================");
  console.log(info);
  console.log("====================================");

  useEffect(() => {
    // send back end dato  axios

    usersCorreo();
  }, [info]);

  const NivelesAcademicos = () => {
    // recorrer arreglo)
    let nvlAcademico = data?.nivelAcademico?.map(({ grado_base }) => {
      if (grado_base == 0) {
        return "Preescolar";
      }
      if (grado_base > 0 && grado_base < 6) {
        return "Básica Primaria";
      }
      if (grado_base > 5 && grado_base < 10) {
        return "Básica Secundaria";
      }
      if (grado_base == 10) {
        return "Media Décimo";
      }
      if (grado_base == 11) {
        return "Media Once";
      }
      if (grado_base > 20 && grado_base < 23) {
        return "Ciclos Básica Primaria";
      }
      if (grado_base > 22 && grado_base < 25) {
        return "Ciclos Básica Secundaria";
      }
      if (grado_base > 24 && grado_base < 26) {
        return "Ciclos Media";
      }
    });
    // filtrar nvlAcademico elementos array iguales
    let nvlAcademicoFiltrado = nvlAcademico.filter(
      (elem: any, index: any, self: any) => index === self.indexOf(elem)
    );
    // convertir nvlAcademicoFiltrado a string
    let nvlAcademicoString = nvlAcademicoFiltrado.join(", ");

    console.log("=mmmmm===================================");
    console.log(nvlAcademicoString);
    console.log("====================================");
    return nvlAcademicoString;
  };
  return (
    <>
      {Object.keys(data).length ? (
        <div className="max-w-md mx-auto overflow-auto md:max-w-2xl min-w-0  bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
          <div className="sm:px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full flex justify-center">
                <div className="text-white shadow-xl rounded-3xl align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 w-36 h-36  overflow-hidden ">
                  <Image
                    width={166}
                    height={166}
                    src={`https://www.ensiibague.edu.co/sygescol${new Date().getFullYear()}/images/fotos/docentes/${
                      info.dcne_foto != ""
                        ? info.dcne_foto
                        : info.dcne_genero == "F"
                        ? "siluetaMujer.jpg"
                        : info.dcne_genero == "M"
                        ? "siluetaHombre.jpg"
                        : "no_imagen.jpg"
                    }`}
                    className="w-full shadow-xl align-middle border-none absolute"
                    alt="Imagen"
                    objectPosition="top"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="w-full  text-center mt-20">
                <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                  <div className="p-3 text-center">
                    <span className=" sm:text-xl font-bold block uppercase tracking-wide text-slate-700">
                      {loading ? "Cargando ..." : NivelesAcademicos()}
                    </span>
                    <span className="text-xs text-slate-400">
                      NIVELES ACADÉMICOS
                    </span>
                  </div>
                  <div className="sm:p-3 text-center">
                    <span className="text-xl font-bold block capitalize tracking-wide text-slate-700">
                      {loading
                        ? "CARGANDO ..."
                        : data?.directorGrupo[0]?.grupo_nombre || "NO TIENE"}
                    </span>
                    <span className=" text-slate-400 uppercase">
                      {info.dcne_genero == "M" ? "DIRECTOR" : "DIRECTORA"}
                    </span>
                  </div>
                  <div className="p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                      {loading ? "Cargando ..." : data?.jornada?.b}
                    </span>
                    <span className="text-sm text-slate-400">JORNADA (S)</span>
                  </div>
                </div>
              </div>

              <div className="w-full text-center ">
                <div className="text-2xl text-slate-700 font-bold leading-normal mb-1">
                  {`${info?.dcne_nom1?.toUpperCase()} ${info?.dcne_nom2?.toUpperCase()} ${info?.dcne_ape1?.toUpperCase()} ${info?.dcne_ape2?.toUpperCase()}`}
                </div>
              </div>
            </div>
            <div className="text-center ">
              <h3 className="flex justify-center  pb-0">
                {loading
                  ? "Cargando ..."
                  : data?.correoData[0]?.correo_insti ||
                    "NO REGISTRA CORREO INSTITUCIONAL EN EL SISTEMA"}

                {/* {data?.correoData[0]?.correo_insti || "NO TIENE CORREO DEFINIDO"} */}
              </h3>
              <div className="text-xs mt-0 mb-2 pt-6 text-gray-600/80 font-bold uppercase">
                {/* {info.cargo} */}
                <p className="text-2xl text-slate-700 font-bold leading-normal mb-1">
                  HORARIO DE ATENCIÓN AL PÚBLICO
                </p>
                {loading ? (
                  "Cargando ..."
                ) : (
                  <>
                    <div className="flex flex-col space-y-2">
                      {data?.horariosAtencionPadres.map((item, key) => (
                        <a
                          className="mx-4 py-2 bg-transparent outline-none border-2 border-[#006F46] rounded text-[#27333e] font-medium active:scale-95 hover:bg-[#006F46] hover:text-white hover:border-transparent  focus:ring-offset-2  transition-colors duration-200"
                          key={key}
                          href={`https://www.ensiibague.edu.co/sygescol${new Date().getFullYear()}/atencionDocente.php?horario=${
                            item.th_id
                          }&docente=${info.g}&jornada=${item.jornada_id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.th_nombre}
                        </a>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="mt-5 py-5 border-t border-slate-200 text-center">
              <h1 className="font-bold text-xl text-slate-700 pb-3 uppercase">
                Asignaturas
              </h1>
              <div className="flex flex-wrap justify-center">
                {loading ? (
                  <p className="text-center">CARGANDO ASIGNATURAS ...</p>
                ) : (
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 ">
                    {data?.asignaturas?.map((asignatura: any, key: any) => (
                      <div
                        key={key}
                        className="shadow rounded-lg  px-1  bg-white"
                      >
                        <div className=" text-center">
                          <p>{asignatura.grupo_nombre}</p>

                          <p> {asignatura.b}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center my-4 lg:text-lg font-medium animate-pulse text-[#006F46]">
          Por favor seleccione un docente
        </p>
      )}
    </>
  );
};

export default InfoDocentes;
