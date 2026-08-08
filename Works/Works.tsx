import './Works.css';
import myteacherImg from '../../assets/img/myteacherImg .png';
const PROJECTS = [
  { 
    title: 'Myteacher.pro', 
    category: 'Tutor website', 
    year: '2026', 
    image: myteacherImg, // ← используем переменную, БЕЗ кавычек
    large: true   
  },
  { 
    title: 'Пульс Банк', 
    category: 'Fintech Dashboard', 
    year: '2025', 
    image: 'https://image.qwenlm.ai/public_source/90c10a83-813d-4666-a315-5be0f89e226d/1dd67a8de-3aff-4abe-af9d-1d8c983f09f9.png'
  },
  { 
    title: 'Север', 
    category: 'Fashion E-com', 
    year: '2025', 
    image: 'https://image.qwenlm.ai/public_source/90c10a83-813d-4666-a315-5be0f89e226d/10e4895af-1e02-497d-8768-c884a0ca01e1.png'
  },
  { 
    title: 'Сигнал', 
    category: 'Music Festival', 
    year: '2024', 
    image: 'https://image.qwenlm.ai/public_source/90c10a83-813d-4666-a315-5be0f89e226d/168e2615c-295e-4a60-8c50-dc0bac00bc8b.png'
  },
  { 
    title: 'Бюро 3.2', 
    category: 'Architecture', 
    year: '2024', 
    image: 'https://image.qwenlm.ai/public_source/90c10a83-813d-4666-a315-5be0f89e226d/18dd8c7ed-22e4-4ce9-823b-eb0d4e152e96.png'
  },
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
            Каждый проект — от первой линии в Figma до живой ссылки в продакшене.
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
                <span className="work-card__badge">Кейс 0{index + 1}</span>
                <span className="work-card__arrow">↗</span>
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