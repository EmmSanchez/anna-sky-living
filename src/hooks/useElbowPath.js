import { useCallback, useLayoutEffect, useState } from "react";

const ANCHOR_Y = 0.15; // fracción del alto de la foto por donde sale la línea

export function useElbowPath({ rootRef, photoEl, levelId, enabled }) {
  const [path, setPath] = useState(null); // { id, d }

  const measure = useCallback(() => {
    const root = rootRef.current;
    const level = root?.querySelector(`[data-level="${levelId}"]`);
    if (!root || !photoEl || !level) return;

    const o = root.getBoundingClientRect();
    const p = photoEl.getBoundingClientRect();
    const l = level.getBoundingClientRect();

    const x1 = p.right - o.left;
    const y1 = p.top - o.top + p.height * ANCHOR_Y;
    const x2 = l.left - o.left;
    const y2 = l.top - o.top + l.height / 2;
    const xm = (x1 + x2) / 2;

    // guardamos el id junto al path: sirve como key para la animación
    setPath({ id: levelId, d: `M ${x1} ${y1} H ${xm} V ${y2} H ${x2}` });
  }, [rootRef, photoEl, levelId]);

  useLayoutEffect(() => {
    if (!enabled || levelId == null) {
      setPath(null);
      return;
    }
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(rootRef.current);
    if (photoEl) ro.observe(photoEl);
    return () => ro.disconnect();
  }, [enabled, levelId, photoEl, measure, rootRef]);

  return path;
}
