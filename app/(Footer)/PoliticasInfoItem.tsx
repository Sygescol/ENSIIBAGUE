import Link from "next/link";
import React from "react";

function PoliticasInfoItem({ title, icono, link }: any) {
  return (
    <>
      <Link href={link}>
        <div className="cursor-pointer flex flex-col items-center gap-[0.4rem] hover:scale-105">
          <h1 className="text-base">{title}</h1>
          {icono}
        </div>
      </Link>
    </>
  );
}

export default PoliticasInfoItem;
