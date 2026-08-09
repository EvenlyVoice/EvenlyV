import { useState, useEffect } from 'react';
import './Navigation.css';
import { useLanguage } from '../../i18n';

export const Navigation = () => {
  const { t, lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const LINKS = [
    { name: t('navWorks'), href: '#works' },
    { name: t('navProcess'), href: '#process' },
    { name: t('navAbout'), href: '#about' },
    { name: t('navContact'), href: '#contact' },
  ];

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="nav__logo">
          EV<span className="nav__logo-accent"></span>
        </a>

        <div className="nav__links">
          {LINKS.map(link => (
            <a key={link.href} href={link.href} className="nav__link">
              {link.name}
            </a>
          ))}
        </div>

            <div className="nav__status">
        <span className="nav__status-row">
          <span className="nav__dot" />
          {t('navStatus')}
        </span>
        <span className="nav__status-bar" />
      </div>

        <div className="nav__lang">
          <button
            className={`nav__lang-btn ${lang === 'ru' ? 'active' : ''}`}
            onClick={() => setLang('ru')}
          >
            RU
          </button>
          <button
            className={`nav__lang-btn ${lang === 'en' ? 'active' : ''}`}
            onClick={() => setLang('en')}
          >
            EN
          </button>
        </div>

        <button
          className={`nav__burger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={t('navMenu')}
        >
          <span className="nav__burger-line" />
          <span className="nav__burger-line" />
        </button>
      </nav>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {LINKS.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-menu__link"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}

        <div className="mobile-menu__lang">
          <button
            className={`nav__lang-btn ${lang === 'ru' ? 'active' : ''}`}
            onClick={() => setLang('ru')}
          >
            RU
          </button>
          <button
            className={`nav__lang-btn ${lang === 'en' ? 'active' : ''}`}
            onClick={() => setLang('en')}
          >
            EN
          </button>
        </div>
      </div>
    </>
  );
};