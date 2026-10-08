import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/fonts.css";
import Lenis from "lenis";
import Router from "./router";

const lenis = new Lenis({
  duration: 0.8,
  smoothWheel: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
