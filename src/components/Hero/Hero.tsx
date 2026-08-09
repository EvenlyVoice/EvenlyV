import './Hero.css';
import { useLanguage } from '../../i18n';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <header className="hero">
      <div className="hero__grid" />

      <div className="container">
        <div className="hero__meta">
          <span>{t('heroMeta1')}</span>
          <span>{t('heroMeta2')}</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line">EvenlyV</span>
          <span className="hero__title-line hero__title-stroke">{t('heroName')}</span>
        </h1>

        <div className="hero__content">
          <div>
            <p className="hero__role">{t('heroRole')}</p>
            <p className="hero__desc">
              <strong>{t('heroDesc1Title')}</strong> {t('heroDesc1Text')}
            </p>
            <p className="hero__desc">
              <strong>{t('heroDesc2Title')}</strong> {t('heroDesc2Text')}
            </p>
          </div>

          <div className="hero__cta">
            <a href="#works" className="btn-primary">
              {t('heroCta')}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};