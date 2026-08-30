import './Works.css';
import myteacherImg from '../../assets/img/myteacherImg .png';
import jewelry from '../../assets/img/jewelry.png';
import { useLanguage } from '../../i18n';

export const Works = () => {
  const { t } = useLanguage();

  const PROJECTS = [
    { title: t('work1Title'), category: t('work1Category'), year: '2026', image: myteacherImg },
    { title: t('work2Title'), category: t('work2Category'), year: '2025', image: jewelry },
  ];

  return (
    <section id="works" className="works">
      <div className="container">
        <div className="works__header">
          <div>
            <span className="works__label">{t('worksLabel')}</span>
            <h2 className="works__title">{t('worksTitle1')}<br/>{t('worksTitle2')}</h2>
          </div>
          <p className="works__note">{t('worksNote')}</p>
        </div>

        <div className="works__grid">
          {PROJECTS.map((project, index) => (
            <a
              key={index}
              href="#"
              // className={`work-card ${project.large ? 'large' : ''}`}
              data-hover
            >
              <div className="work-card__image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="work-card__image"
                  loading="lazy"
                />
              </div>
              <div className="work-card__meta">
                <div>
                  <span className="work-card__number">/0{index + 1}</span>
                  <h3 className="work-card__name">{project.title}</h3>
                </div>
                <div className="work-card__info">
                  <p className="work-card__category">{project.category}</p>
                  <span className="work-card__year">{project.year}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};