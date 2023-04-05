"use client";
import Image from "next/image";
import React from "react";
import Moment from "react-moment";

function CalendarioItemNew({ fecha, imagen, title, contenido, archivo }: any) {
  let NewFecha2 = fecha.substring(0, 10);
  return (
    <>
      <article className="w-full h-full flex bg-[#99C5B5] transition hover:shadow-md hover:shadow-[#003823]">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr] self-center text-[1.2rem] font-bold text-[#003823]">
          <Moment format="DD">{NewFecha2}</Moment> de{" "}
          <Moment format="MMMM">{NewFecha2}</Moment> del{" "}
          <Moment format="YYYY">{NewFecha2}</Moment>
        </div>
        <div className="hidden lg:block xl:flex">
          <Image
            src={imagen}
            width={226}
            height={226}
            alt="calendarioItem"
            objectFit="contain"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div className="border-l border-[#003823] p-4 lg:border-none sm:p-6">
            <h1 className="text-xl font-bold uppercase text-[#003823]">
              {title}
            </h1>
            <p className="mt-2 text-lg font-medium leading-[1.6rem] text-[#003823] text-justify">
              {contenido}
            </p>
          </div>
          <div className="sm:flex sm:items-end sm:justify-end">
            <div
              onClick={() => {
                window.open(`https://ensiibague.edu.co/portal/pdf/${archivo}`);
              }}
              className="cursor-pointer block bg-[#005335] px-5 py-3 text-center md:text-[1.2rem] lg:text-[1.3rem] font-bold uppercase text-white transition hover:bg-[#003823]"
            >
              PDF actividad
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default CalendarioItemNew;
