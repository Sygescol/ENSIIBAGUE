import DirectorioItem from "./DirectorioItem";
import TitulosInternos from "../(Header)/TitulosInternos";

const directorio = () => {
  return (
    <>
      <TitulosInternos title="Directorio" />
      <section className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DirectorioItem
          title="DIRECTIVOS DOCENTES"
          img="/Directorio/directivosDIRECT.webp"
          enlace="/directorio/DirectivosDocentes"
        />
        <DirectorioItem
          title="DOCENTES"
          img="/Directorio/docentesDIRECT.webp"
          enlace="/directorio/Docentes"
        />
        <DirectorioItem
          title="ADMINISTRATIVOS"
          img="/Directorio/administrativosDIRECT.webp"
          enlace="/directorio/Administrativo"
        />
        <DirectorioItem
          className="lg:col-span-3"
          title="CONTRATISTAS"
          img="/Directorio/contratistasDIRECT.webp"
          enlace="/directorio/Contratistas"
        />
      </section>
    </>
  );
};

export default directorio;
