"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function DescargaAplicativosItem({
  imgEnlacesInt,
  title,
  enlace,
  contenido,
}: any) {
  return (
    <div className="w-[20rem] h-[27rem] overflow-hidden rounded-xl bg-[#99C5B5] shadow-md duration-200 hover:scale-105 hover:shadow-xl">
      <div className="flex flex-col justify-between w-[20rem] min-h-full p-5">
        <Image
          className="object-contain"
          src={imgEnlacesInt}
          width={250}
          height={250}
          alt={imgEnlacesInt}
          // src={`https://ensiibague.edu.co/portal/img/${imgEnlacesInt}`}
        />
        <div>
          <h1 className="my-1 text-[#003823] font-bold text-xl text-center">
            {title}
          </h1>
          <p className="mb-4 leading-[1] font-normal text-md text-center">
            {contenido}
          </p>
          <Link href={enlace} target="_blank">
            <button
              // onClick={() => window.open(enlace)}
              className="font-bold w-full rounded-md bg-[#005335] hover:bg-[#003823] py-2 text-white hover:shadow-md duration-75"
            >
              Ver Más
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DescargaAplicativosItem;
