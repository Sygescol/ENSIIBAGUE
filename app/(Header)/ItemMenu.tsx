import Link from "next/link";
import React from "react";

const ItemMenu = ({ children, ruta, setIsOpen }: any) => {
  return (
    <Link href={`${ruta}`}>
      <li
        onClick={(e) => {
          e.preventDefault();

          setIsOpen(false);
        }}
        className="cursor-pointer mx-3 my-6 md:mx-1 lg:mx-3"
      >
        <div className="uppercase md:text-base lg:text-xl">{children}</div>
      </li>
    </Link>
  );
};

export default ItemMenu;
