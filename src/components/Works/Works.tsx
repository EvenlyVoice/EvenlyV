import './Works.css';
import myteacherImg from '../../assets/img/MyteacherWebSite.png';
import jewelry from '../../assets/img/jewelry.png';
import ArtFamyilyWebSite from '../../assets/img/ArtFamyilyWebSite.png';
import GhGames from '../../assets/img/GH_Games.png';
import RCCM from '../../assets/img/RC_CM.png';
import Bradns from '../../assets/img/Brends.png';
import { useLanguage } from '../../i18n';

export const Works = () => {
  const { t } = useLanguage();

  const PROJECTS = [
    { title: t('work1Title'), category: t('work1Category'), year: '2026', image: myteacherImg, link: 'https://myteacher.pro' },
    { title: t('work3Title'), category: t('work3Category'), year: '2025', image: GhGames, link: 'https://gh-games.com/' },
    { title: t('work2Title'), category: t('work2Category'), year: '2025', image: ArtFamyilyWebSite, link: 'https://slaffpro.github.io/Art_Family/' },
    { title: t('work4Title'), category: t('work4Category'), year: '2026', image: RCCM, link: 'https://store.steampowered.com/app/2717940/RC_Car_Maniacs/' },
    { title: t('work5Title'), category: t('work5Category'), year: '2025', image: jewelry},
    { title: t('work6Title'), category: t('work6Category'), year: '2025', image: Bradns,},
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
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="work-card"
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