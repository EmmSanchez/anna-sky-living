import { useCallback, useLayoutEffect, useState } from "react";

const ANCHOR_Y = 0.15; // fracción del alto de la foto por donde sale la línea

export function useElbowPath({ rootRef, photoRef, levelId, enabled }) {
  const [d, setD] = useState(null);

  const measure = useCallback(() => {
    const root = rootRef.current;
    const photo = photoRef.current;
    const level = root?.querySelector(`[data-level="${levelId}"]`);
    if (!root || !photo || !level) return;

    // Todo relativo al contenedor, así el scroll no afecta
    const o = root.getBoundingClientRect();
    const p = photo.getBoundingClientRect();
    const l = level.getBoundingClientRect();

    const x1 = p.right - o.left;
    const y1 = p.top - o.top + p.height * ANCHOR_Y;
    const x2 = l.left - o.left;
    const y2 = l.top - o.top + l.height / 2;
    const xm = (x1 + x2) / 2;

    setD(`M ${x1} ${y1} H ${xm} V ${y2} H ${x2}`);
  }, [rootRef, photoRef, levelId]);

  useLayoutEffect(() => {
    if (!enabled || levelId == null) {
      setD(null);
      return;
    }
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(rootRef.current);
    return () => ro.disconnect();
  }, [enabled, levelId, measure, rootRef]);

  return { d, measure };
}
