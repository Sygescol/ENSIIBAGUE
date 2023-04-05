"use client";
import React, { useState } from "react";
import AlertasItem from "./AlertasItem";

function page({ alerta }: any) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>open modal</button>
      <AlertasItem setOpen={setOpen} open={open} alerta={alerta} />
    </>
  );
}

export default page;

// export async function getServerSideProps() {
//   try {
//     const alerta = await fetch(`${process.env.APP_URL}api/alerta`).then((res) =>
//       res.json()
//     );

//     if (alerta[0]?.msn || alerta[1]?.error) {
//       return {
//         props: {
//           alerta: alerta || [],
//         },
//       };
//     }
//     return {
//       props: {
//         alerta: alerta,
//       },
//     };
//   } catch (err) {
//     console.log("=============================");
//     console.log(err);
//     return {
//       props: {
//         alerta: [
//           {
//             msn: "Fallo la conexión con el servidor si el error persiste contacte a soporte ",
//           },
//         ],
//       },
//     };
//   }
// }
