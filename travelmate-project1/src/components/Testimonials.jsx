import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = ({ testimonials }) => {
  return (
    <section className="section bg-slate-50">
      <div className="container">
        <div className="section-title">
          <h2>What Our Travelers Say</h2>
          <p>Real experiences from our global community of adventurers.</p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="testimonial-card"
            >
              <Quote className="w-10 h-10 text-primary/10 mb-4" />
              <p className="text-slate-600 italic mb-6">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-primary" />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .bg-slate-50 { background-color: #f8fafc; }
        .text-primary\\/10 { color: rgba(37, 99, 235, 0.1); }
        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .testimonial-card {
          background: white;
          padding: 2rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          position: relative;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
