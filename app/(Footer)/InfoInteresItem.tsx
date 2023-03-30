import Image from "next/image";
import Link from "next/link";
import React from "react";

function InfoInteresItem({ imgInfoInteres, alt, link, title }: any) {
  return (
    <>
      <Link href={link}>
        <div
          title={title}
          className="w-16 h-16 sm:w-20 hover:rotate-[360deg] transition duration-[1.5s] hover:scale-75 cursor-pointer"
          style={{ filter: "drop-shadow(0px 0px 3px black)" }}
        >
          <Image
            src={imgInfoInteres}
            width={200}
            height={200}
            alt={alt}
            className="object-cover"
          />
        </div>
      </Link>
    </>
  );
}

export default InfoInteresItem;
