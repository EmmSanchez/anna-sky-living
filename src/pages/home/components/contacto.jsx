import { useState } from "react";
import sendIcon from "../../../assets/icons/send.svg";

export default function Contacto() {
  const [status, setStatus] = useState("idle"); // idle | sending | success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Simulación de envío (reemplazar por tu lógica real de envío)
    setTimeout(() => {
      setStatus("success");
      e.target.reset();

      // Oculta el mensaje de éxito después de unos segundos
      setTimeout(() => setStatus("idle"), 4000);
    }, 1200);
  };

  return (
    <section id="contacto" className="flex justify-center items-center w-full">
      <div className="flex flex-col w-full max-w-[1280px] justify-center items-center p-[60px] gap-[30px]">
        <div className="flex flex-col gap-[15px]">
          <h2 className="text-[35px] text-center font-bangla uppercase leading-[120%]">
            Contáctanos
          </h2>
          <p className="text-[21px] text-center leading-[120%]">
            Tu próximo espacio comienza con una conversación.
            <br />
            Cuéntanos qué estás buscando y encontraremos la opción ideal para
            ti.
          </p>
        </div>

        {/* Alerta de éxito */}
        {status === "success" && (
          <div className="w-full max-w-[600px] px-[24px] py-[16px] rounded-[5px] bg-[#1f7a3d]/10 border border-[#1f7a3d] text-[16px] text-[#1f7a3d] text-center">
            ¡Tu mensaje fue enviado con éxito! Nos pondremos en contacto contigo
            pronto.
          </div>
        )}

        {/* formulario */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full gap-[30px]"
        >
          {/* Nombre */}
          <input
            type="text"
            name="nombre"
            required
            placeholder="*Nombre completo"
            className="text-[21px] text-blanco leading-[120%] placeholder:text-[21px] placeholder:text-blanco placeholder:font-light placeholder:leading-[120%] px-[30px] py-[20px] border-b border-amarillo"
          />

          {/* Correo electrónico */}
          <input
            type="email"
            name="email"
            required
            placeholder="*Correo electrónico"
            className="text-[21px] text-blanco leading-[120%] placeholder:text-[21px] placeholder:text-blanco placeholder:font-light placeholder:leading-[120%] px-[30px] py-[20px] border-b border-amarillo"
          />

          {/* Teléfono */}
          <input
            type="tel"
            name="telefono"
            required
            placeholder="*Teléfono"
            className="text-[21px] text-blanco leading-[120%] placeholder:text-[21px] placeholder:text-blanco placeholder:font-light placeholder:leading-[120%] px-[30px] py-[20px] border-b border-amarillo"
          />

          {/* Mensaje */}
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            className="h-[229px] text-[21px] text-blanco leading-[120%] placeholder:text-[21px] placeholder:text-blanco placeholder:font-light placeholder:leading-[120%] px-[30px] py-[20px] border-b border-amarillo"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="group flex items-center justify-center w-fit px-[106px] py-[16px] gap-[10px] rounded-[5px] text-[16px] font-bold uppercase tracking-wider bg-naranja hover:bg-gris active:bg-blanco active:text-azul hover:cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <img
              src={sendIcon}
              alt="Ícono de enviar"
              className="size-[16px] group-active:invert-100"
            />
            {status === "sending" ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </section>
  );
}
