import { useState, useEffect, useRef } from 'react';
import './Preloader.css';

// Строки "системного кода", которые бегут в терминале (ровно 18 штук)
const BOOT_LINES = [
  '> init system.core v2.6 ...',
  '> loading modules: [design, code, motion]',
  '> import { creativity } from "brain"',
  '> npm run build --production',
  '> compiling shaders ... OK',
  '> mounting <App /> ...',
  '> connecting to portfolio.db',
  '> fetching projects [5/5] ...',
  '> optimizing animations ... 60fps',
  '> security check ... PASSED',
  '> injecting styles.css',
  '> gsap.registerPlugin(ScrollTrigger)',
  '> rendering pixels ...',
  '> cdn: cache cleared',
  '> lighthouse score: 98/100',
  '> deploying to production ...',
  '> starting interface ...',
  '> connecting to portfolio.db',
  '> fetching projects [5/5] ...',
  '> optimizing animations ... 60fps',
  '> security check ... PASSED',
  '> injecting styles.css',
  '> gsap.registerPlugin(ScrollTrigger)',
  '> rendering pixels ...',
  '> lighthouse score: 98/100',
  '> ACCESS GRANTED ✔',
];

interface Props {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: Props) => {
  const [count, setCount] = useState(0);
  const [lines, setLines] = useState<string[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // ===== СЧЕТЧИК ПРОЦЕНТОВ =====
  useEffect(() => {
    const start = Date.now();
    const duration = 3000; // ← общее время прелоадера (3 секунды)

    const timer = setInterval(() => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      setCount(Math.floor(progress * 100));

      if (progress >= 1) {
        clearInterval(timer);
        setTimeout(onComplete, 600); // Небольшая задержка перед скрытием прелоадера
      }
    }, 16);

    return () => clearInterval(timer);
  }, [onComplete]);

  // ===== САМ КОД (БЕЗ ПОВТОРОВ) =====
  useEffect(() => {
    let i = 0;
    const speed = 110; // ← 18 строк * 150мс = 2700мс (успеет напечататься до конца)

    const timer = setInterval(() => {
      // ГЛАВНОЕ ИСПРАВЛЕНИЕ: Останавливаем таймер, когда строки закончились
      if (i >= BOOT_LINES.length) {
        clearInterval(timer);
        return;
      }
      
      setLines(prev => {
        const next = [...prev, BOOT_LINES[i]];
        return next.slice(-50); 
      });
      i++;
    }, speed);

    return () => clearInterval(timer);
  }, []);

  // ===== ФОН (МАТРИЧНЫЙ ДОЖДЬ) =====
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const accent = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-accent')
      .trim();

    const hexToRgba = (hex: string, a: number) => {
      if (!hex.startsWith('#') || hex.length !== 7) return 'rgba(165, 1, 143, 0.5)';
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${a})`;
    };

    const rainColor = hexToRgba(accent, 0.5);

    const chars = 'アカサタナハマヤラ0123456789<>/{}=+*#';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(119, 0, 113, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = rainColor;
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };

    const rain = setInterval(draw, 50);
    return () => clearInterval(rain);
  }, []);

  return (
    <div className="preloader">
      <canvas ref={canvasRef} className="preloader__matrix" />

      <div className="preloader__header">
        <span>EvenlyV © 2026</span>
        <span>Загрузка системы...</span>
      </div>

      <div className="preloader__body">
        <div className="preloader__counter">
          <div className="preloader__number">
            {count}<span className="preloader__percent">%</span>
          </div>
          <div className="preloader__bar">
            <div className="preloader__progress" style={{ width: `${count}%` }} />
          </div>
        </div>
        <div className="preloader__terminal">
          {lines.map((line, index) => (
            <div key={index} className="preloader__line">{line}</div>
          ))}
          <div className="preloader__line">
            <span className="preloader__blink">█</span>
          </div>
        </div>
      </div>
    </div>
  );
};