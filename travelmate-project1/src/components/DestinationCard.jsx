import React from 'react';
import { MapPin, Clock, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const DestinationCard = ({ destination }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="dest-card"
    >
      <div className="dest-image">
        <img src={destination.image} alt={destination.name} />
        <div className="dest-badge">{destination.category}</div>
      </div>
      <div className="dest-content">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold">{destination.name}</h3>
          <div className="flex items-center gap-1 text-amber-500 font-bold">
            <Star className="w-4 h-4 fill-amber-500" />
            <span>{destination.rating}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-slate-500 mb-4">
          <MapPin className="w-4 h-4" />
          <span>{destination.location}</span>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 text-slate-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{destination.duration}</span>
          </div>
          <div className="text-primary font-bold">{destination.budget}</div>
        </div>
      </div>

      <style jsx>{`
        .dest-card {
          background: white;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          transition: var(--transition);
        }
        .dest-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        .dest-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .dest-card:hover .dest-image img {
          transform: scale(1.1);
        }
        .dest-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: var(--primary);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
        }
        .dest-content {
          padding: 1.5rem;
        }
        .text-amber-500 { color: #f59e0b; }
        .fill-amber-500 { fill: #f59e0b; }
      `}</style>
    </motion.div>
  );
};

export default DestinationCard;
