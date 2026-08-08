import { useState, useEffect } from 'react';
import './Navigation.css';

const LINKS = [
  { name: 'Работы', href: '#works' },
  { name: 'Процесс', href: '#process' },
  { name: 'Обо мне', href: '#about' },
  { name: 'Контакт', href: '#contact' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="nav__logo">
          EV<span className="nav__logo-accent"></span>
        </a>

        <div className="nav__links">
          {LINKS.map(link => (
            <a key={link.name} href={link.href} className="nav__link">
              {link.name}
            </a>
          ))}
        </div>

        <div className="nav__status">
          <span className="nav__dot" />
          Открыт к проектам
        </div>

        <button 
          className={`nav__burger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Меню"
        >
          <span className="nav__burger-line" />
          <span className="nav__burger-line" />
        </button>
      </nav>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {LINKS.map(link => (
          <a 
            key={link.name} 
            href={link.href} 
            className="mobile-menu__link"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </>
  );
};