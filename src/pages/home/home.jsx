import { useSearchParams } from "react-router";
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

// Modelos
import ModeloTipoA from "./components/popup/modelos/modelo-tipo-a";
import ModeloTipoB from "./components/popup/modelos/modelo-tipo-b";
import ModeloTipoC from "./components/popup/modelos/modelo-tipo-c";
import ModeloTipoD from "./components/popup/modelos/modelo-tipo-d";

import WhatsappButton from "../../components/whatsapp-button";
import { useState } from "react";
import IngresaPopup from "./components/popup/formulario/ingresa-popup";

const popupsPorModelo = {
  "tipo-a": ModeloTipoA,
  "tipo-b": ModeloTipoB,
  "tipo-c": ModeloTipoC,
  "tipo-d": ModeloTipoD,
};

export default function Home() {
  const [searchParams] = useSearchParams();
  const [showInitalModal, setShowInitalModal] = useState(true);

  const modeloId = searchParams.get("modelo");
  const ModeloPopup = popupsPorModelo[modeloId];

  return (
    <main className="flex flex-col">
      <WhatsappButton />
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

      {ModeloPopup && <ModeloPopup />}
      {showInitalModal && (
        <IngresaPopup
          isOpen={showInitalModal}
          setShowInitalModal={setShowInitalModal}
        />
      )}
    </main>
  );
}
