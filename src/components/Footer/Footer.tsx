import './Footer.css';
import { useLanguage } from '../../i18n';

export const Footer = () => {
  const { t, lang } = useLanguage();

  const timeLocale = lang === 'ru' ? 'ru-RU' : 'en-US';
  const currentTime = new Date().toLocaleTimeString(timeLocale, {
    hour: '2-digit',
    minute: '2-digit',
  });

  // Массив объектов: имя для отображения и реальная ссылка
  const socials = [
    { name: 'VK', url: 'https://vk.ru/evenlyv' },
    { name: 'GitHub', url: 'https://github.com/EvenlyVoice' }
  ];

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <h2 className="footer__title">
          {t('footerTitle1')}<br/>
          <span className="footer__title-stroke">{t('footerTitle2')}</span>
        </h2>

        <div className="footer__cta-row">
          <a 
            href="https://t.me/EvenlyV_Chanel" 
            className="footer__email" 
            data-hover 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {t('footerTg')} <span>↗</span>
          </a>

          <div className="footer__socials">
            {socials.map(social => (
              <a 
                key={social.name} 
                href={social.url} 
                className="social-link" 
                data-hover
                target="_blank" 
                rel="noopener noreferrer"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <span>{t('footerCopy')}</span>
          <span>{t('footerMade')}</span>
          <span>{t('footerCity')} · {currentTime}</span>
          <a href="#top">{t('footerUp')}</a>
        </div>
      </div>
    </footer>
  );
};