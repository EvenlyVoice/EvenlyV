import { useState, useRef, useEffect } from 'react';
import './Process.css';
import { useLanguage } from '../../i18n';

interface LiquidObject {
  type: 'circle' | 'triangle' | 'square';
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius?: number;
  size?: number;
  rotation: number;
  color: string;
  stroke: string;
}

export const Process = () => {
  const { t } = useLanguage();
  const [activeStage, setActiveStage] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number>(0);

  const STAGES = [
    { title: t('stage1Title'), desc: t('stage1Desc') },
    { title: t('stage2Title'), desc: t('stage2Desc') },
    { title: t('stage3Title'), desc: t('stage3Desc') },
    { title: t('stage4Title'), desc: t('stage4Desc') },
    { title: t('stage5Title'), desc: t('stage5Desc') },
  ];

  useEffect(() => {
    if (activeStage !== 3) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let time = 0;
    let mouse = { x: -1000, y: -1000, isDown: false };
    let draggedObject: LiquidObject | null = null;
    let objects: LiquidObject[] = [];

    const resize = () => {
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
      initObjects();
    };

    const initObjects = () => {
      objects = [
        {
          type: 'circle',
          x: width * 0.5,
          y: height * 0.3,
          radius: 35,
          vx: 0,
          vy: 0,
          rotation: 0,
          color: '#ff00ff',
          stroke: '#ffffff',
        },
        {
          type: 'triangle',
          x: width * 0.3,
          y: height * 0.6,
          size: 50,
          vx: 0,
          vy: 0,
          rotation: 0.3,
          color: '#ff00ff',
          stroke: '#ffffff',
        },
        {
          type: 'square',
          x: width * 0.7,
          y: height * 0.65,
          size: 40,
          vx: 0,
          vy: 0,
          rotation: -0.4,
          color: '#ff00ff',
          stroke: '#ffffff',
        },
      ];
    };

    const drawLiquid = (yOffset: number, amplitude: number, frequency: number, speed: number, color: string, strokeColor: string, fillBottom: boolean = false) => {
      ctx.beginPath();
      
      if (fillBottom) {
        ctx.moveTo(0, height);
        for (let x = 0; x <= width; x += 5) {
          const wave = Math.sin(x * frequency + time * speed) * amplitude +
                       Math.sin(x * frequency * 0.5 + time * speed * 0.7) * amplitude * 0.5;
          ctx.lineTo(x, yOffset + wave);
        }
        ctx.lineTo(width, height);
      } else {
        ctx.moveTo(0, yOffset);
        for (let x = 0; x <= width; x += 5) {
          const wave = Math.sin(x * frequency + time * speed) * amplitude +
                       Math.sin(x * frequency * 0.5 + time * speed * 0.7) * amplitude * 0.5;
          ctx.lineTo(x, yOffset + wave);
        }
        ctx.lineTo(width, 0);
        ctx.lineTo(0, 0);
      }
      
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();

      // Контур
      ctx.beginPath();
      ctx.moveTo(0, yOffset);
      for (let x = 0; x <= width; x += 5) {
        const wave = Math.sin(x * frequency + time * speed) * amplitude +
                     Math.sin(x * frequency * 0.5 + time * speed * 0.7) * amplitude * 0.5;
        ctx.lineTo(x, yOffset + wave);
      }
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 3;
      ctx.stroke();
    };

    const drawObject = (obj: LiquidObject) => {
      ctx.save();
      ctx.translate(obj.x, obj.y);
      ctx.rotate(obj.rotation);

      ctx.beginPath();

      if (obj.type === 'circle') {
        ctx.arc(0, 0, obj.radius || 35, 0, Math.PI * 2);
      } else if (obj.type === 'triangle') {
        const s = obj.size || 50;
        ctx.moveTo(0, -s * 0.6);
        ctx.lineTo(s * 0.5, s * 0.4);
        ctx.lineTo(-s * 0.5, s * 0.4);
        ctx.closePath();
      } else if (obj.type === 'square') {
        const s = obj.size || 40;
        ctx.rect(-s / 2, -s / 2, s, s);
      }

      ctx.fillStyle = obj.color;
      ctx.fill();
      ctx.strokeStyle = obj.stroke;
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.restore();
    };

    const checkCollision = (obj: LiquidObject) => {
      const topLiquidY = height * 0.25 + Math.sin(obj.x * 0.01 + time * 2) * 20;
      const bottomLiquidY = height * 0.7 + Math.sin(obj.x * 0.01 + time * 1.5) * 20;

      const objTop = obj.y - (obj.radius || obj.size || 40) * 0.6;
      const objBottom = obj.y + (obj.radius || obj.size || 40) * 0.6;

      if (objTop < topLiquidY + 10) {
        obj.vy += (topLiquidY + 10 - objTop) * 0.1;
      }

      if (objBottom > bottomLiquidY - 10) {
        obj.vy -= (objBottom - bottomLiquidY + 10) * 0.1;
      }

      obj.vy += 0.1;
      obj.vx *= 0.98;
      obj.vy *= 0.98;

      if (!mouse.isDown || draggedObject !== obj) {
        obj.x += obj.vx;
        obj.y += obj.vy;
      }

      if (obj.x < 50) { obj.x = 50; obj.vx *= -0.5; }
      if (obj.x > width - 50) { obj.x = width - 50; obj.vx *= -0.5; }
    };

    const animate = () => {
      time += 0.016;

      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      drawLiquid(height * 0.25, 20, 0.01, 2, '#ff00ff', '#ffffff', false);
      drawLiquid(height * 0.7, 20, 0.01, 1.5, '#ff00ff', '#ffffff', true);

      for (const obj of objects) {
        checkCollision(obj);
        drawObject(obj);
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseDown = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isDown = true;

      for (const obj of objects) {
        const dx = mouse.x - obj.x;
        const dy = mouse.y - obj.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const hitRadius = obj.radius || (obj.size || 40) * 0.6;

        if (dist < hitRadius) {
          draggedObject = obj;
          break;
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;

      if (draggedObject) {
        draggedObject.x = mouse.x;
        draggedObject.y = mouse.y;
        draggedObject.vx = 0;
        draggedObject.vy = 0;
      }
    };

    const handleMouseUp = () => {
      mouse.isDown = false;
      draggedObject = null;
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseUp);

    resize();
    window.addEventListener('resize', resize);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseleave', handleMouseUp);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [activeStage]);

  // return (
  //   <section id="process" className="process">
  //     <div className="container">
  //       <span className="process__label">{t('processLabel')}</span>
  //       <h2 className="process__title">{t('processTitle1')}<br/>{t('processTitle2')}</h2>

  //       <div className="process__grid">
  //         <div className="process__steps">
  //           {STAGES.map((stage, index) => (
  //             <div
  //               key={index}
  //               className={`process-step ${activeStage === index ? 'active' : ''}`}
  //               onClick={() => setActiveStage(index)}
  //             >
  //               <span className="process-step__number">0{index + 1}</span>
  //               <div>
  //                 <h3 className="process-step__title">{stage.title}</h3>
  //                 <p className="process-step__desc">{stage.desc}</p>
  //               </div>
  //             </div>
  //           ))}
  //         </div>

  //         <div className="process__visualizer">
  //           <div className={`stage-panel stage-wireframe ${activeStage === 0 ? 'active' : ''}`}>
  //             <div className="wireframe-browser">
  //               <div className="wireframe-header">
  //                 <div className="wireframe-dot orange" />
  //                 <div className="wireframe-dot" />
  //                 <div className="wireframe-dot" />
  //               </div>
  //               <div className="wireframe-block" style={{ top: 64, left: '5%', width: '90%', height: 128, animationDelay: '0.1s' }} />
  //               <div className="wireframe-block" style={{ top: 208, left: '5%', width: '40%', height: 80, animationDelay: '0.3s' }} />
  //               <div className="wireframe-block" style={{ top: 208, right: '5%', width: '40%', height: 80, animationDelay: '0.5s' }} />
  //               <div className="wireframe-cursor">
  //                 <span className="wireframe-cursor-label">{t('processWireframeMe')}</span>
  //               </div>
  //             </div>
  //           </div>

  //           <div className={`stage-panel stage-design ${activeStage === 1 ? 'active' : ''}`}>
  //             <div className="design-grid">
  //               <div className="design-card">
  //                 <span className="design-card__label">{t('processPalette')}</span>
  //                 <div className="swatches">
  //                   <div className="swatch dark" />
  //                   <div className="swatch light" />
  //                   <div className="swatch accent" />
  //                 </div>
  //               </div>
  //               <div className="design-card">
  //                 <span className="design-card__label">{t('processTypeScale')}</span>
  //                 <div className="type-scale">
  //                   <span className="large">Aa</span>
  //                   <span className="medium">Aa</span>
  //                 </div>
  //               </div>
  //               <div className="design-card full">
  //                 <span className="design-card__label">{t('processUiKit')}</span>
  //                 <div className="ui-kit">
  //                   <button className="ui-button">{t('processButton')}</button>
  //                   <div className="ui-input">{t('processInput')}</div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>

  //           <div className={`stage-panel stage-code ${activeStage === 2 ? 'active' : ''}`}>
  //             <div className="code-tabs">
  //               <span className="code-tab active">hero.tsx</span>
  //               <span className="code-tab">styles.css</span>
  //             </div>
  //             <div className="code-content">
  //               <div className="code-line" style={{ animationDelay: '0.1s' }}>
  //                 <span className="token-keyword">import</span> {'{'} motion {'}'} <span className="token-keyword">from</span> <span className="token-string">'framer-motion'</span>
  //               </div>
  //               <div className="code-line" style={{ animationDelay: '0.3s' }}>
  //                 <span className="token-keyword">export function</span> <span className="token-function">Hero</span>() {'{'}
  //               </div>
  //               <div className="code-line" style={{ animationDelay: '0.5s' }}>
  //                 &nbsp;&nbsp;<span className="token-keyword">return</span> &lt;<span className="token-tag">section</span>&gt;
  //               </div>
  //               <div className="code-line" style={{ animationDelay: '0.7s' }}>
  //                 &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;{t('processCodeHello')}&lt;/h1&gt;
  //               </div>
  //               <div className="code-line" style={{ animationDelay: '0.9s' }}>
  //                 &nbsp;&nbsp;&lt;/<span className="token-tag">section</span>&gt;
  //               </div>
  //               <div className="code-line" style={{ animationDelay: '1.1s' }}>
  //                 {'}'} <span className="token-comment">{t('processCodeComment')}</span>
  //                 <span className="code-caret blink" />
  //               </div>
  //             </div>
  //           </div>

  //           <div className={`stage-panel stage-animation ${activeStage === 3 ? 'active' : ''}`}>
  //             <div className="animation-preview" ref={containerRef}>
  //               <canvas
  //                 ref={canvasRef}
  //                 style={{
  //                   position: 'absolute',
  //                   inset: 0,
  //                   width: '100%',
  //                   height: '100%',
  //                   cursor: 'grab',
  //                 }}
  //               />
  //             </div>
  //           </div>

  //           <div className={`stage-panel stage-deploy ${activeStage === 4 ? 'active' : ''}`}>
  //             <div className="deploy-badge">
  //               <span className="deploy-dot" />
  //               {t('processLive')}
  //             </div>
  //             <div className="deploy-line">$ git push origin main</div>
  //             <div className="deploy-line dim">{t('processCommits')}</div>
  //             <div className="deploy-line">$ npm run build</div>
  //             <div className="deploy-line success">{t('processBuild')}</div>
  //             <div className="deploy-line">$ vercel deploy --prod</div>
  //             <div className="deploy-link">{t('processLink')}</div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
};