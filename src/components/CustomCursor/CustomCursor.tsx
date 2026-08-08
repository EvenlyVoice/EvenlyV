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

const PX = 3; // размер одного пикселя

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // берём твой акцентный цвет для hover
    const accent =
      getComputedStyle(document.documentElement)
        .getPropertyValue('--color-accent')
        .trim() || '#ffffff';

    const onMove = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 2}px, ${e.clientY - 2}px)`;
    };
    const onDown = () => cursor.classList.add('clicking');
    const onUp = () => cursor.classList.remove('clicking');
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      cursor.classList.toggle('hovering', !!t.closest('a, button, [data-hover], input'));
    };

    // ШУРШАНИЕ: случайные пиксели меняют оттенок
    const bodies = cursor.querySelectorAll<SVGRectElement>('.cursor-body');
    const noise = setInterval(() => {
      const hovering = cursor.classList.contains('hovering');
      const base = hovering ? accent : '#ffffff';
      bodies.forEach((rect) => {
        rect.setAttribute('fill', Math.random() < 0.2 ? '#0c0c0c' : base);
      });
    }, 90);

    window.addEventListener('mousemove', onMove);
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