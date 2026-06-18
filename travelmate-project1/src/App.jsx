import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import TripPlanner from './pages/TripPlanner';
import Packages from './pages/Packages';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/planner" element={<TripPlanner />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

      <style jsx>{`
        .app {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        :global(main) {
          flex: 1;
        }
      `}</style>
    </div>
  );
}

export default App;
