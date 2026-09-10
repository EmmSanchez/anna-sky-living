import { useEffect, useState } from "react";

export function useIsXl() {
  const [isXl, setIsXl] = useState(
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 1280px)").matches
      : false,
  );

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1280px)");
    const handler = (e) => setIsXl(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return isXl;
}
