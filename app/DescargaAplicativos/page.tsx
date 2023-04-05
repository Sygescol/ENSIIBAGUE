import React from "react";
import TitulosInternos from "../TitulosInternos/BodyComponent";
import DescargaAplicativosItem from "./DescargaAplicativosItem";

function page() {
  return (
    <>
      <TitulosInternos title="Descarga de Aplicativos" />
      <div className="flex flex-row flex-wrap justify-center gap-4 p-4 my-2">
        <DescargaAplicativosItem
          title="AnyDesk"
          enlace="https://anydesk.com/es/downloads/"
          imgEnlacesInt="/DescargaAplicativos/AppAnydesk.png"
        />
        <DescargaAplicativosItem
          title="TeamViewer"
          enlace="https://www.teamviewer.com/es-mx/descarga/"
          imgEnlacesInt="/DescargaAplicativos/AppTeamViewer.png"
        />
        <DescargaAplicativosItem
          title="Google Chrome"
          enlace="https://www.google.com/intl/es/chrome/"
          imgEnlacesInt="/DescargaAplicativos/AppChrome.png"
        />
        <DescargaAplicativosItem
          title="Firefox"
          enlace="https://www.mozilla.org/es-ES/firefox/new/"
          imgEnlacesInt="/DescargaAplicativos/AppFirefox.png"
        />
      </div>
    </>
  );
}

export default page;
