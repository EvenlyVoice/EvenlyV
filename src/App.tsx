import { useState } from 'react';
import './App.css';
import { CustomCursor } from './components/CustomCursor/CustomCursor';
import { Preloader } from './components/Preloader/Preloader';
import { Navigation } from './components/Navigation/Navigation';
import { Hero } from './components/Hero/Hero';
import { Marquee } from './components/Marquee/Marquee';
import { Works } from './components/Works/Works';
import { Process } from './components/Process/Process';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div className="noise-overlay" />
      <CustomCursor />
      
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {!loading && (
        <main>
          <Navigation />
          <Hero />
          <Marquee text="ИДЕЯ • МАКЕТ • ДИЗАЙН • КОД • 3D •" />
          <Works />
          <Process />
          <Marquee text="IDEA • DESIGN • CODE • MOTION •" reverse lime />
          <About />
          <Footer />
        </main>
      )}
    </>
  );
}