import Navbar from "./navbar";
import heroBackground from "../../../assets/images/hero-background.jpg";
import annaSkyLiving from "../../../assets/logos/anna-sky-living-white.svg";

export default function Hero() {
  return (
    <div id="hero" className="relative w-full h-lvh flex flex-col">
      {/* Background  */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="relative w-full h-full">
          {/* Image */}
          <img
            src={heroBackground}
            alt="Render Anna Sky Living"
            className="absolute w-full h-full inset-0 object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 w-full h-full bg-azul/40" />
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="self-center relative z-10 flex flex-col grow w-full max-w-[1280px] justify-end p-[60px] gap-[30px]">
        {/* Logo */}
        <div className="relative w-[367px] h-[122px]">
          <img
            src={annaSkyLiving}
            alt="Logo Anna Sky Living"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>

        {/* Header 1 */}
        <h1 className="text-[35px] uppercase font-bangla leading-none">
          Vive en las alturas de un nuevo estilo de vida
        </h1>

        {/* Button */}
        <button className="w-fit px-[26px] py-[16px] rounded-[5px] text-[16px] font-bold uppercase tracking-wider bg-naranja hover:bg-gris hover:text-blanco active:bg-blanco active:text-negro hover:cursor-pointer">
          Vive la experience
        </button>
      </div>
    </div>
  );
}
