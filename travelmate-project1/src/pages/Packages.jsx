import React from 'react';
import PackageCard from '../components/PackageCard';
import { packages } from '../data/data';

const Packages = () => {
  return (
    <div className="pt-24 pb-20 container">
      <div className="section-title">
        <h2>Exclusive Travel Packages</h2>
        <p>All-inclusive deals designed for the ultimate vacation experience.</p>
      </div>

      <div className="packages-grid">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>

      <style jsx>{`
        .packages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
        }
        @media (max-width: 640px) {
          .packages-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Packages;
