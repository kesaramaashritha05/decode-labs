import React, { useState } from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import DestinationCard from '../components/DestinationCard';
import { destinations } from '../data/data';
import { motion, AnimatePresence } from 'framer-motion';

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Nature', 'Adventure', 'Relaxation', 'Beach'];

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         dest.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || dest.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-20 container">
      <div className="section-title">
        <h2>Uncover Your Next Adventure</h2>
        <p>Browse through our collection of premium travel locations.</p>
      </div>

      {/* Search & Filter Bar */}
      <div className="filter-bar">
        <div className="search-box">
          <Search className="w-5 h-5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by city or country..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="category-filters">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <p className="text-slate-500 mb-8">
        Showing {filteredDestinations.length} results
      </p>

      {/* Destinations Grid */}
      <motion.div layout className="destinations-page-grid">
        <AnimatePresence mode='popLayout'>
          {filteredDestinations.map((dest) => (
            <motion.div
              layout
              key={dest.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <DestinationCard destination={dest} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredDestinations.length === 0 && (
        <div className="text-center py-20">
          <h3 className="text-2xl font-bold text-slate-400">No destinations found</h3>
          <p className="text-slate-500">Try searching with different keywords or categories.</p>
        </div>
      )}

      <style jsx>{`
        .filter-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          margin-bottom: 2rem;
          background: white;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
        }
        .search-box {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: var(--background);
          padding: 0.75rem 1.25rem;
          border-radius: var(--radius-md);
        }
        .search-box input {
          border: none;
          background: none;
          outline: none;
          width: 100%;
          font-size: 1rem;
        }
        .category-filters {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
        }
        .filter-btn {
          padding: 0.5rem 1.25rem;
          border-radius: var(--radius-full);
          font-weight: 500;
          color: var(--text-muted);
          white-space: nowrap;
        }
        .filter-btn:hover {
          background: var(--primary);
          color: white;
        }
        .filter-btn.active {
          background: var(--primary);
          color: white;
        }
        .destinations-page-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        @media (max-width: 768px) {
          .filter-bar {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>
    </div>
  );
};

export default Destinations;
