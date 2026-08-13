import Amenidades from "./components/amenidades";
import GrupoTrecasa from "./components/grupo-trecasa";
import Hero from "./components/hero";
import PermisosDeObra from "./components/permisos-de-obra";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <GrupoTrecasa />
      <PermisosDeObra />
      <Amenidades />
    </main>
  );
}
