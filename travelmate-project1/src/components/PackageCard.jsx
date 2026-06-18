import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PackageCard = ({ pkg }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="package-card"
    >
      <div className="package-image">
        <img src={pkg.image} alt={pkg.title} />
        <div className="package-price">{pkg.price}</div>
      </div>
      <div className="package-content">
        <h3 className="text-xl font-bold mb-3">{pkg.title}</h3>
        <div className="flex items-center gap-2 text-slate-500 mb-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm">{pkg.destinations}</span>
        </div>
        <div className="flex items-center gap-2 text-slate-500 mb-6">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="text-sm">{pkg.duration}</span>
        </div>
        <button className="btn btn-outline w-full flex items-center justify-center gap-2">
          View Details
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <style jsx>{`
        .package-card {
          background: white;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          display: flex;
          flex-direction: column;
        }
        .package-image {
          position: relative;
          height: 240px;
        }
        .package-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .package-price {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          background: var(--white);
          color: var(--primary);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-md);
          font-weight: 800;
          font-size: 1.25rem;
          box-shadow: var(--shadow-md);
        }
        .package-content {
          padding: 1.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .package-content button {
          margin-top: auto;
        }
      `}</style>
    </motion.div>
  );
};

export default PackageCard;
