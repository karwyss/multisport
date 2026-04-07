import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Offer from './components/Offer';
import Camps from './components/Camps';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Popup from './components/Popup';
import CampsPage from './components/CampsPage';
import SEO from './components/SEO';

function Home() {
  return (
    <>
      <SEO 
        title="MultiSport Wadowice - Nauka Pływania | Obozy Sportowe"
        description="MultiSport Wadowice - nauka pływania dla dzieci i dorosłych. Zajęcia sportowe, obozy zimowe i letnie w Wadowicach. Zapisz się już dziś!"
      />
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Offer />
        <Camps />
        <Gallery />
        <Reviews />
        <CTA />
        <Footer />
        <Popup />
      </div>
    </>
  );
}

function CampsPageSEO() {
  return (
    <>
      <SEO 
        title="Obozy Sportowe Wadowice - Letnie i Zimowe | MultiSport"
        description="Obozy sportowe MultiSport Wadowice - obozy letnie nad jeziorem i zimowe w górach. Nauka pływania, sporty wodne, pełna opieka. Zarezerwuj miejsce już dziś!"
        url="https://karwyss.github.io/multisport/#/obozy"
      />
      <CampsPage />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ReactLenis root>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/obozy" element={<CampsPageSEO />} />
          </Routes>
        </HashRouter>
      </ReactLenis>
    </HelmetProvider>
  );
}

export default App;
