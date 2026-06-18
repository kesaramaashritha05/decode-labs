import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Plane } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col col-main">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Plane className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold tracking-tighter">
                Travel<span className="text-primary">Mate</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm">
              Your smart companion for planning unforgettable journeys. Explore destinations, book packages, and plan your perfect trip with ease.
            </p>
            <div className="flex gap-4">
              <a href="#" className="social-icon"><Facebook /></a>
              <a href="#" className="social-icon"><Twitter /></a>
              <a href="#" className="social-icon"><Instagram /></a>
            </div>
          </div>

          <div className="footer-col">
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/destinations" className="hover:text-primary transition-colors">Destinations</Link></li>
              <li><Link to="/planner" className="hover:text-primary transition-colors">Trip Planner</Link></li>
              <li><Link to="/packages" className="hover:text-primary transition-colors">Packages</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="text-lg font-bold mb-6">Support</h3>
            <ul className="flex flex-col gap-4">
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-primary" />
                <span>123 Travel St, Wanderland</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@travelmate.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-500">
          <p>© 2026 TravelMate. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .bg-slate-900 { background-color: #0f172a; }
        .text-white { color: white; }
        .text-slate-400 { color: #94a3b8; }
        .text-slate-500 { color: #64748b; }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 3rem;
        }
        .social-icon {
          background: rgba(255,255,255,0.05);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: var(--transition);
        }
        .social-icon :global(svg) { width: 20px; height: 20px; }
        .social-icon:hover {
          background: var(--primary);
          transform: translateY(-3px);
        }
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
          .col-main { grid-column: span 2; }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .col-main { grid-column: span 1; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
