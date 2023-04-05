"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function TitulosInternos({ title }: any) {
  // const router = useRouter();

  return (
    <section
      style={{
        backgroundImage: 'url("/Menu/titulosInternosENSIIBAG.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="py-7 flex h-full w-full items-center justify-center  mx-auto px-8 lg:w-full bg-black bg-opacity-50">
        <div className="max-w-2xl text-center">
          <h1
            style={{ filter: "drop-shadow(0px 0px 3px black)" }}
            className="text-3xl sm:text-4xl md:text-5xl  tracking-widest text-white lg:text-6xl font-bold uppercase"
          >
            {title}
          </h1>
          <div className="mt-1 space-y-3 sm:-mx-2 sm:mt-5 sm:flex-row sm:justify-center sm:space-y-0">
            <Link href={"/"}>
              <button className="transform rounded-l-lg bg-[#006F46] border-[#006F46] hover:bg-[#005335] hover:border-[#005335] border-2 border-r-2 border-r-white hover:border-r-white px-8 py-2 text-sm font-medium capitalize tracking-wide text-white hover:text-white transition-colors duration-200">
                INICIO
              </button>
            </Link>

            <button
              // onClick={(e) => {
              //   e.preventDefault();
              //   router.back();
              // }}
              className="transform rounded-r-lg border-2 bg-[#006F46] border-[#006F46] hover:bg-[#005335] hover:border-[#005335] px-8 py-2 text-sm font-medium capitalize tracking-wide text-white hover:text-white transition-colors duration-200"
            >
              VOLVER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TitulosInternos;
