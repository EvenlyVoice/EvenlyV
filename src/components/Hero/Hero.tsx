import './Hero.css';
import { useLanguage } from '../../i18n';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <header className="hero">
      <div className="hero__grid" />

      <div className="container">
        {/* META - НА ВЕСЬ КОНТЕЙНЕР, КАК БЫЛО */}
        <div className="hero__meta">
          <span>{t('heroMeta1')}</span>
          <span>{t('heroMeta2')}</span>
        </div>

        {/* ДВЕ КОЛОНКИ: ТЕКСТ + КУБ/КНОПКА */}
        <div className="hero__layout">
          {/* ЛЕВАЯ ЧАСТЬ: ЗАГОЛОВОК + ТЕКСТ */}
          <div className="hero__text-section">
            <h1 className="hero__title">
              <span className="hero__title-line">EvenlyV</span>
              <span className="hero__title-line hero__title-stroke">{t('heroName')}</span>
            </h1>

            <div className="hero__text-block">
              <p className="hero__role">{t('heroRole')}</p>
              <p className="hero__desc">
                <strong>{t('heroDesc1Title')}</strong> {t('heroDesc1Text')}
              </p>
              <p className="hero__desc">
                <strong>{t('heroDesc2Title')}</strong> {t('heroDesc2Text')}
              </p>
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: КУБ + КНОПКА (В ПРАВОМ УГЛУ) */}
          <div className="hero__visual-section">
            <div className="cube-wrapper">
              <div className="cube">
                <div className="cube__face cube__face--front">
                  <div className="cube__icon">Ps</div>
                  <span className="cube__label">Photoshop</span>
                </div>
                <div className="cube__face cube__face--back">
                  <div className="cube__icon">C4D</div>
                  <span className="cube__label">Cinema 4D</span>
                </div>
                <div className="cube__face cube__face--right">
                  <div className="cube__icon">Ai</div>
                  <span className="cube__label">Illustrator</span>
                </div>
                <div className="cube__face cube__face--left">
                  <div className="cube__icon">AE</div>
                  <span className="cube__label">After Effects</span>
                </div>
                <div className="cube__face cube__face--top">
                  <div className="cube__icon">F</div>
                  <span className="cube__label">Figma Desing</span>
                </div>
                <div className="cube__face cube__face--bottom">
                  <div className="cube__icon">UE</div>
                  <span className="cube__label">Unreal Engine</span>
                </div>
              </div>
            </div>

            <a href="#works" className="btn-primary">
              {t('heroCta')}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};