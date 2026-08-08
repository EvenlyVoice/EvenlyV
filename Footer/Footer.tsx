import './Footer.css';

export const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <h2 className="footer__title">
          Есть идея?<br/>
          <span className="footer__title-stroke">Соберем проект</span>
        </h2>
        
        <div className="footer__cta-row">
          <a href="https://t.me/EvenlyV_Chanel" className="footer__email" data-hover>
            TG: @evenlyV <span>↗</span>
          </a>
          
          <div className="footer__socials">
            {['Telegram', 'GitHub', 'Behance', 'Dribbble'].map(social => (
              <a key={social} href="#" className="social-link" data-hover>
                {social}
              </a>
            ))}
          </div>
        </div>
        
        <div className="footer__bottom">
          <span>© 2026 EvenlyV</span>
          <span>Сделано руками + код</span>
          <span>Москва · {new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}</span>
          <a href="#top">Наверх ↑</a>
        </div>
      </div>
    </footer>
  );
};