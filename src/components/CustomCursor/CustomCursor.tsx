import { useEffect, useRef } from 'react';
import './CustomCursor.css';

const PIXEL_MAP = [
  [1,0,0,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0,0,0,0],
  [1,1,1,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,0,0,0,0,0,0,0,0],
  [1,1,1,1,1,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,0,0,0,0,0],
  [1,1,1,1,1,1,1,1,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,0,0,0],
  [1,1,1,1,1,1,0,0,0,0,0,0],
  [1,1,1,0,1,1,0,0,0,0,0,0],
  [1,1,0,0,0,1,1,0,0,0,0,0],
  [1,0,0,0,0,0,1,1,0,0,0,0],
  [0,0,0,0,0,0,0,1,1,0,0,0],
];

const PX = 2; // 1 пиксель карты = 2px экрана, сетка целая

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const accent =
      getComputedStyle(document.documentElement)
        .getPropertyValue('--color-accent')
        .trim() || '#ffffff';

    const bodies = Array.from(
      cursor.querySelectorAll<SVGRectElement>('.cursor-body')
    );

    let hovering = false;
    const paintAll = (base: string) =>
      bodies.forEach((rect) => rect.setAttribute('fill', base));

    const onMove = (e: MouseEvent) => {
      // translate3d — сразу на GPU, без лишних пересчётов
      cursor.style.transform =
        `translate3d(${e.clientX - 2}px, ${e.clientY - 2}px, 0)`;
    };

    const onDown = () => cursor.classList.add('clicking');
    const onUp = () => cursor.classList.remove('clicking');

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const next = !!t.closest('a, button, [data-hover], input');
      if (next !== hovering) {
        hovering = next;
        cursor.classList.toggle('hovering', hovering);
        paintAll(hovering ? accent : '#ffffff'); // перекрашиваем всё только при смене hover
      }
    };

    // ШУРШАНИЕ: дёшево — меняем лишь 6 случайных пикселей за тик
    const noise = setInterval(() => {
      const base = hovering ? accent : '#ffffff';
      for (let i = 0; i < 6; i++) {
        const rect = bodies[(Math.random() * bodies.length) | 0];
        rect.setAttribute('fill', Math.random() < 0.25 ? '#0c0c0c' : base);
      }
    }, 100);

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mouseover', onOver);

    return () => {
      clearInterval(noise);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);

  return (
    <div ref={cursorRef} className="pixel-cursor">
      <svg
        viewBox={`0 0 ${PIXEL_MAP[0].length * PX} ${PIXEL_MAP.length * PX}`}
        style={{ shapeRendering: 'crispEdges' }}
      >
        {PIXEL_MAP.map((row, y) =>
          row.map((p, x) =>
            p ? (
              <rect key={`o${x}-${y}`} x={x * PX - 1} y={y * PX - 1} width={PX + 2} height={PX + 2} fill="#000" />
            ) : null
          )
        )}
        {PIXEL_MAP.map((row, y) =>
          row.map((p, x) =>
            p ? (
              <rect key={`b${x}-${y}`} className="cursor-body" x={x * PX} y={y * PX} width={PX} height={PX} fill="#fff" />
            ) : null
          )
        )}
      </svg>
    </div>
  );
};