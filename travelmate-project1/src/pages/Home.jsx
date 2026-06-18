import React from 'react';
import Hero from '../components/Hero';
import DestinationCard from '../components/DestinationCard';
import Testimonials from '../components/Testimonials';
import { destinations, testimonials } from '../data/data';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredDestinations = destinations.slice(0, 3);

  return (
    <main>
      <Hero />
      
      {/* Featured Destinations */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Popular Destinations</h2>
            <p>Explore our most loved destinations hand-picked for you.</p>
          </div>
          
          <div className="destinations-grid">
            {featuredDestinations.map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <DestinationCard destination={dest} />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/destinations" className="btn btn-outline">
              View All Destinations
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1530789253513-976cdf9a5ee0?auto=format&fit=crop&q=80&w=800" 
                alt="Travel experiences" 
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Create Memories That Last a Lifetime</h2>
              <p className="text-slate-600 mb-8 text-lg">
                We believe travel is more than just visiting places. It's about the people you meet, the food you taste, and the stories you bring back home.
              </p>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="font-semibold">Curated Local Experiences</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="font-semibold">Personalized Trip Planning</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="font-semibold">24/7 Traveler Support</span>
                </li>
              </ul>
              <Link to="/planner" className="btn btn-primary">Start Planning Now</Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Testimonials testimonials={testimonials} />

      <style jsx>{`
        .destinations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .mt-12 { margin-top: 3rem; }
        .text-center { text-align: center; }
        .ml-2 { margin-left: 0.5rem; }
        .grid { display: grid; }
        .gap-12 { gap: 3rem; }
        @media (min-width: 768px) {
          .md\\:grid-cols-2 { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </main>
  );
};

export default Home;
