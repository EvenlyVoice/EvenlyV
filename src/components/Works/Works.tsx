import './Works.css';
import myteacherImg from '../../assets/img/myteacherImg .png';
import jewelry from '../../assets/img/jewelry.png';
const PROJECTS = [
  { title: 'Myteacher.pro', category: 'Tutor website', year: '2026', image: myteacherImg },
  { title: 'Jewelry', category: '3D · Print', year: '2025', image: jewelry },
  // { title: 'Север', category: 'Fashion E-com', year: '2025', image: myteacherImg },
  // { title: 'Сигнал', category: 'Music Festival', year: '2024', image: myteacherImg },
];

export const Works = () => {
  return (
    <section id="works" className="works">
      <div className="container">
        <div className="works__header">
          <div>
            <span className="works__label">(01) Работы</span>
            <h2 className="works__title">Избранные<br/>проекты</h2>
          </div>
          <p className="works__note">
            Каждый проект — от первого штриха до живого воплащения искусства.
          </p>
        </div>

        <div className="works__grid">
          {PROJECTS.map((project, index) => (
            <a 
              key={index} 
              href="#" 
              className={`work-card ${project.large ? 'large' : ''}`}
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