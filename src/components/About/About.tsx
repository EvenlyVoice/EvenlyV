import './About.css';
import Photo from '../../assets/img/photo_ev.png';
import { useLanguage } from '../../i18n';

export const About = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '4+', label: t('stat1') },
    { value: '11', label: t('stat2') },
    { value: '15+', label: t('stat3') },
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
            <div className="about__content">
  <p className="about__text">{t('aboutText')}</p>
  
  <div className="about__skills">
    <div className="about__skills-item">
      <span className="about__skills-label">Frontend:</span>
      <span className="about__skills-value">React, JavaScript, HTML, SCSS</span>
    </div>
    <div className="about__skills-item">
      <span className="about__skills-label">Design:</span>
      <span className="about__skills-value">Figma, Adobe CC</span>
    </div>
    <div className="about__skills-item">
      <span className="about__skills-label">3D:</span>
      <span className="about__skills-value">Cinema 4D, Blender, Unreal Engine</span>
    </div>
  </div>
</div>
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