import { useSearchParams } from "react-router";
import { ModeloModal } from "../pages/home/components/popup/modelos/modelo-modal";
import { MODELOS } from "../data/modelos";

export default function PopupModelo() {
  const [searchParams] = useSearchParams();
  const modelo = searchParams.get("modelo");

  const data = MODELOS[modelo];
  if (!data) return null;

  return <ModeloModal {...data} />;
}
