import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

export type Lang = 'ru' | 'en';

const ru = {
  // Nav
  navWorks: 'Работы',
  navProcess: 'Процесс',
  navAbout: 'Обо мне',
  navContact: 'Контакт',
  navStatus: 'Открыт к проектам',
  navMenu: 'Меню',

  // Marquee
  marquee1: 'ИДЕЯ • МАКЕТ • ДИЗАЙН • КОД • 3D •',
  marquee2: 'ИДЕЯ • ДИЗАЙН • КОД • ДВИЖЕНИЕ •',

  // Hero
  heroMeta1: 'Портфолио — 2026',
  heroMeta2: 'Москва · UTC+3',
  heroName: 'Бондаревский Павел',
  heroRole: 'Дизайнер × Разработчик',
  heroDesc1Title: 'Полный цикл создания сайта:',
  heroDesc1Text: 'интерфейс, макет, помощь с продакшеном.',
  heroDesc2Title: 'Брендинг под ключ',
  heroDesc2Text: '— от 3D-визуализации до печати и web.',
  heroCta: 'Смотреть работы ↗',

  // Works
  worksLabel: '(01) Работы',
  worksTitle1: 'Мои',
  worksTitle2: 'проекты',
  worksNote: 'Каждый проект — от первого штриха до живого воплощения искусства.',
  work1Title: 'Myteacher.pro',
  work1Category: 'Сайт для репетитора',
  work2Title: 'Jewelry',
  work2Category: '3D · Печать',

  // Process
  processLabel: '(02) Процесс',
  processTitle1: 'От макета',
  processTitle2: 'до выкладки',
  stage1Title: 'Макет',
  stage1Desc: 'Wireframes, Figma, CJM, User Flow',
  stage2Title: 'Дизайн-система',
  stage2Desc: 'Tokens, Typography, UI Kit, Components',
  stage3Title: 'Вёрстка',
  stage3Desc: 'React, Semantic HTML, A11y, Pixel Perfect',
  stage4Title: 'Анимации',
  stage4Desc: 'GSAP, Framer Motion, Micro-interactions',
  stage5Title: 'Деплой',
  stage5Desc: 'CI/CD, Vercel, Analytics, Monitoring',
  processWireframeMe: 'Я',
  processPalette: 'Палитра',
  processTypeScale: 'Типографика',
  processUiKit: 'UI-кит',
  processButton: 'Кнопка',
  processInput: 'Поле ввода...',
  processCodeHello: 'Привет, мир',
  processCodeComment: '// пиксель перфект ✓',
  processLive: 'LIVE',
  processCommits: '→ 3 коммита успешно отправлены',
  processBuild: '✓ Сборка завершена за 4.2с',
  processLink: '🔗 https://EvenlyV.dev',

  // About
  aboutSticker1: 'ДА ДА ДА, ЭТО Я',
  aboutSticker2: 'ПРОСТО ТУТ СЛИШКОМ ВАЖНЫЙ',
  aboutLabel: '(03) Обо мне',
  aboutTitleStart: '4 года я закрываю полный цикл:',
  aboutTitleHighlight: 'идея → готовый дизайн → реализация',
  aboutText: 'Начинал и учился как художник, влюбился в дизайн, потом — в код. Сегодня делаю сайты, брендинг, типографику, 3D-визуализацию, которые выглядят как хороший арт-дирекшн.',
  stat1: 'Лет опыта',
  stat2: 'Проектов',
  stat3: 'Отраслей',
  stat4: 'Образование и специальности',

  // Footer
  footerTitle1: 'Есть идея?',
  footerTitle2: 'Соберем проект',
  footerTg: 'TG: @evenlyV',
  footerCopy: '© 2026 EvenlyV',
  footerMade: 'Сделано руками + код',
  footerCity: 'Москва',
  footerUp: 'Наверх ↑',
};

const en: typeof ru = {
  // Nav
  navWorks: 'Works',
  navProcess: 'Process',
  navAbout: 'About',
  navContact: 'Contact',
  navStatus: 'Open for projects',
  navMenu: 'Menu',

  // Marquee
  marquee1: 'IDEA • MOCKUP • DESIGN • CODE • 3D •',
  marquee2: 'IDEA • DESIGN • CODE • MOTION •',

  // Hero
  heroMeta1: 'Portfolio — 2026',
  heroMeta2: 'Moscow · UTC+3',
  heroName: 'Pavel Bondarevsky',
  heroRole: 'Designer × Developer',
  heroDesc1Title: 'Full-cycle website creation:',
  heroDesc1Text: 'interface, layout, production.',
  heroDesc2Title: 'Turnkey branding',
  heroDesc2Text: '— from 3D visualization to print and web.',
  heroCta: 'View works ↗',

  // Works
  worksLabel: '(01) Works',
  worksTitle1: 'Selected',
  worksTitle2: 'projects',
  worksNote: 'Every project — from the first stroke to a living work of art.',
  work1Title: 'Myteacher.pro',
  work1Category: 'Tutor website',
  work2Title: 'Jewelry',
  work2Category: '3D · Print',

  // Process
  processLabel: '(02) Process',
  processTitle1: 'From mockup',
  processTitle2: 'to deploy',
  stage1Title: 'Mockup',
  stage1Desc: 'Wireframes, Figma, CJM, User Flow',
  stage2Title: 'Design System',
  stage2Desc: 'Tokens, Typography, UI Kit, Components',
  stage3Title: 'Frontend',
  stage3Desc: 'React, Semantic HTML, A11y, Pixel Perfect',
  stage4Title: 'Animation',
  stage4Desc: 'GSAP, Framer Motion, Micro-interactions',
  stage5Title: 'Deploy',
  stage5Desc: 'CI/CD, Vercel, Analytics, Monitoring',
  processWireframeMe: 'Me',
  processPalette: 'Palette',
  processTypeScale: 'Type Scale',
  processUiKit: 'UI Kit',
  processButton: 'Button',
  processInput: 'Input field...',
  processCodeHello: 'Hello World',
  processCodeComment: '// pixel perfect ✓',
  processLive: 'LIVE',
  processCommits: '→ 3 commits pushed successfully',
  processBuild: '✓ Build completed in 4.2s',
  processLink: '🔗 https://EvenlyV.dev',

  // About
  aboutSticker1: 'YEAH YEAH YEAH, THIS IS ME',
  aboutSticker2: 'JUST FEELING A LITTLE TOO IMPORTANT HERE',
  aboutLabel: '(03) About',
  aboutTitleStart: 'For 4 years I’ve been handling the full cycle:',
  aboutTitleHighlight: 'idea → finished design → implementation',
  aboutText: 'Started as an artist, fell in love with design, then with code. Today I build websites, branding, typography, and 3D visuals that look like strong art direction.',
  stat1: 'Years of experience',
  stat2: 'Projects',
  stat3: 'Industries',
  stat4: 'Education & specialties',

  // Footer
  footerTitle1: 'Got an idea?',
  footerTitle2: "Let's build a project",
  footerTg: 'TG: @evenlyV',
  footerCopy: '© 2026 EvenlyV',
  footerMade: 'Made by hands + code',
  footerCity: 'Moscow',
  footerUp: 'Back to top ↑',
};

const translations: Record<Lang, typeof ru> = { ru, en };
export type TranslationKey = keyof typeof ru;

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('site-lang');
    return saved === 'en' || saved === 'ru' ? saved : 'ru';
  });

  useEffect(() => {
    localStorage.setItem('site-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: TranslationKey) => translations[lang][key];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}