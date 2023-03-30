import Image from "next/image";
import Link from "next/link";
import React from "react";

function ContactanosItem({ imgContactanos, link, click, alt, title }: any) {
  return (
    <>
      {click ? (
        <>
          <Link href={link}>
            <div
              title={title}
              className="w-[3rem] h-[3rem] cursor-pointer  hover:rotate-[360deg] transition duration-[1.5s]"
              style={{ filter: "drop-shadow(0px 0px 3px black)" }}
            >
              <Image
                src={imgContactanos}
                width={170}
                height={170}
                alt={alt}
                className="object-cover"
              />
            </div>
          </Link>
        </>
      ) : (
        <>
          <a
            href={
              title.toLowerCase().includes("teléfono")
                ? `tel:${link}`
                : `${link}`
            }
            target="_blank"
            rel="noopener noreferrer"
            title={title}
            className="w-[3rem] h-[3rem] cursor-pointer  hover:rotate-[360deg] transition duration-[1.5s]"
            style={{ filter: "drop-shadow(0px 0px 3px black)" }}
          >
            <Image
              src={imgContactanos}
              width={170}
              height={170}
              alt={alt}
              className="object-cover"
            />
          </a>
        </>
      )}
    </>
  );
}

export default ContactanosItem;
