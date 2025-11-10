import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { HomePage } from './pages/HomePage';
import { PricingPage } from './pages/PricingPage';
import { useEffect } from 'react';

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Počkaj kým sa stránka načíta
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return null;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <ScrollToHash />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cennik" element={<PricingPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}
