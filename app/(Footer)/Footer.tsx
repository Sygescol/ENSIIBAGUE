import React, { useEffect, useState } from "react";

import ContactanosItem from "./ContactanosItem";
import InfoInteresItem from "./InfoInteresItem";
import NuestrasSedesItem from "./NuestrasSedesItem";
import PoliticasInfoItem from "./PoliticasInfoItem";
import SVGpolitica from "./SVGpolitica";

const Footer = () => {
  const [InfoSedes, setInfoSedes] = useState([]);
  const [Redes, setRedes] = useState([] as any);

  async function ObtenerSedes() {
    const res = await fetch(`/api/Footer`);
    const sede = await res.json();
    setInfoSedes(sede);
  }

  async function ObtenerRedes() {
    const res = await fetch(`/api/redesSociales`);
    const redes = await res.json();
    setRedes(redes);
  }
  console.log("cosa");

  console.log("Redes=========Xd");
  console.log(Redes);
  useEffect(() => {
    ObtenerSedes();
    ObtenerRedes();
  }, []);

  return (
    <div className="bg-[#006F46] mx-auto w-full py-4 xl:px-20 lg:px-12 sm:px-6 px-4">
      <div className="mb-2 grid justify-center items-center md:grid-cols-1 md:gap-8 gap-4 xl:grid-cols-3">
        {/* Información de interés */}
        <div className="text-white flex flex-col items-center justify-center">
          <div className="mb-3 text-lg font-bold text-center">
            Atención al ciudadano - Información de interés
          </div>
          <div className="flex place-content-center flex-wrap gap-2">
            <InfoInteresItem
              imgInfoInteres="/Footer/PQRSD.webp"
              alt="PQRSD"
              link="/pqrs"
              title={"PQRS"}
            />
            <InfoInteresItem
              imgInfoInteres="/Footer/GALERIA.webp"
              alt="imagenGaleria"
              link=""
              title={"Galería"}
            />
            <InfoInteresItem
              imgInfoInteres="/Footer/ENLACES.webp"
              alt="enlacesInteres"
              link="/EnlacesdeInteres"
              title={"Enlaces de Interés"}
            />
            <InfoInteresItem
              imgInfoInteres="/Footer/iconoDescargaApp.png"
              alt="iconoDescargaApp"
              link="/DescargaAplicativos"
              title={"Descarga de Aplicativos"}
            />
            {/* <InfoInteresItem
                imgInfoInteres="/Footer/ENLACES.webp"
                alt="enlacesInteres"
                click={() => router.push("/EnlacesInteres")}
                title={"Enlaces de Interés"}
              /> */}
          </div>
        </div>
        {/* Nuestras Sedes */}
        <div className="text-white flex flex-col items-center justify-center text-center">
          <div className="mb-3 text-lg font-bold text-center">
            Conoce Nuestras Sedes
          </div>
          <div className="max-w-xl mx-auto">
            <div className="flex place-content-center flex-wrap gap-2">
              {InfoSedes.length ? (
                InfoSedes.map((sede: any) => (
                  <NuestrasSedesItem
                    title={sede.nombre}
                    key={sede.id}
                    link={`/Sedes/${sede.nombre}`}
                    titleShow="Ver mas información"
                  />
                ))
              ) : (
                <>
                  <button
                    className="grid grid-cols-3 bg-[#4d677c] w-40 h-full rounded-lg text-white font-bold hover:bg-[#27333e] hover:cursor-not-allowed duration-[500ms,800ms]"
                    type="button"
                    disabled
                  >
                    <div className="my-auto h-5 w-5 mx-3 border-t-transparent border-solid animate-spin rounded-full border-white border-4" />
                    <div className="my-auto -mx-1"> Cargando Sedes...</div>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        {/* Contáctanos */}
        <div className="text-white flex flex-col items-center justify-center text-xl font-bold text-center mb-2 lg:col-span-2 xl:col-span-1">
          <div className="mb-3 text-lg font-bold text-center ">Contáctanos</div>
          <div className="flex flex-wrap gap-2  place-content-center">
            <ContactanosItem
              imgContactanos="/Footer/whatsappFOOTER.webp"
              link={Redes[1]?.link}
              alt="Footer/imagenWhatsapp"
              title={"Whatsapp"}
            />
            <ContactanosItem
              imgContactanos="/Footer/telefonicaFOOTER.webp"
              link={Redes[4]?.link}
              alt="Footer/imagenTelefonica"
              title={"Teléfono"}
            />
            <ContactanosItem
              imgContactanos="/Footer/correosFOOTER.webp"
              click={true}
              link="/PruebaExcel"
              alt="Footer/imagenCorreos"
              title={"Correos Institucionales"}
            />
            <ContactanosItem
              imgContactanos="/Footer/facebookFOOTER.webp"
              link={Redes[0]?.link}
              alt="Footer/imagenFacebook"
              title={"Facebook"}
            />
            <ContactanosItem
              imgContactanos="/Footer/TwitterFOOTER.png"
              link={Redes[3]?.link}
              alt="Footer/imagenEmisora"
              title={"Twitter"}
            />
            <ContactanosItem
              imgContactanos="/Footer/instagramFOOTER.webp"
              link={Redes[2]?.link}
              alt="Footer/imagenInstagram"
              title={"Instagram"}
            />
          </div>

          {/* Politicas de información */}
          <div className="mt-4 text-lg font-bold text-center">
            Políticas de Información
          </div>
          {/* <div className="mt-1 grid grid-cols-1 lg:grid-cols-2 gap-2 place-content-center"> */}
          <div className="flex flex-col md:flex-row flex-wrap gap-4">
            <PoliticasInfoItem
              title="Políticas de Seguridad"
              icono={<SVGpolitica />}
              link="/Items/1.4/Políticas de Seguridad de la Información"
            />
            <PoliticasInfoItem
              title="Políticas de Tratamiento"
              icono={<SVGpolitica />}
              link="/Items/1.4.1/Política de Tratamiento de la Información"
            />
          </div>
        </div>
      </div>

      {/* info empresa */}
      <div>
        <div className="animate-bounce mt-[2rem] text-center font-bold text-lg lg:text-2xl pb-3 text-white">
          <h1>SLOGAN</h1>
        </div>
        <div className="border-white border-b-2 mb-2"></div>
        <div>
          <p className="text-white text-center font-semibold text-base lg:text-lg">
            Copyright © {new Date().getFullYear()} - ESCUELA NORMAL SUPERIOR DE
            IBAGUÉ
          </p>
          <p className="text-white text-center font-semibold text-sm lg:text-base">
            Diseñado por la empresa fabricante de Software Sistemas e
            Informática Ivorsnet S.A.S.
          </p>
          <a
            href="http://sistemasivhorsnet.com/"
            target="_blank "
            rel="noopener"
          >
            <p className="text-white text-center font-semibold text-sm lg:text-base hover:text-white/80">
              http://sistemasivhorsnet.com/
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
