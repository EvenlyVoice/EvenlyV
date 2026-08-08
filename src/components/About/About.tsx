import './About.css';
import Photo from '../../assets/img/photo_ev.png'

export const About = () => {
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
              ДА ДА ДА, ЭТО Я<br/>ПРОСТО ТУТ СЛИШКОМ ВАЖНЫЙ
            </div>
          </div>
          
          <div>
            <span className="about__label">(03) Обо мне</span>
            <h2 className="about__title">
              4 года я закрываю полный цикл: <span className="about__highlight">идея → готовый дизайн → реализация</span>.
            </h2>
            <p className="about__text">
              Начинал и учился как художник, влюбился в дизайн, потом — в код. Сегодня делаю сайты, брендинг, типографию, 3D визуализацию, которые выглядят как хороший арт-дирекшн.
            </p>
            
            <div className="about__stats">
              {[
                { value: '4+', label: 'Лет опыта' },
                { value: '11', label: 'Проектов' },
                { value: '16', label: 'Отраслей' },
                { value: '4', label: 'Образование и специальности' }
              ].map((stat, index) => (
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