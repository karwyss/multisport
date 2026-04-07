import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function Home() {
  return (
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
  );
}

function App() {
  return (
    <ReactLenis root>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/obozy" element={<CampsPage />} />
        </Routes>
      </BrowserRouter>
    </ReactLenis>
  );
}

export default App;
