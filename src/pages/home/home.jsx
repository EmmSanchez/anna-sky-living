import Amenidades from "./components/amenidades";
import GrupoTrecasa from "./components/grupo-trecasa";
import Hero from "./components/hero";
import PermisosDeObra from "./components/permisos-de-obra";
import Tipologias from "./components/tipologias";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <GrupoTrecasa />
      <PermisosDeObra />
      <Amenidades />
      <Tipologias />
    </main>
  );
}
