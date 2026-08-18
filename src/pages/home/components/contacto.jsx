import sendIcon from "../../../assets/icons/send.svg";

export default function Contacto() {
  return (
    <div className="flex justify-center items-center w-full">
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

        {/* formulario */}
        <form action="" className="flex flex-col w-full gap-[30px]">
          {/* Nombre */}
          <input
            type="text"
            placeholder="*Nombre completo"
            className="text-[21px] text-blanco leading-[120%] placeholder:text-[21px] placeholder:text-blanco placeholder:font-light placeholder:leading-[120%] px-[30px] py-[20px] border-b border-amarillo"
          />

          {/* Correo electrónico */}
          <input
            type="text"
            placeholder="*Correo electrónico"
            className="text-[21px] text-blanco leading-[120%] placeholder:text-[21px] placeholder:text-blanco placeholder:font-light placeholder:leading-[120%] px-[30px] py-[20px] border-b border-amarillo"
          />

          {/* Teléfono */}
          <input
            type="tel"
            placeholder="*Teléfono"
            className="text-[21px] text-blanco leading-[120%] placeholder:text-[21px] placeholder:text-blanco placeholder:font-light placeholder:leading-[120%] px-[30px] py-[20px] border-b border-amarillo"
          />

          {/* Mensaje */}
          <textarea
            type="text"
            placeholder="Mensaje"
            className="h-[229px] text-[21px] text-blanco leading-[120%] placeholder:text-[21px] placeholder:text-blanco placeholder:font-light placeholder:leading-[120%] px-[30px] py-[20px] border-b border-amarillo"
          />

          <button
            type="submit"
            className="flex items-center justify-center w-fit px-[106px] py-[16px] gap-[10px] rounded-[5px] text-[16px] font-bold uppercase tracking-wider bg-naranja"
          >
            <img src={sendIcon} alt="Ícono de enviar" className="size-[16px]" />
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
