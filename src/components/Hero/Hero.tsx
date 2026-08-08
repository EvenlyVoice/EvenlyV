import './Hero.css';

export const Hero = () => {
  return (
    <header className="hero">
      <div className="hero__grid" />
      
      <div className="container">
        <div className="hero__meta">
          <span>Портфолио — 2026</span>
          <span>Москва · UTC+3</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line">EvenlyV</span>
          <span className="hero__title-line hero__title-stroke">Бондаревский Павел</span>
        </h1>

        <div className="hero__content">
          <div>
            <p className="hero__role">Дизайнер × Разработчик</p>
            <p className="hero__desc">
             <strong> Полный цикл создания сайта:</strong> интерфейс, макет, продакшен. 
            </p>
              <p className="hero__desc">
             <strong>Брендинг под ключ</strong> — от 3D-визуализации до печати и web. 
            </p>
          </div>
          
          
          <div className="hero__cta">
            <a href="#works" className="btn-primary">
              Смотреть работы ↗
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};