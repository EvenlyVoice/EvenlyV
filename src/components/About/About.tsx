import './About.css';
import Photo from '../../assets/img/photo_ev.png';
import { useLanguage } from '../../i18n';

export const About = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '4+', label: t('stat1') },
    { value: '11', label: t('stat2') },
    { value: '16', label: t('stat3') },
    { value: '4',  label: t('stat4') },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__photo-wrapper">
            <img
              src={Photo}
              alt="EvenlyV"
              className="about__photo"
            />
            <div className="about__sticker">
              {t('aboutSticker1')}<br/>{t('aboutSticker2')}
            </div>
          </div>

          <div>
            <span className="about__label">{t('aboutLabel')}</span>
            <h2 className="about__title">
              {t('aboutTitleStart')} <span className="about__highlight">{t('aboutTitleHighlight')}</span>.
            </h2>
            <p className="about__text">{t('aboutText')}</p>

            <div className="about__stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-item__value">{stat.value}</span>
                  <span className="stat-item__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};