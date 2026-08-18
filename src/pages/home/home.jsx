import Amenidades from "./components/amenidades";
import AvanceObra from "./components/avance-obra";
import ConoceElProyecto from "./components/conoce-el-proyecto";
import Contacto from "./components/contacto";
import Footer from "./components/footer";
import GrupoTrecasa from "./components/grupo-trecasa";
import Hero from "./components/hero";
import PermisosDeObra from "./components/permisos-de-obra";
import Tipologias from "./components/tipologias";
import VideoBanner from "./components/video-banner";
import Visitanos from "./components/visitanos";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <GrupoTrecasa />
      <PermisosDeObra />
      <Amenidades />
      <Tipologias />
      <VideoBanner />
      <AvanceObra />
      <ConoceElProyecto />
      <Visitanos />
      <Contacto />
      <Footer />
    </main>
  );
}
