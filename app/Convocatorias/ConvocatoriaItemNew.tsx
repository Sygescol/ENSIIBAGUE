import Image from "next/image";
import React from "react";
import { HiFolderDownload } from "react-icons/hi";

function ConvocatoriaItemNew({ title, contenido, archivo }: any) {
  return (
    <>
      <div className="bg-[#003823]">
        <div className="container p-5 mx-auto">
          <div className="p-5 bg-white flex items-center mx-auto border-b border-gray-200 rounded-lg sm:flex-row flex-col">
            <Image
              className="mr-[4%] object-contain"
              width={200}
              height={100}
              src="/Servicios/iconoConvocatoria.png"
              alt="iconoConvocatoria"
            />
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h1 className="text-[#003823] text-xl lg:text-2xl title-font font-bold mb-2">
                {title}
              </h1>
              <p className="leading-relaxed lg:text-base">{contenido}</p>
              <div
                className="w-full flex justify-center items-center text-[5rem] hover:scale-105 hover:text-red-800 gap-1 cursor-pointer font-medium mt-3 text-red-700 hover:font-bold"
                onClick={() => {
                  window.open(
                    `https://ensiibague.edu.co/portal/pdf/${archivo}`
                  );
                }}
              >
                {/* Archivo */}
                <HiFolderDownload />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConvocatoriaItemNew;
