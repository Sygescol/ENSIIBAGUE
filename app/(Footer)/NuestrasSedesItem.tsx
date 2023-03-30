import Link from "next/link";
import React from "react";

function NuestrasSedesItem({ title, link, titleShow }: any) {
  return (
    <Link href={link}>
      <div
        title={titleShow}
        className="leading-none w-[8.6rem] h-[4.6rem]  relative group overflow-hidden px-3 rounded-md bg-[#005335]
        before:absolute 
        before:inset-0 
        before:bg-[#003823] 
        before:scale-y-[0.1] 
        before:origin-bottom
        before:transition
        before:duration-300
        hover:before:scale-y-100"
      >
        <span className="relative uppercase text-xs text-white font-semibold leading-none">
          {title}
        </span>
      </div>
    </Link>
  );
}

export default NuestrasSedesItem;
