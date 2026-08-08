import { useState } from 'react';
import './Process.css';

const STAGES = [
  { title: 'Макет', desc: 'Wireframes, Figma, CJM, User Flow' },
  { title: 'Дизайн-система', desc: 'Tokens, Typography, UI Kit, Components' },
  { title: 'Вёрстка', desc: 'React, Semantic HTML, A11y, Pixel Perfect' },
  { title: 'Анимации', desc: 'GSAP, Framer Motion, Micro-interactions' },
  { title: 'Деплой', desc: 'CI/CD, Vercel, Analytics, Monitoring' },
];

export const Process = () => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section id="process" className="process">
      <div className="container">
        <span className="process__label">(02) Процесс</span>
        <h2 className="process__title">От макета<br/>до выкладки</h2>

        <div className="process__grid">
          {/* Steps */}
          <div className="process__steps">
            {STAGES.map((stage, index) => (
              <div
                key={index}
                className={`process-step ${activeStage === index ? 'active' : ''}`}
                onClick={() => setActiveStage(index)}
              >
                <span className="process-step__number">0{index + 1}</span>
                <div>
                  <h3 className="process-step__title">{stage.title}</h3>
                  <p className="process-step__desc">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Visualizer */}
          <div className="process__visualizer">
            
            {/* Stage 1: Wireframe */}
            <div className={`stage-panel stage-wireframe ${activeStage === 0 ? 'active' : ''}`}>
              <div className="wireframe-browser">
                <div className="wireframe-header">
                  <div className="wireframe-dot orange" />
                  <div className="wireframe-dot" />
                  <div className="wireframe-dot" />
                </div>
                <div className="wireframe-block" style={{ top: 64, left: '5%', width: '90%', height: 128, animationDelay: '0.1s' }} />
                <div className="wireframe-block" style={{ top: 208, left: '5%', width: '40%', height: 80, animationDelay: '0.3s' }} />
                <div className="wireframe-block" style={{ top: 208, right: '5%', width: '40%', height: 80, animationDelay: '0.5s' }} />
                <div className="wireframe-cursor">
                  <span className="wireframe-cursor-label">Я</span>
                </div>
              </div>
            </div>

            {/* Stage 2: Design System */}
            <div className={`stage-panel stage-design ${activeStage === 1 ? 'active' : ''}`}>
              <div className="design-grid">
                <div className="design-card">
                  <span className="design-card__label">Palette</span>
                  <div className="swatches">
                    <div className="swatch dark" />
                    <div className="swatch light" />
                    <div className="swatch accent" />
                  </div>
                </div>
                <div className="design-card">
                  <span className="design-card__label">Type Scale</span>
                  <div className="type-scale">
                    <span className="large">Aa</span>
                    <span className="medium">Aa</span>
                  </div>
                </div>
                <div className="design-card full">
                  <span className="design-card__label">UI Kit</span>
                  <div className="ui-kit">
                    <button className="ui-button">Button</button>
                    <div className="ui-input">Input field...</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 3: Code */}
            <div className={`stage-panel stage-code ${activeStage === 2 ? 'active' : ''}`}>
              <div className="code-tabs">
                <span className="code-tab active">hero.tsx</span>
                <span className="code-tab">styles.css</span>
              </div>
              <div className="code-content">
                <div className="code-line" style={{ animationDelay: '0.1s' }}>
                  <span className="token-keyword">import</span> {'{'} motion {'}'} <span className="token-keyword">from</span> <span className="token-string">'framer-motion'</span>
                </div>
                <div className="code-line" style={{ animationDelay: '0.3s' }}>
                  <span className="token-keyword">export function</span> <span className="token-function">Hero</span>() {'{'}
                </div>
                <div className="code-line" style={{ animationDelay: '0.5s' }}>
                  &nbsp;&nbsp;<span className="token-keyword">return</span> &lt;<span className="token-tag">section</span>&gt;
                </div>
                <div className="code-line" style={{ animationDelay: '0.7s' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello World&lt;/h1&gt;
                </div>
                <div className="code-line" style={{ animationDelay: '0.9s' }}>
                  &nbsp;&nbsp;&lt;/<span className="token-tag">section</span>&gt;
                </div>
                <div className="code-line" style={{ animationDelay: '1.1s' }}>
                  {'}'} <span className="token-comment">// pixel perfect ✓</span>
                  <span className="code-caret blink" />
                </div>
              </div>
            </div>

            {/* Stage 4: Animation */}
            <div className={`stage-panel stage-animation ${activeStage === 3 ? 'active' : ''}`}>
              <div className="animation-preview">
                <div className="animation-ball" />
                <div className="animation-square" />
              </div>
            </div>

            {/* Stage 5: Deploy */}
            <div className={`stage-panel stage-deploy ${activeStage === 4 ? 'active' : ''}`}>
              <div className="deploy-badge">
                <span className="deploy-dot" />
                LIVE
              </div>
              <div className="deploy-line">$ git push origin main</div>
              <div className="deploy-line dim">→ 3 commits pushed successfully</div>
              <div className="deploy-line">$ npm run build</div>
              <div className="deploy-line success">✓ Build completed in 4.2s</div>
              <div className="deploy-line">$ vercel deploy --prod</div>
              <div className="deploy-link">🔗 https://EvenlyV.dev</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};