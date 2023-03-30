"use client";

import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        "http://localhost:3000/api/directorio/infoDocente",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: "1",
            correo: "jhonned01@gmail.com",
          }),
        }
      ).then((response) => response?.json());

      console.log(data);
    };

    getData();
  }, []);

  return <div>HomePage</div>;
};

export default HomePage;
