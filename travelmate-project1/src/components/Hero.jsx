import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <span className="hero-subtitle">Smart Travel Planner</span>
          <h1>Explore the World, One Journey at a Time</h1>
          <p>Discover hidden gems, plan your itinerary, and create memories that last a lifetime with TravelMate.</p>
          
          <div className="hero-search">
            <div className="search-input">
              <MapPin className="text-primary" />
              <input type="text" placeholder="Where to?" />
            </div>
            <div className="search-input">
              <Calendar className="text-primary" />
              <input type="text" placeholder="When?" />
            </div>
            <Link to="/destinations" className="btn btn-primary">
              <Search className="w-5 h-5 mr-2" />
              Find Trips
            </Link>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-num">500+</span>
              <span className="stat-label">Destinations</span>
            </div>
            <div className="stat-item">
                <span className="stat-num">12k+</span>
                <span className="stat-label">Happy Travelers</span>
            </div>
            <div className="stat-item">
                <span className="stat-num">4.8</span>
                <span className="stat-label">Avg Rating</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero {
          height: 90vh;
          min-height: 600px;
          background: url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1920') center/cover no-repeat;
          display: flex;
          align-items: center;
          position: relative;
          color: white;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%);
        }
        .hero-content {
          max-width: 800px;
        }
        .hero-subtitle {
          display: inline-block;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(5px);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-full);
          font-weight: 600;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(255,255,255,0.3);
        }
        .hero h1 {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: white;
        }
        .hero p {
          font-size: clamp(1.1rem, 2vw, 1.25rem);
          opacity: 0.9;
          margin-bottom: 3rem;
          max-width: 600px;
        }
        .hero-search {
          background: white;
          padding: 1rem;
          border-radius: var(--radius-lg);
          display: flex;
          gap: 1rem;
          align-items: center;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
          flex-wrap: wrap;
        }
        .search-input {
          flex: 1;
          min-width: 200px;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 1rem;
          border-right: 1px solid #e2e8f0;
        }
        .search-input:last-of-type { border-right: none; }
        .search-input input {
          border: none;
          outline: none;
          width: 100%;
          font-size: 1rem;
          color: var(--text-main);
        }
        .hero-stats {
          display: flex;
          gap: 3rem;
          margin-top: 4rem;
        }
        .stat-num {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          color: var(--primary);
        }
        .stat-label {
          font-size: 0.875rem;
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        @media (max-width: 768px) {
          .hero-search {
            flex-direction: column;
            gap: 0.5rem;
          }
          .search-input {
            border-right: none;
            border-bottom: 1px solid #e2e8f0;
            width: 100%;
          }
          .hero-stats {
            gap: 1.5rem;
            justify-content: space-between;
          }
          .stat-num { font-size: 1.5rem; }
        }
      `}</style>
    </div>
  );
};

export default Hero;
