import { whatsappInfo } from "../data/social";

export default function WhatsappButton() {
  return (
    <a
      href={whatsappInfo.href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-10 bottom-8 right-12 flex size-[42px] justify-center items-cente p-[8px] rounded-[7.5px] bg-naranja"
    >
      <img src={whatsappInfo.icon} alt="Ícono de whatsapp" />
    </a>
  );
}
