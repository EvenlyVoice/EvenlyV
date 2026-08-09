import { useState } from 'react';
import './App.css';
import { LanguageProvider, useLanguage } from './i18n';
import { CustomCursor } from './components/CustomCursor/CustomCursor';
import { Preloader } from './components/Preloader/Preloader';
import { Navigation } from './components/Navigation/Navigation';
import { Hero } from './components/Hero/Hero';
import { Marquee } from './components/Marquee/Marquee';
import { Works } from './components/Works/Works';
import { Process } from './components/Process/Process';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';

const AppContent = () => {
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  return (
    <>
      <div className="noise-overlay" />
      <CustomCursor />

      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {!loading && (
        <main>
          <Navigation />
          <Hero />
          <Marquee text={t('marquee1')} />
          <Works />
          <Process />
          <Marquee text={t('marquee2')} reverse lime />
          <About />
          <Footer />
        </main>
      )}
    </>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}